// The site is static; this script does two small things in front of it.
//
// 1. Every other spelling of the address -- www.bubbletranslate.app, and plain
//    http:// on either host -- goes to https://bubbletranslate.app with one
//    permanent redirect. Without it each spelling answered 200 with the same
//    pages, which search engines see as duplicate content.
//
// 2. The blog. Posts are written in Soro and its script draws them in the
//    browser, so the HTML the server sent was the same empty page for /blog
//    and for every /blog?post=<slug>, and Google filed them as duplicates of
//    each other. Here each post page gets its own title, description,
//    canonical and text in the HTML itself, the list page gets real links to
//    every post, and the sitemap lists them. Soro's script still runs and
//    redraws the same content, so a visitor sees no difference.
//
// Everything else goes straight to the static assets, 404 page included. If
// Soro cannot be reached, the blog is served exactly as before.
const HOST = 'bubbletranslate.app';
const SITE = 'https://' + HOST;
const SORO = 'https://app.trysoro.com/api/embed/5bdd83ad-a31a-4004-b300-d83987456bd8';
// Soro is asked at most this often per article; a new post appears within it.
const SORO_CACHE_SECONDS = 600;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // `wrangler dev` presents requests as http://bubbletranslate.app, so run
    // it with `--local-protocol https` or every page redirects to the live site.
    const www = url.hostname === 'www.' + HOST;
    if (www || (url.hostname === HOST && url.protocol !== 'https:')) {
      url.hostname = HOST;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    const page = await env.ASSETS.fetch(request);
    if (request.method !== 'GET' || page.status !== 200) return page;
    try {
      if (url.pathname === '/blog') return fresh(await blog(page, url));
      if (url.pathname === '/sitemap.xml') return await sitemap(page);
    } catch (e) {
      // Soro unreachable or changed shape: the plain page is still correct.
    }
    return page;
  }
};

// The rewritten page is no longer the file the asset ETag describes, so it
// must not be answered with a 304 against that ETag.
function fresh(res) {
  const out = new Response(res.body, res);
  out.headers.delete('etag');
  return out;
}

async function soro(path) {
  const res = await fetch(SORO + path, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; bubbletranslate.app blog renderer)', 'Referer': SITE + '/blog' },
    cf: { cacheTtl: SORO_CACHE_SECONDS, cacheEverything: true } });
  if (!res.ok) throw new Error('soro ' + res.status);
  return res;
}

// The article list is a JSON array inside Soro's embed script.
async function articles() {
  const js = await (await soro('?theme=dark')).text();
  const m = js.match(/var SORO_ARTICLES = (\[[\s\S]*?\]);\n/);
  if (!m) throw new Error('soro: no article list');
  return JSON.parse(m[1]).filter(a => a && a.slug && a.title);
}

const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const postUrl = slug => SITE + '/blog?post=' + encodeURIComponent(slug);

function setContent(selector, value) {
  return [selector, { element(el) { el.setAttribute('content', value); } }];
}

async function blog(page, url) {
  const list = await articles();
  const slug = url.searchParams.get('post');
  const post = slug && list.find(a => a.slug === slug);
  let rw = new HTMLRewriter();

  if (!post) {
    // The list. Its canonical is a plain one: Soro removes only its own
    // (data-soro) canonical when it shows the list, so this one stays.
    rw = rw
      .on('head', { element(el) {
        el.append('<link rel="canonical" href="' + SITE + '/blog">', { html: true });
      } })
      .on('#soro-blog', { element(el) {
        el.setInnerContent('<ul class="soro-static">' + list.map(a =>
          '<li><a href="/blog?post=' + esc(encodeURIComponent(a.slug)) + '">' + esc(a.title) + '</a>' +
          (a.excerpt ? '<p>' + esc(a.excerpt) + '</p>' : '') + '</li>').join('') + '</ul>', { html: true });
      } });
    return rw.transform(page);
  }

  const data = await (await soro('/article/' + encodeURIComponent(post.id))).json();
  const canonical = postUrl(post.slug);
  const title = post.title + ' — bubbleTranslate';
  const desc = post.excerpt || '';
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: desc,
    datePublished: post.isoDate,
    image: post.image || undefined,
    url: canonical,
    mainEntityOfPage: canonical,
    publisher: { '@type': 'Organization', name: 'bubbleTranslate', url: SITE + '/' }
  };
  rw = rw
    .on('title', { element(el) { el.setInnerContent(title); } })
    .on(...setContent('meta[name="description"]', desc))
    .on(...setContent('meta[property="og:title"]', title))
    .on(...setContent('meta[property="og:description"]', desc))
    .on(...setContent('meta[property="og:url"]', canonical))
    .on(...setContent('meta[property="og:type"]', 'article'))
    .on(...setContent('meta[name="twitter:title"]', title))
    .on(...setContent('meta[name="twitter:description"]', desc))
    .on('head', { element(el) {
      // data-soro: Soro's script looks for exactly this canonical and reuses
      // it, so the page never carries two.
      el.append('<link rel="canonical" data-soro="true" href="' + esc(canonical) + '">' +
        '<script type="application/ld+json">' + JSON.stringify(ld).replace(/</g, '\\u003c') + '</script>',
        { html: true });
    } })
    .on('#soro-blog', { element(el) {
      // The same HTML Soro's script would draw; it replaces this on load.
      el.setInnerContent('<article class="soro-static"><h2>' + esc(post.title) + '</h2>' +
        (post.date ? '<p class="muted">' + esc(post.date) + '</p>' : '') +
        (data && data.content ? data.content : '') + '</article>', { html: true });
    } });
  if (post.image) {
    rw = rw.on(...setContent('meta[property="og:image"]', post.image))
           .on(...setContent('meta[name="twitter:image"]', post.image));
  }
  return rw.transform(page);
}

// The static sitemap, with every post appended.
async function sitemap(page) {
  const [xml, list] = await Promise.all([page.text(), articles()]);
  const posts = list.map(a =>
    '  <url><loc>' + esc(postUrl(a.slug)) + '</loc>' +
    (a.isoDate ? '<lastmod>' + esc(a.isoDate.slice(0, 10)) + '</lastmod>' : '') +
    '<changefreq>monthly</changefreq><priority>0.6</priority></url>\n').join('');
  const headers = new Headers(page.headers);
  headers.delete('content-length');
  return new Response(xml.replace('</urlset>', posts + '</urlset>'), { status: 200, headers });
}
