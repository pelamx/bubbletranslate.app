#!/usr/bin/env python3
"""Regenerate the localized /tr/ and /es/ pages from the English source.

The English pages (index.html, pricing.html) and the translation tables in
script.js are the single source of truth. Run this after any copy change so
the localized pages -- which crawlers index and no-JS visitors see -- do not
drift from the English ones:

    python3 scripts/build-i18n.py

It rewrites tr/{index,pricing}.html and es/{index,pricing}.html, and makes
sure the English root pages carry the hreflang cluster. It needs `node` on the
PATH to read the I18N object out of script.js.
"""
import json, re, os, sys, subprocess, tempfile
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

# --- pull the I18N dictionary out of script.js via node -------------------
EXTRACT = r"""
const fs=require('fs');
let s=fs.readFileSync('script.js','utf8');
const start=s.indexOf('const I18N = {');
let i=s.indexOf('{',start), depth=0, end=-1;
for(;i<s.length;i++){const c=s[i]; if(c==='{')depth++; else if(c==='}'){depth--; if(depth===0){end=i;break;}}}
const objText=s.slice(s.indexOf('{',start), end+1);
process.stdout.write(JSON.stringify(eval('('+objText+')')));
"""
I18N = json.loads(subprocess.check_output(["node","-e",EXTRACT]))
EN = I18N["en"]

class Render(HTMLParser):
    def __init__(self, table):
        super().__init__(convert_charrefs=False)
        self.out=[]; self.table=table; self.skip=None; self.depth=0
    def handle_starttag(self, tag, attrs):
        if self.skip:
            if tag==self.skip: self.depth+=1
            return
        self.out.append(self.get_starttag_text())
        d=dict(attrs)
        if 'data-i18n' in d:
            key=d['data-i18n']
            self.out.append(self.table.get(key, EN.get(key,'')))
            self.skip=tag; self.depth=1
    def handle_startendtag(self, tag, attrs):
        if not self.skip: self.out.append(self.get_starttag_text())
    def handle_endtag(self, tag):
        if self.skip:
            if tag==self.skip:
                self.depth-=1
                if self.depth==0:
                    self.out.append('</%s>'%tag); self.skip=None
            return
        self.out.append('</%s>'%tag)
    def handle_data(self,d):
        if not self.skip: self.out.append(d)
    def handle_comment(self,d):
        if not self.skip: self.out.append('<!--%s-->'%d)
    def handle_entityref(self,n):
        if not self.skip: self.out.append('&%s;'%n)
    def handle_charref(self,n):
        if not self.skip: self.out.append('&#%s;'%n)
    def handle_decl(self,d): self.out.append('<!%s>'%d)
    def unknown_decl(self,d): self.out.append('<![%s]>'%d)
    def handle_pi(self,d): self.out.append('<?%s>'%d)

GROUPS = {
 "index":   {"en":"https://bubbletranslate.app/",       "tr":"https://bubbletranslate.app/tr/",       "es":"https://bubbletranslate.app/es/"},
 "pricing": {"en":"https://bubbletranslate.app/pricing", "tr":"https://bubbletranslate.app/tr/pricing", "es":"https://bubbletranslate.app/es/pricing"},
}
METAKEY = {"index":"meta", "pricing":"pricing.meta"}

def hreflang_block(group):
    g=GROUPS[group]
    return "".join('  <link rel="alternate" hreflang="%s" href="%s">\n' % (k, g[v])
                   for k,v in (("en","en"),("tr","tr"),("es","es"),("x-default","en")))

def add_hreflang(html, group):
    if 'hreflang=' in html: return html
    return re.sub(r'(<link rel="canonical"[^>]*>\n)', r'\1'+hreflang_block(group), html, count=1)

def gen(page_file, group, lang):
    r=Render(I18N[lang]); r.feed(open(page_file,encoding="utf-8").read()); r.close()
    html="".join(r.out); table=I18N[lang]; mk=METAKEY[group]
    title=table.get(mk+".title", EN.get(mk+".title"))
    desc =table.get(mk+".desc",  EN.get(mk+".desc"))
    url=GROUPS[group][lang]
    html=html.replace('<html lang="en">', '<html lang="%s">'%lang, 1)
    html=re.sub(r'<title>.*?</title>', '<title>%s</title>'%title, html, count=1, flags=re.S)
    html=re.sub(r'(<meta name="description" content=")(.*?)(">)', lambda m:m.group(1)+desc.replace('"','&quot;')+m.group(3), html, count=1)
    html=re.sub(r'<link rel="canonical" href="[^"]*">', '<link rel="canonical" href="%s">'%url, html, count=1)
    html=re.sub(r'(<meta property="og:url" content=")[^"]*(">)', r'\g<1>'+url+r'\2', html, count=1)
    html=re.sub(r'(<meta property="og:title" content=")[^"]*(">)', lambda m:m.group(1)+title.replace('"','&quot;')+m.group(2), html, count=1)
    html=re.sub(r'(<meta property="og:description" content=")[^"]*(">)', lambda m:m.group(1)+desc.replace('"','&quot;')+m.group(2), html, count=1)
    for a,b in (('href="styles.css','href="/styles.css'),('src="script.js','src="/script.js'),
                ('href="favicon.svg"','href="/favicon.svg"'),('src="favicon.svg"','src="/favicon.svg"'),
                ('"downloads/','"/downloads/'),('href="privacy.html"','href="/privacy"'),
                ('href="terms.html"','href="/terms"'),('href="refunds.html"','href="/refunds"')):
        html=html.replace(a,b)
    return add_hreflang(html, group)

for lang in ("tr","es"):
    os.makedirs(lang, exist_ok=True)
    open(os.path.join(lang,"index.html"),"w",encoding="utf-8").write(gen("index.html","index",lang))
    open(os.path.join(lang,"pricing.html"),"w",encoding="utf-8").write(gen("pricing.html","pricing",lang))
    print("wrote", lang+"/index.html,", lang+"/pricing.html")

for pf,grp in (("index.html","index"),("pricing.html","pricing")):
    src=open(pf,encoding="utf-8").read()          # read fully before reopening for write
    open(pf,"w",encoding="utf-8").write(add_hreflang(src, grp))
print("ensured hreflang on root index.html, pricing.html")
