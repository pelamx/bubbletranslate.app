// ---- Mobile nav toggle ----
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// ---- Footer year ----
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// ============================================================
//  Internationalisation — English / Türkçe / Español
//  Text lives in this dictionary, keyed by the data-i18n
//  attribute on each element. Values may contain HTML.
// ============================================================
const I18N = {
  en: {
    'meta.title': 'bubbleTranslate — Translate all selectable text without leaving your desktop',
    'meta.desc': 'bubbleTranslate is a lightweight desktop app for macOS, Windows and Linux. Select text in any app and a bubble appears at your cursor with the translation. 10 free translations a day; go unlimited with Pro from $2/month.',

    // -- /pricing -----------------------------------------------------------
    'pricing.meta.title': 'Pricing — bubbleTranslate',
    'pricing.meta.desc': 'bubbleTranslate is free for 10 translations a day. Pro removes the daily limit for $2 a month or $20 a year, on up to three machines.',
    'pricing.h1': 'Free to use. Pro when ten a day is not enough.',
    'pricing.sub': 'Every feature is in the free version. Pro changes exactly one thing: it removes the daily limit.',
    'pricing.counts.h3': 'What counts as a translation',
    'pricing.counts.p': 'Only a translation you asked for and actually got back. Re-selecting text you already translated today is free, a failed request costs nothing, and switching the target language on a result you have already seen does not charge you twice. The count resets at your own midnight, not at UTC.',
    'pricing.region.h3': 'How you pay',
    'pricing.region.p': 'Checkout is handled by Paddle, which acts as the merchant of record. It prices the transaction in your own currency. Taxes, if applicable, are calculated and shown by Paddle at checkout, so the amount shown there is the amount you pay. Pro is a subscription you can cancel at any time.',
    'pricing.faq.h2': 'Before you buy',
    'pricing.faq.q1': 'What happens when I run out?',
    'pricing.faq.a1': 'The bubble tells you the allowance is spent and offers Pro. Nothing else changes, and the count comes back at midnight.',
    'pricing.faq.q2': 'Do I need an account?',
    'pricing.faq.a2': 'No. There is no sign-up and no password. A purchase gives you a licence key, and the key is all the app ever asks for.',
    'pricing.faq.q3': 'How many machines?',
    'pricing.faq.a3': 'Three at a time, on one key. Freeing a slot takes one click in the app on a machine you no longer use.',
    'pricing.faq.q4': 'Can I get a refund?',
    'pricing.faq.a4': 'Yes, within 14 days, no reason needed. Cancelling is separate: you keep Pro until the period you paid for ends.',
    'pricing.cta.buy': 'Go unlimited',
    'pricing.cta.free': '↓ Download free',
    'nav.features': 'Features',
    'nav.languages': 'Languages',
    'nav.how': 'How it works',
    'nav.pricing': 'Pricing',
    'nav.download': 'Download',
    'nav.faq': 'FAQ',
    'nav.terms': 'Terms',
    'nav.privacy': 'Privacy',
    'nav.refunds': 'Refunds',
    'nav.contact': 'Contact',
    'nav.cta': 'Get the app',

    'hero.pill': '🫧 Desktop app for macOS, Windows &amp; Linux · 10 free translations a day',
    'hero.h1': 'Translate anything you can read <span class="grad">without leaving your desktop.</span>',
    'hero.lead': 'No interruption while reading anymore. Stop copy-pasting text into Google Translate. <b>Hold Shift, select text</b>, and read the translation right where you are.',
    'hero.dlfree': '↓ Download free',
    'hero.see': 'See how it works',
    'hero.note': 'Free · 10 translations a day · Pro from $2/month for unlimited',
    'video.caption': '▶ A real screen recording — select text, read the bubble.',
    'themes.head.h2': 'Make it yours with themes',
    'themes.head.p': 'Choose a look that matches your desktop. The bubble and the app follow the theme you pick.',
    'themes.caption': '▶ Switching themes in the app.',

    'trust.lead': '🔒 Private by design',
    'trust.1': 'No translation history',
    'trust.2': 'The licence server never sees your text',
    'trust.3': 'Only what you point at is sent',
    'trust.more': 'How it works →',
    'what.h2': 'It is not a translator. It is a way to stop interrupting yourself.',
    'what.p': 'bubbleTranslate is a productivity tool for people who work on a desktop or laptop all day. The translation is not the point — keeping your place is.',
    'what.1.h3': 'Works wherever you can select text',
    'what.1.p': 'Documents, PDFs, browsers, chat, code, even menus. It reads the selection at the operating system level, so no app has to support it and nothing else is needed.',
    'what.2.h3': 'Nothing else to open',
    'what.2.p': 'No extension, no second window, no site to paste into. You do not change pages and you do not leave what you were doing.',
    'what.4.h3': 'And when there is nothing to select',
    'what.4.p': 'A screenshot, a scanned page, a video still, a game — the words are a picture, so no app has one to hand over. Press <b>⌘⇧E</b> on macOS, <b>Ctrl+Shift+E</b> on Windows and Linux, drag a box over them, and the translation appears under it. Reading happens on your own machine.',
    'what.3.h3': 'Instant, right at your cursor',
    'what.3.p': 'Hold Shift and select. The bubble is already there, next to the pointer, and gone again when you move on.',

    'feat.head.h2': 'New experience in translation, no interruption while reading foreign docs and readings.',

    'feat.1.kicker': 'Instant',
    'feat.1.h3': 'Translation at your cursor',
    'feat.1.p': 'It appears wherever you can select text — no new windows, no context switching.',
    'feat.2.kicker': 'Effortless',
    'feat.2.h3': 'Automatic language detection',
    'feat.2.p': 'You never need to tell bubbleTranslate what language you\'re reading.',
    'feat.3.kicker': 'Reliable',
    'feat.3.h3': 'Automatic provider fallback',
    'feat.3.p': 'If one provider is unavailable, bubbleTranslate tries another.',
    'feat.4.kicker': 'Flexible',
    'feat.4.h3': 'Make it yours',
    'feat.4.p': 'Target language, shortcut, text size and auto-hide timing.',
    'feat.5.kicker': 'Direct line',
    'feat.5.h3': 'Reach the developer directly',
    'feat.5.p': 'Something broken, something missing, or something that annoyed you? Use <b>Send feedback</b> in the app. It goes from your own mail and is read by the person who wrote bubbleTranslate — no ticket queue, no bot.',

    'lang.badge': '✨ Automatic language detection',
    'lang.h2': 'You never pick the source language',
    'lang.p': 'bubbleTranslate figures out what you\'re reading on its own. Select text in any language and it detects it, then shows the translation in the language you chose. The bubble even tells you what it detected — like <b>Japanese&nbsp;→&nbsp;English</b>.',
    'lang.title': 'Translate into any of these <span class="lang-count">17 languages</span>',
    'lang.note': 'Those are one click away in the bubble. Need another? Any language code the providers accept works too — just set it in the config.',

    'how.head.h2': 'Two ways in: select it, or draw a box around it',
    'how.head.p': 'Choose your language once. After that, hold SHIFT key while highlighting the text. That is all for translation which is immediate.',
    'how.1.h3': 'Hold Shift and select',
    'how.1.p': 'Hold Shift and select text in any app. The bubble appears only for a selection made with the key down, so everyday selecting and copying stay untouched.',
    'how.2.h3': 'Read the bubble',
    'how.2.p': 'A small bubble pops up at your cursor with the translation, and quietly hides itself after a few seconds.',
    'how.3.h3': 'Keep working',
    'how.3.p': 'It stays in the menu bar or tray and translates the next thing you select with the key held. Change the target language from the bubble\'s ⚙ menu.',
    'how.ocr.h3': "Can't select it? Draw a box around it instead.",
    'how.ocr.p': 'A screenshot somebody sent you, a scanned page, a still from a video, a game, a remote desktop — text that is there on the screen but belongs to no text field, so there has never been anything to select. Press <b>⌘⇧E</b> on a Mac, <b>Ctrl+Shift+E</b> on Windows and Linux, drag a rectangle over it, and the translation appears under the box. Escape cancels.',
    'how.ocr.caption': '▶ Reading text out of a picture, in the app.',
    'how.ocr.play': 'Play the demo',
    'how.pic.h3': 'And when the words are a picture',
    'how.pic.p': 'Some text cannot be selected at all: a screenshot, a scanned page, a video, a game. There is nothing to highlight, so there is nothing to translate — until you draw a box around it instead.',
    'how.pic.1.h3': 'Press the shortcut',
    'how.pic.1.p': '⌘⇧E on a Mac, Ctrl+Shift+E on Windows and Linux. The screen dims, and the pointer becomes a crosshair.',
    'how.pic.2.h3': 'Draw a box',
    'how.pic.2.p': 'Drag it around the words you want. Escape cancels, and nothing is captured until you let go.',
    'how.pic.3.h3': 'Read the bubble',
    'how.pic.3.p': 'The words are read on your own computer, then translated. The bubble appears under the box, so it never covers what you were reading.',
    'how.note.h3': 'Prefer a different key?',
    'how.note.p': 'Shift is the default because holding it already extends a selection, so translating stays one gesture. You can switch to <b>Ctrl</b>, <b>Alt</b> or <b>Super</b> (⌘ on macOS) in the app\'s settings — or choose <b>Any selection</b> to translate everything, the way it worked before. On some Linux Wayland sessions the key can\'t be detected; there the app translates every selection and says so.',


    'priv.head.h2': 'Private by design',
    'priv.head.p': 'The text you select is the only thing that ever leaves your machine — and only when you select it.',
    'priv.1.h3': 'No translation history',
    'priv.1.p': 'bubbleTranslate doesn\u2019t store your translation history. The recent list lives in memory for the session and is gone when you quit.',
    'priv.2.h3': 'The licence server never sees your text',
    'priv.2.p': 'Your licence server never sees what you translate. It receives your licence key and a device id, and nothing else.',
    'priv.3.h3': 'Only what you point at is sent',
    'priv.3.p': 'Only the text you asked to translate is sent to the provider, with the language to translate into. A region you read is turned into text on your own machine first — the picture itself never leaves it.',
    'priv.arch.tag': 'By design, not by promise',
    'priv.arch.1.h3': 'No account. No sign-up.',
    'priv.arch.1.p': 'The free version was built this way on purpose. There is no profile to create, no email to hand over, nothing to log in to — and data that is never asked for cannot be leaked, sold or subpoenaed.',
    'priv.arch.2.h3': 'No database in the app.',
    'priv.arch.2.p': 'Your settings, your licence and your daily count are plain files on your own machine. Nothing about you is kept on a server of ours. Delete the files and nothing is left behind — they are yours, not ours.',
    'priv.arch.foot': 'The one time we learn anything is a Pro purchase. Paddle takes the payment, so your card details never reach us. The licence service keeps your email, the status and end date of your licence, and one device id per machine so that the three-machine limit can work. Not even your licence key is stored — only an irreversible hash of it. What you translate is never part of any of it.',

    'price.head.h2': 'Simple pricing',
    'price.head.p': 'Start free with 10 translations a day. Go unlimited when you need more.',
    'price.free.h3': 'Free',
    'price.free.per': 'forever',
    'price.free.tag': 'For light, everyday reading.',
    'price.free.1': '✓ <b>10 translations per day</b>',
    'price.free.2': '✓ Works wherever you can select text',
    'price.free.3': '✓ Automatic provider fallback',
    'price.free.4': '✓ Bubble at your cursor, menu bar / tray',
    'price.free.5': '✓ No account, no sign-up',
    'price.free.cta': '↓ Download free',
    'price.pro.ribbon': 'Most popular',
    'price.pro.h3': 'Pro',
    'price.pro.per': '/ month',
    'price.pro.tag': 'or <b>$20 / year</b> — two months free.',
    'price.pro.1': '✓ <b>Unlimited translations</b>',
    'price.pro.2': '✓ Everything in Free',
    'price.pro.3': '✓ Use on up to <b>3 machines</b>',
    'price.pro.4': '✓ One licence key, no re-buying',
    'price.pro.5': '✓ Supports the app\'s development',
    'price.pro.cta': 'Upgrade to Pro',

    'dl.head.h2': 'Download bubbleTranslate',
    'dl.head.p': 'Free to install, with 10 translations a day. Upgrade to Pro anytime for unlimited.',
    'dl.mac.desc': 'Universal · Apple Silicon &amp; Intel · macOS 11 or later · 15&nbsp;MB',
    'dl.mac.btn': 'Download DMG',
    'dl.mac.run': 'Open the DMG and drag the app into Applications.',
    'dl.mac.block': 'macOS <b>will</b> refuse the first launch and say it "could not verify" the app — every Mac, every time, because Apple has not notarized it. Open <b>System Settings › Privacy &amp; Security</b>, scroll to Security and click <b>Open Anyway</b>. Once only.',
    'dl.mac.cmdlead': 'Or, if you prefer the Terminal, one line instead of those clicks:',
    'dl.mac.more': 'Full steps, including the Accessibility permission →',
    'mac.install.h3': 'Installing on macOS — the first run',
    'mac.install.1': 'Open the DMG and drag <b>bubbleTranslate.app</b> into <b>Applications</b>. Install it there — not run from the DMG or Downloads.',
    'mac.install.2': 'Launch it once. macOS says it <b>"could not verify"</b> the app — that\'s Gatekeeper reacting to an app Apple hasn\'t notarized, not anything the app does. Dismiss it, open <b>System Settings › Privacy &amp; Security</b>, scroll to Security, and click <b>Open Anyway</b>.',
    'mac.install.3': 'Grant <b>Accessibility</b>: <b>System Settings › Privacy &amp; Security › Accessibility</b>, and switch <b>bubbleTranslate</b> on. This is how it reads what you select — a <i>different</i> permission from Open Anyway.',
    'mac.install.4': '<b>Quit and relaunch.</b> The Accessibility permission only takes effect on a fresh start, so quit bubbleTranslate (the globe in the menu bar → Quit) and open it again. Until you do, the window says <b>"Not watching for selections."</b>',
    'mac.install.5': 'Done. Hold <b>Shift</b> and select text anywhere, and the bubble appears at your cursor.',
    'mac.install.tip': 'Still "Not watching" after relaunching? Remove bubbleTranslate from the Accessibility list (select it, click −), run <code>xattr -dr com.apple.quarantine /Applications/bubbleTranslate.app</code>, then add it back, switch it on, and relaunch. A leftover entry from an older build can silently block the new one.',
    'dl.linux.desc': 'x86-64 executable · any distribution with glibc 2.28+ — Ubuntu 20.04, Debian 10, Fedora, Arch and newer · 16&nbsp;MB',
    'dl.linux.btn': 'Download binary',
    'dl.linux.run': 'Make it executable and run it:',
    'dl.linux.ocr': '<b>Ctrl+Shift+E</b> reads text off the screen out of the box: a built-in reader is downloaded the first time you use it (12&nbsp;MB). It only knows letters without accents, though — ç, ğ, ş, é, ü come out as plain c, g, s, e, u, and Cyrillic, Arabic or Chinese is not read at all, so a word missing its letters can translate as a different one. <b>For it to read properly, install Tesseract</b>, with a pack for each language you read <i>from</i> (eng, tur, deu, spa…); once it is there, it does the reading instead:',
    'dl.linux.note2': 'Installed once, it stays through every update, and translating selected text needs none of it. Works on X11, Hyprland, sway, GNOME and KDE — on GNOME and KDE your desktop may ask once whether bubbleTranslate may take screenshots.',
    'dl.win.desc': 'x86-64 · Windows 10 &amp; 11 · runs on ARM too · 7&nbsp;MB',
    'dl.win.btn': 'Download ZIP',
    'dl.win.run': 'Unzip it, put bubbleTranslate.exe wherever you keep programs and double-click it. Nothing to install.',
    'dl.win.note2': 'It isn\'t code-signed, so SmartScreen stops the first launch: <b>More info</b> › <b>Run anyway</b>, once per machine.',
    'win.install.h3': 'Installing on Windows — the first run',
    'win.install.1': 'Unzip the download, then put <b>bubbleTranslate.exe</b> wherever you keep programs and double-click it. There is no installer — the zip holds one file, and it writes its settings to <code>%APPDATA%\\bubbleTranslate</code> the first time it runs.',
    'win.install.2': 'Windows says <b>"Windows protected your PC"</b>. That is SmartScreen reacting to a file it has not seen signed, not to anything the app does. Click <b>More info</b>, then <b>Run anyway</b> — once per machine, not once per launch.',
    'win.install.3': 'No permission to grant: Windows lets it read what you select straight away, so it starts watching the moment it opens.',
    'win.install.4': 'Find the globe. Windows 11 hides every new tray icon behind the <b>^</b> arrow next to the clock — drag it out onto the taskbar to keep it there. That icon reopens the window, and it is how you quit.',
    'win.install.5': 'Done. Hold <b>Shift</b> and select text anywhere, and the bubble appears at your cursor.',
    'win.install.tip': 'Nothing appears in one particular app? If that window is running as administrator, Windows hides it from every program that isn\'t — including this one — and there is no permission that changes it. Everywhere else, check that you are holding the key: Shift by default, and the window\'s Behaviour section is where you change it.',
    'dl.foot': 'Source, build instructions, and full docs live on <a href="https://github.com/pelamx/bubbleTranslate" style="color:var(--brand);" target="_blank" rel="noopener">GitHub</a>.',

    'faq.head.h2': 'Frequently asked questions',
    'faq.head.p': 'Everything worth knowing before you install.',
    'faq.q1': 'Is bubbleTranslate free?',
    'faq.a1': 'Yes. You get 10 translations a day for free, on macOS, Windows and Linux, with no account or sign-up. If you need more, Pro removes the daily limit for $2/month or $20/year.',
    'faq.q2': 'What do I get with Pro?',
    'faq.a2': 'Unlimited translations on up to three machines, for $2/month or $20/year (the yearly plan is two months free). One licence key covers all your machines, and it supports the app\'s ongoing development.',
    'faq.q3': 'How do I pay for Pro?',
    'faq.a3': 'Monthly or yearly. Billing goes through Paddle, the merchant of record, so you are charged in your own currency. Taxes, if applicable, are calculated and shown by Paddle at checkout. You can cancel anytime.',
    'faq.q4': 'Which systems does it run on?',
    'faq.a4': 'macOS, Windows and Linux. The Windows build is one .exe that needs nothing installed and runs on Windows 10 and 11, including ARM machines. On Linux the download runs on any distribution with glibc 2.28 or newer — Ubuntu 20.04, Debian 10, Fedora, Arch and everything since; reading text off the screen works out of the box, and reads properly — accents and every alphabet — with Tesseract installed.',
    'faq.q5': 'Does it need an internet connection?',
    'faq.a5': 'Yes. Translations come from online providers, tried in turn until one answers. Only the text you asked to translate is sent, and only to translate it. A region you read becomes text on your own machine first; the picture never leaves it.',
    'faq.q6': 'What permission does it need?',
    'faq.a6': 'On macOS, Accessibility — that\'s how the app sees what you\'ve selected, and it is asked for the first time you run it. Reading a region of the screen needs a second one, Screen Recording, and that is only asked for the first time you press the shortcut; if you never use it you are never asked. On Windows and on most X11 and Wayland sessions, selecting needs nothing extra; reading the screen uses what the system already provides.',
    'faq.q7': 'Does it translate everything I select?',
    'faq.a7': 'No — only selections you make with a key held down. Shift by default, so extending a selection and translating it are one gesture. You can switch the key to Ctrl, Alt or Super, or set it to translate every selection like before. Copying and ordinary highlighting are left alone.',
    'faq.q8': 'How do I report a bug or suggest something?',
    'faq.a8': 'From inside the app. Open the bubbleTranslate window and use <b>Send feedback</b>: something broken, something missing, or something that annoyed you. It goes out from your own mail — your mail app, Gmail or Outlook — and it is read by the person who wrote the app.',

    'cta.h2': 'Read the world without leaving your work',
    'cta.p': 'Download bubbleTranslate free and translate anything you can select.',
    'cta.btn': '↓ Get bubbleTranslate free',

    'js.downloadFor': '↓ Download for {os}',
    'js.osSoon': '{os} — coming soon',
    'js.yourSystem': 'Your system'
  },

  tr: {
    'meta.title': 'bubbleTranslate — Masaüstünüzden ayrılmadan seçtiğiniz metni çevirin',
    'meta.desc': 'bubbleTranslate, macOS, Windows ve Linux için hafif bir masaüstü uygulamasıdır. Herhangi bir uygulamada metin seçin; imlecinizin yanında çevirisiyle bir baloncuk belirir. Günde 10 ücretsiz çeviri; sınırsız için Pro aylık $2\'den başlar.',

    // -- /pricing -----------------------------------------------------------
    'pricing.meta.title': 'Fiyatlandırma — bubbleTranslate',
    'pricing.meta.desc': 'bubbleTranslate günde 10 çeviriye kadar ücretsiz. Pro, günlük sınırı kaldırır: ayda 2 dolar veya yılda 20 dolar, üç makineye kadar.',
    'pricing.h1': 'Kullanması ücretsiz. Günde on yetmediğinde Pro var.',
    'pricing.sub': 'Bütün özellikler ücretsiz sürümde. Pro tek bir şeyi değiştirir: günlük sınırı kaldırır.',
    'pricing.counts.h3': 'Ne çeviri sayılır',
    'pricing.counts.p': 'Yalnızca sizin istediğiniz ve gerçekten dönen bir çeviri. Bugün zaten çevirdiğiniz bir metni yeniden seçmek ücretsizdir, başarısız istek hiçbir şeye mal olmaz, gördüğünüz bir sonucun hedef dilini değiştirmek de iki kez saymaz. Sayaç UTC\'de değil, sizin gece yarınızda sıfırlanır.',
    'pricing.region.h3': 'Ödeme nasıl yapılır',
    'pricing.region.p': 'Ödeme, kayıtlı satıcı olarak hareket eden Paddle üzerinden alınır. İşlemi kendi para biriminizde fiyatlandırır. Varsa vergiler, ödeme sırasında Paddle tarafından hesaplanır ve gösterilir; ödeme ekranında gördüğünüz tutar ödediğiniz tutardır. Pro, istediğiniz zaman iptal edebileceğiniz bir aboneliktir.',
    'pricing.faq.h2': 'Satın almadan önce',
    'pricing.faq.q1': 'Hakkım bittiğinde ne olur?',
    'pricing.faq.a1': 'Baloncuk hakkın bittiğini söyler ve Pro\'yu önerir. Başka hiçbir şey değişmez, sayaç gece yarısı geri gelir.',
    'pricing.faq.q2': 'Hesap açmam gerekir mi?',
    'pricing.faq.a2': 'Hayır. Kayıt da parola da yok. Satın alma size bir lisans anahtarı verir, uygulamanın istediği tek şey odur.',
    'pricing.faq.q3': 'Kaç makinede kullanabilirim?',
    'pricing.faq.a3': 'Tek anahtarla aynı anda üç makinede. Kullanmadığınız bir makinede yer açmak uygulama içinde tek tık.',
    'pricing.faq.q4': 'İade alabilir miyim?',
    'pricing.faq.a4': 'Evet, 14 gün içinde, gerekçe göstermeden. İptal ayrı bir şeydir: ödediğiniz dönem bitene kadar Pro sizde kalır.',
    'pricing.cta.buy': 'Sınırsıza geç',
    'pricing.cta.free': '↓ Ücretsiz indir',
    'nav.features': 'Özellikler',
    'nav.languages': 'Diller',
    'nav.how': 'Nasıl çalışır',
    'nav.pricing': 'Fiyatlar',
    'nav.download': 'İndir',
    'nav.faq': 'SSS',
    'nav.terms': 'Şartlar',
    'nav.privacy': 'Gizlilik',
    'nav.refunds': 'İadeler',
    'nav.contact': 'İletişim',
    'nav.cta': 'Uygulamayı al',

    'hero.pill': '🫧 macOS, Windows ve Linux için masaüstü uygulaması · günde 10 ücretsiz çeviri',
    'hero.h1': '<span class="grad">Masaüstünüzden ayrılmadan</span> okuduğunuz her şeyi çevirin.',
    'hero.lead': 'Okurken artık copy/paste dikkatinizi dağıtmayacak. Metinleri Google Translate\'e kopyalayıp yapıştırmayı bırakın. <b>Shift\'i basılı tutun, metni seçin</b> ve çeviriyi tam olduğunuz yerde okuyun.',
    'hero.dlfree': '↓ Ücretsiz indir',
    'hero.see': 'Nasıl çalıştığını gör',
    'hero.note': 'Ücretsiz · günde 10 çeviri · sınırsız için Pro aylık $2\'den',
    'video.caption': '▶ Gerçek bir ekran kaydı — metni seçin, baloncuğu okuyun.',
    'themes.head.h2': 'Temalarla kendinize göre ayarlayın',
    'themes.head.p': 'Masaüstünüze uyan bir görünüm seçin. Baloncuk ve uygulama, seçtiğiniz temayı izler.',
    'themes.caption': '▶ Uygulamada tema değiştirme.',

    'trust.lead': '🔒 Tasarımı gereği gizli',
    'trust.1': 'Çeviri geçmişi tutulmaz',
    'trust.2': 'Lisans sunucusu metninizi hiç görmez',
    'trust.3': 'Yalnızca seçtiğiniz metin gönderilir',
    'trust.more': 'Nasıl çalışıyor →',
    'what.h2': 'Bu bir çeviri aracı değil. Kendinizi bölmemenin bir yolu.',
    'what.p': 'bubbleTranslate, gün boyu masaüstü ya da dizüstünde çalışanlar için bir üretkenlik aracı. Mesele çeviri değil, kaldığınız yeri kaybetmemek.',
    'what.1.h3': 'Metin seçebildiğiniz her yerde çalışır',
    'what.1.p': 'Belgeler, PDF’ler, tarayıcılar, sohbet, kod, hatta menüler. Seçimi işletim sistemi düzeyinde okur; hiçbir uygulamanın bunu desteklemesi gerekmez, başka bir araca da ihtiyaç yoktur.',
    'what.2.h3': 'Açılacak başka bir şey yok',
    'what.2.p': 'Eklenti yok, ikinci pencere yok, metni yapıştıracağınız bir site yok. Sayfa değiştirmezsiniz, yaptığınız işi bırakmazsınız.',
    'what.3.h3': 'Anında, tam imlecinizin yanında',
    'what.4.h3': 'Seçilecek bir şey olmadığında',
    'what.4.p': 'Ekran görüntüsü, taranmış sayfa, video karesi, oyun — yazı bir resim olduğu için hiçbir uygulamanın vereceği bir şey yok. macOS’ta <b>⌘⇧E</b>, Windows ve Linux’ta <b>Ctrl+Shift+E</b> tuşlarına bas, üstüne bir kutu çiz; çeviri kutunun altında çıkar. Okuma kendi makinende yapılır.',
    'what.3.p': 'Shift’i basılı tutup seçin. Baloncuk imlecin yanında çoktan oradadır; siz devam edince kaybolur.',

    'feat.head.h2': 'Çeviride yeni bir deneyim — yabancı belgeleri okurken kesinti yok.',

    'feat.1.kicker': 'Anında',
    'feat.1.h3': 'Çeviri imlecinizin yanında',
    'feat.1.p': 'Metin seçebildiğiniz her yerde belirir — yeni pencere yok, bağlam değiştirmek yok.',
    'feat.2.kicker': 'Zahmetsiz',
    'feat.2.h3': 'Otomatik dil algılama',
    'feat.2.p': 'Ne okuduğunuzu bubbleTranslate\'e söylemeniz hiç gerekmez.',
    'feat.3.kicker': 'Güvenilir',
    'feat.3.h3': 'Otomatik sağlayıcı yedeği',
    'feat.3.p': 'Bir sağlayıcı yanıt vermezse bubbleTranslate bir diğerini dener.',
    'feat.4.kicker': 'Esnek',
    'feat.4.h3': 'Kendinize göre ayarlayın',
    'feat.4.p': 'Hedef dil, kısayol tuşu, yazı boyutu ve kaybolma süresi.',
    'feat.5.kicker': 'Doğrudan iletişim',
    'feat.5.h3': 'Geliştiriciye doğrudan ulaşın',
    'feat.5.p': 'Bozuk, eksik ya da sizi rahatsız eden bir şey mi var? Uygulamadaki <b>Geri bildirim gönder</b> bölümünü kullanın. Mesaj kendi e-postanızdan gider ve bubbleTranslate\'i yazan kişi okur — bilet sırası yok, bot yok.',

    'lang.badge': '✨ Otomatik dil algılama',
    'lang.h2': 'Kaynak dili asla siz seçmezsiniz',
    'lang.p': 'bubbleTranslate ne okuduğunuzu kendisi anlar. Herhangi bir dilde metin seçin; algılar ve çeviriyi seçtiğiniz dilde gösterir. Baloncuk, neyi algıladığını bile söyler — örneğin <b>Japonca&nbsp;→&nbsp;İngilizce</b>.',
    'lang.title': 'Şu <span class="lang-count">17 dilden</span> herhangi birine çevirin',
    'lang.note': 'Bunlar baloncukta tek tıkla seçilebilir. Başka mı lazım? Sağlayıcıların kabul ettiği herhangi bir dil kodu da çalışır — sadece ayar dosyasına yazın.',

    'how.head.h2': 'İki yol: ya seçin, ya etrafına bir kutu çizin',
    'how.head.p': 'Dilinizi bir kez seçin. Sonrasında metni seçerken SHIFT tuşunu basılı tutun. Çeviri için tek yapmanız gereken bu; çeviri anında gelir.',
    'how.1.h3': 'Shift\'e basılı tutup seçin',
    'how.1.p': 'Shift\'e basılı tutup herhangi bir uygulamada metni seçin. Baloncuk yalnızca tuş basılıyken yapılan seçim için belirir; gündelik seçme ve kopyalama olduğu gibi kalır.',
    'how.2.h3': 'Baloncuğu okuyun',
    'how.2.p': 'İmlecinizde çeviriyle küçük bir baloncuk belirir ve birkaç saniye sonra sessizce gizlenir.',
    'how.3.h3': 'Çalışmaya devam edin',
    'how.3.p': 'Menü çubuğunda veya tepside kalır ve tuş basılıyken seçtiğiniz bir sonraki şeyi çevirir. Hedef dili baloncuğun ⚙ menüsünden değiştirin.',
    'how.ocr.h3': 'Seçemiyor musun? Etrafına bir kutu çiz.',
    'how.ocr.p': 'Birinin gönderdiği ekran görüntüsü, taranmış bir sayfa, videodan bir kare, bir oyun, uzak masaüstü — ekranda duran ama hiçbir metin alanına ait olmayan yazı, yani seçilecek bir şeyin hiç olmadığı durum. Mac’te <b>⌘⇧E</b>, Windows ve Linux’ta <b>Ctrl+Shift+E</b> tuşlarına bas, üzerine bir dikdörtgen çiz; çeviri kutunun altında çıkar. Escape iptal eder.',
    'how.ocr.caption': '▶ Bir resimden yazı okunuyor, uygulamanın içinde.',
    'how.ocr.play': 'Demoyu oynat',
    'how.pic.h3': 'Ya yazı bir resimse',
    'how.pic.p': 'Bazı yazılar hiç seçilemez: ekran görüntüsü, taranmış sayfa, video, oyun. Seçilecek bir şey olmayınca çevrilecek bir şey de olmaz — ta ki etrafına bir kutu çizene kadar.',
    'how.pic.1.h3': 'Kısayola bas',
    'how.pic.1.p': 'Mac’te ⌘⇧E, Windows ve Linux’ta Ctrl+Shift+E. Ekran kararır ve imleç artı işaretine dönüşür.',
    'how.pic.2.h3': 'Bir kutu çiz',
    'how.pic.2.p': 'İstediğin kelimelerin etrafını sürükle. Escape iptal eder, ve sen bırakana kadar hiçbir şey yakalanmaz.',
    'how.pic.3.h3': 'Balonu oku',
    'how.pic.3.p': 'Kelimeler kendi bilgisayarında okunur, sonra çevrilir. Balon kutunun altında çıkar, yani okuduğun şeyin üstünü kapatmaz.',
    'how.note.h3': 'Başka bir tuş mu?',
    'how.note.p': 'Shift varsayılandır çünkü onu basılı tutmak zaten seçimi genişletir — böylece çeviri tek bir hareket olarak kalır. Uygulamanın ayarlarından <b>Ctrl</b>, <b>Alt</b> veya <b>Super</b>\'e (macOS\'ta ⌘) geçebilir ya da <b>Her seçim</b>\'i seçerek eskisi gibi her şeyi çevirtebilirsiniz. Bazı Linux Wayland oturumlarında tuş algılanamaz; orada uygulama her seçimi çevirir ve bunu belirtir.',


    'priv.head.h2': 'Tasarımı gereği gizli',
    'priv.head.p': 'Makinenizden çıkan tek şey seçtiğiniz metindir — o da yalnızca siz seçtiğinizde.',
    'priv.1.h3': 'Çeviri geçmişi tutulmaz',
    'priv.1.p': 'bubbleTranslate çeviri geçmişinizi saklamaz. Son çeviriler listesi yalnızca o oturum boyunca bellekte durur ve uygulamadan çıktığınızda kaybolur.',
    'priv.2.h3': 'Lisans sunucusu metninizi görmez',
    'priv.2.p': 'Lisans sunucusu ne çevirdiğinizi asla görmez. Yalnızca lisans anahtarınızı ve bir cihaz kimliğini alır, başka hiçbir şey almaz.',
    'priv.3.h3': 'Yalnızca gösterdiğiniz metin gönderilir',
    'priv.3.p': 'Sağlayıcıya yalnızca çevrilmesini istediğiniz metin ve çevrilecek dil gönderilir. Okuttuğunuz bir alan önce kendi makinenizde metne dönüşür — görüntünün kendisi makineden çıkmaz.',
    'priv.arch.tag': 'Söz değil, tasarım',
    'priv.arch.1.h3': 'Hesap yok. Kayıt yok.',
    'priv.arch.1.p': 'Ücretsiz sürüm bilerek böyle tasarlandı. Oluşturulacak bir profil, verilecek bir e-posta, giriş yapılacak bir yer yok — hiç istenmemiş bir veri sızdırılamaz, satılamaz, mahkeme kararıyla da istenemez.',
    'priv.arch.2.h3': 'Programda veritabanı yok.',
    'priv.arch.2.p': 'Ayarlarınız, lisansınız ve günlük sayacınız kendi makinenizde birer dosyadan ibaret. Hakkınızda hiçbir şey bizim sunucumuzda durmuyor. Dosyaları silin, geriye hiçbir iz kalmaz — onlar bizim değil, sizin.',
    'priv.arch.foot': 'Bir şey öğrendiğimiz tek an Pro satın alımı. Ödemeyi Paddle alır; kart bilgileriniz bize hiç ulaşmaz. Lisans servisi e-postanızı, lisansınızın durumunu ve bitiş tarihini, bir de üç makine sınırı işleyebilsin diye makine başına bir cihaz kimliği tutar. Lisans anahtarınız bile saklanmaz — yalnızca geri döndürülemez bir özeti tutulur. Çevirdiğiniz metin bunların hiçbirine dahil değildir.',

    'price.head.h2': 'Basit fiyatlandırma',
    'price.head.p': 'Günde 10 çeviriyle ücretsiz başlayın. Daha fazlası gerektiğinde sınırsıza geçin.',
    'price.free.h3': 'Ücretsiz',
    'price.free.per': 'sonsuza dek',
    'price.free.tag': 'Günlük, hafif okumalar için.',
    'price.free.1': '✓ <b>Günde 10 çeviri</b>',
    'price.free.2': '✓ Metin seçebildiğiniz her yerde çalışır',
    'price.free.3': '✓ Otomatik sağlayıcı geçişi',
    'price.free.4': '✓ İmlecinizde baloncuk, menü çubuğu / tepsi',
    'price.free.5': '✓ Hesap yok, kayıt yok',
    'price.free.cta': '↓ Ücretsiz indir',
    'price.pro.ribbon': 'En popüler',
    'price.pro.h3': 'Pro',
    'price.pro.per': '/ ay',
    'price.pro.tag': 'veya <b>$20 / yıl</b> — iki ay bedava.',
    'price.pro.1': '✓ <b>Sınırsız çeviri</b>',
    'price.pro.2': '✓ Ücretsizdeki her şey',
    'price.pro.3': '✓ En fazla <b>3 makinede</b> kullanın',
    'price.pro.4': '✓ Tek lisans anahtarı, tekrar satın alma yok',
    'price.pro.5': '✓ Uygulamanın gelişimini destekler',
    'price.pro.cta': 'Pro\'ya geç',

    'dl.head.h2': 'bubbleTranslate\'i indirin',
    'dl.head.p': 'Kurulumu ücretsiz, günde 10 çeviriyle. Sınırsız için istediğiniz zaman Pro\'ya geçin.',
    'dl.mac.desc': 'Universal · Apple Silicon ve Intel · macOS 11 veya üzeri · 15&nbsp;MB',
    'dl.mac.btn': 'DMG indir',
    'dl.mac.run': 'DMG\'yi açın ve uygulamayı Applications klasörüne sürükleyin.',
    'dl.mac.block': 'macOS ilk açılışı <b>kesinlikle</b> reddeder ve uygulamayı "doğrulayamadı" der — her Mac’te, her seferinde, çünkü Apple onu notarize etmedi. <b>System Settings › Privacy &amp; Security</b>’yi aç, Security’ye kadar in ve <b>Open Anyway</b>’e tıkla. Yalnızca bir kez.',
    'dl.mac.cmdlead': 'Terminal’i tercih ediyorsan, o tıklamalar yerine tek satır:',
    'dl.mac.more': 'Erişilebilirlik izni dahil bütün adımlar →',
    'mac.install.h3': 'macOS\'ta kurulum — ilk çalıştırma',
    'mac.install.1': 'DMG\'yi açın ve <b>bubbleTranslate.app</b>\'i <b>Applications</b> klasörüne sürükleyin. Uygulamayı oradan çalıştırın — DMG\'den veya İndirilenler\'den değil.',
    'mac.install.2': 'Bir kez açın. macOS uygulamayı <b>"doğrulayamadı"</b> der — bu, Apple tarafından notarize edilmemiş bir uygulamaya Gatekeeper\'ın tepkisidir, uygulamanın yaptığı bir şey değil. Kapatın, <b>Sistem Ayarları › Gizlilik ve Güvenlik</b>\'i açın, Güvenlik bölümüne inin ve <b>Yine de Aç</b>\'a tıklayın.',
    'mac.install.3': '<b>Erişilebilirlik</b> izni verin: <b>Sistem Ayarları › Gizlilik ve Güvenlik › Erişilebilirlik</b> ve <b>bubbleTranslate</b>\'i açın. Uygulama seçtiğinizi böyle okur — Yine de Aç\'tan <i>farklı</i> bir izindir.',
    'mac.install.4': '<b>Çıkın ve yeniden açın.</b> Erişilebilirlik izni yalnızca temiz bir başlangıçta etkinleşir; bu yüzden bubbleTranslate\'ten çıkın (menü çubuğundaki küre → Quit) ve tekrar açın. Bunu yapana kadar pencere <b>"Not watching for selections"</b> (seçimler izlenmiyor) yazar.',
    'mac.install.5': 'Bitti. Herhangi bir yerde <b>Shift</b>\'e basılı tutup metni seçin; baloncuk imlecinizin yanında belirir.',
    'mac.install.tip': 'Yeniden açtıktan sonra hâlâ "Not watching" mı diyor? bubbleTranslate\'i Erişilebilirlik listesinden kaldırın (seçip − tıklayın), <code>xattr -dr com.apple.quarantine /Applications/bubbleTranslate.app</code> komutunu çalıştırın, sonra tekrar ekleyip açın ve yeniden başlatın. Eski bir sürümden kalan kayıt yenisini sessizce engelleyebilir.',
    'dl.linux.desc': 'x86-64 çalıştırılabilir dosya · glibc 2.28+ olan her dağıtım — Ubuntu 20.04, Debian 10, Fedora, Arch ve sonrası · 16&nbsp;MB',
    'dl.linux.btn': 'İkili dosyayı indir',
    'dl.linux.run': 'Çalıştırılabilir yapın ve çalıştırın:',
    'dl.linux.ocr': '<b>Ctrl+Shift+E</b> ekrandaki yazıyı kurulum gerektirmeden okur: dahili okuyucu ilk kullanımda indirilir (12&nbsp;MB). Ancak yalnızca aksansız harfleri tanır — ç, ğ, ş, é, ü düz c, g, s, e, u olarak okunur; Kiril, Arapça ya da Çince hiç okunmaz, ve harfi eksik bir kelime başka bir kelime gibi çevrilebilir. <b>Düzgün okuması için Tesseract\'ı kurun</b>; okuduğunuz her dil için bir dil paketiyle (tur, eng, deu, spa…). Kurulduğunda okumayı o yapar:',
    'dl.linux.note2': 'Bir kez kurulur, her güncellemede yerinde kalır; seçili metni çevirmek için hiçbiri gerekmez. X11, Hyprland, sway, GNOME ve KDE\'de çalışır — GNOME ve KDE\'de masaüstünüz bir kez bubbleTranslate\'in ekran görüntüsü almasına izin verip vermeyeceğinizi sorabilir.',
    'dl.win.desc': 'x86-64 · Windows 10 ve 11 · ARM\'da da çalışır · 7&nbsp;MB',
    'dl.win.btn': 'ZIP indir',
    'dl.win.run': 'Zip\'i açın, bubbleTranslate.exe\'yi programlarınızı tuttuğunuz yere koyup çift tıklayın. Kurulum yok.',
    'dl.win.note2': 'Dosya imzalı değil; SmartScreen ilk açılışı durdurur: <b>Ek bilgi</b> › <b>Yine de çalıştır</b>, makine başına bir kez.',
    'win.install.h3': 'Windows\'ta kurulum — ilk çalıştırma',
    'win.install.1': 'İndirdiğiniz zip\'i açın, <b>bubbleTranslate.exe</b>\'yi programlarınızı tuttuğunuz yere koyup çift tıklayın. Kurulum sihirbazı yok — zip\'in içinde tek bir dosya var; ayarlarını ilk çalıştırmada <code>%APPDATA%\\bubbleTranslate</code> içine yazar.',
    'win.install.2': 'Windows <b>"Bilgisayarınız korundu"</b> der. Bu, SmartScreen\'in imzalı görmediği bir dosyaya tepkisidir — uygulamanın yaptığı bir şey değil. <b>Ek bilgi</b>\'ye, sonra <b>Yine de çalıştır</b>\'a tıklayın; her açılışta değil, makine başına bir kez.',
    'win.install.3': 'Verilecek izin yok: Windows seçtiğinizi okumasına doğrudan izin verir, uygulama açıldığı anda izlemeye başlar.',
    'win.install.4': 'Küreyi bulun. Windows 11 her yeni bildirim simgesini saatin yanındaki <b>^</b> okunun arkasına gizler — görev çubuğuna sürükleyip orada tutun. Pencereyi o simge geri açar, çıkış da oradan yapılır.',
    'win.install.5': 'Bitti. Herhangi bir yerde <b>Shift</b>\'e basılı tutup metni seçin; baloncuk imlecinizin yanında belirir.',
    'win.install.tip': 'Belirli bir uygulamada hiçbir şey çıkmıyor mu? O pencere yönetici olarak çalışıyorsa Windows onu, yönetici olmayan her programdan — bu uygulama dahil — gizler ve bunu değiştiren bir izin yoktur. Diğer yerlerde tuşa basılı tuttuğunuzdan emin olun: varsayılan Shift\'tir, pencerenin Behaviour bölümünden değiştirilir.',
    'dl.foot': 'Kaynak kod, derleme talimatları ve tüm belgeler <a href="https://github.com/pelamx/bubbleTranslate" style="color:var(--brand);" target="_blank" rel="noopener">GitHub</a>\'da.',

    'faq.head.h2': 'Sıkça sorulan sorular',
    'faq.head.p': 'Kurmadan önce bilmeye değer her şey.',
    'faq.q1': 'bubbleTranslate ücretsiz mi?',
    'faq.a1': 'Evet. macOS, Windows ve Linux\'ta, hesap veya kayıt olmadan günde 10 ücretsiz çeviri alırsınız. Daha fazlası gerekirse Pro, günlük sınırı $2/ay veya $20/yıl karşılığında kaldırır.',
    'faq.q2': 'Pro ile ne elde ederim?',
    'faq.a2': 'En fazla üç makinede sınırsız çeviri, $2/ay veya $20/yıl karşılığında (yıllık planda iki ay bedava). Tek lisans anahtarı tüm makinelerinizi kapsar ve uygulamanın sürekli gelişimini destekler.',
    'faq.q3': 'Pro için nasıl ödeme yaparım?',
    'faq.a3': 'Aylık veya yıllık. Ödeme, kayıtlı satıcı Paddle üzerinden alınır; kendi para biriminizde ücretlendirilirsiniz. Varsa vergiler, ödeme sırasında Paddle tarafından hesaplanır ve gösterilir. İstediğiniz zaman iptal edebilirsiniz.',
    'faq.q4': 'Hangi sistemlerde çalışır?',
    'faq.a4': 'macOS, Windows ve Linux. Windows sürümü hiçbir şey kurmayı gerektirmeyen tek bir .exe dosyasıdır ve ARM makineler dahil Windows 10 ile 11\'de çalışır. Linux\'ta indirilen dosya glibc 2.28 veya üstü olan her dağıtımda çalışır — Ubuntu 20.04, Debian 10, Fedora, Arch ve sonrası; ekrandaki yazıyı okumak kurulum gerektirmez; aksanlı harfleri ve tüm alfabeleri düzgün okuması için Tesseract kurulur.',
    'faq.q5': 'İnternet bağlantısı gerekir mi?',
    'faq.a5': 'Evet. Çeviriler çevrimiçi sağlayıcılardan gelir; biri yanıt verene kadar sırayla denenir. Yalnızca çevrilmesini istediğiniz metin, yalnızca çevirmek için gönderilir. Okuttuğunuz bir alan önce kendi makinenizde metne dönüşür; görüntünün kendisi makineden çıkmaz.',
    'faq.q6': 'Hangi izne ihtiyacı var?',
    'faq.a6': 'macOS\'ta Erişilebilirlik — uygulama seçtiğinizi böyle görür ve bu izin ilk çalıştırdığınızda istenir. Ekrandan bir alan okumak için ikinci bir izin gerekir, Ekran Kaydı, ve o yalnızca kısayola ilk bastığınızda istenir; hiç kullanmazsanız hiç sorulmaz. Windows\'ta ve çoğu X11 ile Wayland oturumunda seçim için ek bir şey gerekmez; ekranı okumak sistemin zaten sunduğunu kullanır.',
    'faq.q7': 'Seçtiğim her şeyi çevirir mi?',
    'faq.a7': 'Hayır — yalnızca bir tuş basılıyken yaptığınız seçimleri. Varsayılan Shift\'tir; böylece seçimi genişletmek ve çevirmek tek harekettir. Tuşu Ctrl, Alt veya Super yapabilir ya da eskisi gibi her seçimi çevirtebilirsiniz. Kopyalama ve sıradan işaretlemeye dokunulmaz.',
    'faq.q8': 'Hata bildirmek ya da öneri yapmak istiyorum, nasıl?',
    'faq.a8': 'Doğrudan uygulamanın içinden. bubbleTranslate penceresini açıp <b>Geri bildirim gönder</b> bölümünü kullanın: bozuk, eksik ya da sizi rahatsız eden bir şey. Mesaj kendi e-postanızdan gider — posta uygulamanız, Gmail ya da Outlook — ve uygulamayı yazan kişi okur.',

    'cta.h2': 'İşinizi bırakmadan dünyayı okuyun',
    'cta.p': 'bubbleTranslate\'i ücretsiz indirin ve seçebildiğiniz her şeyi çevirin.',
    'cta.btn': '↓ bubbleTranslate\'i ücretsiz al',

    'js.downloadFor': '↓ {os} için indir',
    'js.osSoon': '{os} — yakında',
    'js.yourSystem': 'Sizin sisteminiz'
  },

  es: {
    'meta.title': 'bubbleTranslate — Traduce cualquier texto seleccionable sin salir de tu escritorio',
    'meta.desc': 'bubbleTranslate es una ligera app de escritorio para macOS, Windows y Linux. Selecciona texto en cualquier app y aparece una burbuja junto al cursor con la traducción. 10 traducciones gratis al día; pásate a ilimitado con Pro desde $2/mes.',

    // -- /pricing -----------------------------------------------------------
    'pricing.meta.title': 'Precios — bubbleTranslate',
    'pricing.meta.desc': 'bubbleTranslate es gratis con 10 traducciones al día. Pro quita el límite diario por 2 $ al mes o 20 $ al año, en hasta tres equipos.',
    'pricing.h1': 'Gratis para usar. Pro cuando diez al día no bastan.',
    'pricing.sub': 'Todas las funciones están en la versión gratuita. Pro cambia exactamente una cosa: quita el límite diario.',
    'pricing.counts.h3': 'Qué cuenta como traducción',
    'pricing.counts.p': 'Solo una traducción que pediste y que realmente llegó. Volver a seleccionar un texto que ya tradujiste hoy es gratis, una petición fallida no cuesta nada, y cambiar el idioma de destino de un resultado que ya viste no se cobra dos veces. El contador se reinicia a tu medianoche, no a la de UTC.',
    'pricing.region.h3': 'Cómo se paga',
    'pricing.region.p': 'El pago lo gestiona Paddle, que actúa como comercio registrado. Cobra la transacción en tu propia moneda. Los impuestos, si corresponden, los calcula y muestra Paddle en el checkout, así que el importe que ves ahí es el que pagas. Pro es una suscripción que puedes cancelar cuando quieras.',
    'pricing.faq.h2': 'Antes de comprar',
    'pricing.faq.q1': '¿Qué pasa cuando se me acaban?',
    'pricing.faq.a1': 'La burbuja te dice que se agotó el margen y te ofrece Pro. Nada más cambia, y el contador vuelve a medianoche.',
    'pricing.faq.q2': '¿Necesito una cuenta?',
    'pricing.faq.a2': 'No. No hay registro ni contraseña. La compra te da una clave de licencia, y es lo único que la aplicación pide.',
    'pricing.faq.q3': '¿En cuántos equipos?',
    'pricing.faq.a3': 'Tres a la vez, con una sola clave. Liberar un puesto es un clic en la aplicación, en un equipo que ya no uses.',
    'pricing.faq.q4': '¿Puedo pedir un reembolso?',
    'pricing.faq.a4': 'Sí, dentro de 14 días y sin dar motivos. Cancelar es otra cosa: conservas Pro hasta que termine el periodo pagado.',
    'pricing.cta.buy': 'Pasar a ilimitado',
    'pricing.cta.free': '↓ Descargar gratis',
    'nav.features': 'Funciones',
    'nav.languages': 'Idiomas',
    'nav.how': 'Cómo funciona',
    'nav.pricing': 'Precios',
    'nav.download': 'Descargar',
    'nav.faq': 'FAQ',
    'nav.terms': 'Términos',
    'nav.privacy': 'Privacidad',
    'nav.refunds': 'Reembolsos',
    'nav.contact': 'Contacto',
    'nav.cta': 'Descargar la app',

    'hero.pill': '🫧 App de escritorio para macOS, Windows y Linux · 10 traducciones gratis al día',
    'hero.h1': 'Traduce cualquier cosa que puedas leer <span class="grad">sin salir de tu escritorio.</span>',
    'hero.lead': 'Se acabaron las interrupciones mientras lees. Deja de copiar y pegar texto en Google Translate. <b>Mantén pulsada la tecla Shift y selecciona el texto</b> para leer la traducción justo donde estás.',
    'hero.dlfree': '↓ Descargar gratis',
    'hero.see': 'Mira cómo funciona',
    'hero.note': 'Gratis · 10 traducciones al día · Pro desde $2/mes para ilimitado',
    'video.caption': '▶ Una grabación de pantalla real: selecciona texto, lee la burbuja.',
    'themes.head.h2': 'Adáptalo con temas',
    'themes.head.p': 'Elige un aspecto que combine con tu escritorio. La burbuja y la app siguen el tema que elijas.',
    'themes.caption': '▶ Cambiando de tema en la app.',

    'trust.lead': '🔒 Privado por diseño',
    'trust.1': 'Sin historial de traducciones',
    'trust.2': 'El servidor nunca ve tu texto',
    'trust.3': 'Solo se envía lo que seleccionas',
    'trust.more': 'Cómo funciona →',
    'what.h2': 'No es un traductor. Es una forma de no interrumpirte.',
    'what.p': 'bubbleTranslate es una herramienta de productividad para quienes trabajan todo el día en un ordenador de escritorio o portátil. La traducción no es lo importante: no perder el hilo sí lo es.',
    'what.1.h3': 'Funciona donde puedas seleccionar texto',
    'what.1.p': 'Documentos, PDF, navegadores, chat, código e incluso menús. Lee la selección a nivel del sistema operativo, así que ninguna aplicación tiene que admitirlo y no hace falta nada más.',
    'what.2.h3': 'Nada más que abrir',
    'what.2.p': 'Sin extensión, sin una segunda ventana, sin un sitio donde pegar el texto. No cambias de página ni dejas lo que estabas haciendo.',
    'what.3.h3': 'Al instante, junto al cursor',
    'what.4.h3': 'Y cuando no hay nada que seleccionar',
    'what.4.p': 'Una captura, una página escaneada, un fotograma, un juego — las palabras son una imagen, así que ninguna app tiene nada que entregar. Pulsa <b>⌘⇧E</b> en macOS o <b>Ctrl+Shift+E</b> en Windows y Linux, arrastra un recuadro encima y la traducción aparece debajo. La lectura ocurre en tu propia máquina.',
    'what.3.p': 'Mantén Shift y selecciona. La burbuja ya está ahí, junto al puntero, y desaparece cuando sigues adelante.',

    'feat.head.h2': 'Una nueva experiencia en traducción, sin interrupciones al leer documentos extranjeros.',

    'feat.1.kicker': 'Instantáneo',
    'feat.1.h3': 'La traducción junto al cursor',
    'feat.1.p': 'Aparece allí donde puedas seleccionar texto: sin ventanas nuevas, sin cambiar de contexto.',
    'feat.2.kicker': 'Sin esfuerzo',
    'feat.2.h3': 'Detección automática del idioma',
    'feat.2.p': 'Nunca tienes que decirle a bubbleTranslate qué estás leyendo.',
    'feat.3.kicker': 'Fiable',
    'feat.3.h3': 'Proveedor de respaldo automático',
    'feat.3.p': 'Si un proveedor no está disponible, bubbleTranslate prueba con otro.',
    'feat.4.kicker': 'Flexible',
    'feat.4.h3': 'Hazla tuya',
    'feat.4.p': 'Idioma de destino, atajo, tamaño del texto y tiempo de ocultación.',
    'feat.5.kicker': 'Línea directa',
    'feat.5.h3': 'Habla directamente con el desarrollador',
    'feat.5.p': '¿Algo roto, algo que falta o algo que te molestó? Usa <b>Enviar comentarios</b> en la app. Sale desde tu propio correo y lo lee quien escribió bubbleTranslate — sin colas de tickets, sin bots.',

    'lang.badge': '✨ Detección automática de idioma',
    'lang.h2': 'Nunca eliges el idioma de origen',
    'lang.p': 'bubbleTranslate descubre por sí solo qué estás leyendo. Selecciona texto en cualquier idioma y lo detecta, luego muestra la traducción en el idioma que elijas. La burbuja hasta te dice qué detectó — por ejemplo <b>Japonés&nbsp;→&nbsp;Inglés</b>.',
    'lang.title': 'Traduce a cualquiera de estos <span class="lang-count">17 idiomas</span>',
    'lang.note': 'Están a un clic en la burbuja. ¿Necesitas otro? También funciona cualquier código de idioma que acepten los proveedores: solo ponlo en la configuración.',

    'how.head.h2': 'Dos caminos: selecciónalo, o dibuja un recuadro',
    'how.head.p': 'Elige tu idioma una vez. Después, mantén pulsada la tecla SHIFT mientras resaltas el texto. Eso es todo para traducir; la traducción es inmediata.',
    'how.1.h3': 'Mantén Shift y selecciona',
    'how.1.p': 'Mantén Shift y selecciona texto en cualquier app. La burbuja aparece solo para una selección hecha con la tecla pulsada, así que seleccionar y copiar a diario quedan intactos.',
    'how.2.h3': 'Lee la burbuja',
    'how.2.p': 'Aparece una pequeña burbuja junto al cursor con la traducción y se oculta sola tras unos segundos.',
    'how.3.h3': 'Sigue trabajando',
    'how.3.p': 'Se queda en la barra de menú o la bandeja y traduce lo siguiente que selecciones con la tecla pulsada. Cambia el idioma de destino desde el menú ⚙ de la burbuja.',
    'how.ocr.h3': '¿No puedes seleccionarlo? Dibuja un recuadro.',
    'how.ocr.p': 'Una captura que te enviaron, una página escaneada, un fotograma de un vídeo, un juego, un escritorio remoto — texto que está en la pantalla pero no pertenece a ningún campo de texto, así que nunca hubo nada que seleccionar. Pulsa <b>⌘⇧E</b> en un Mac, <b>Ctrl+Shift+E</b> en Windows y Linux, arrastra un rectángulo encima y la traducción aparece debajo del recuadro. Escape cancela.',
    'how.ocr.caption': '▶ Leyendo texto de una imagen, en la app.',
    'how.ocr.play': 'Reproducir la demo',
    'how.pic.h3': 'Y cuando las palabras son una imagen',
    'how.pic.p': 'Hay texto que no se puede seleccionar: una captura, una página escaneada, un vídeo, un juego. Si no hay nada que resaltar, no hay nada que traducir — hasta que dibujas un recuadro a su alrededor.',
    'how.pic.1.h3': 'Pulsa el atajo',
    'how.pic.1.p': '⌘⇧E en un Mac, Ctrl+Shift+E en Windows y Linux. La pantalla se oscurece y el puntero se vuelve una cruz.',
    'how.pic.2.h3': 'Dibuja un recuadro',
    'how.pic.2.p': 'Arrástralo alrededor de las palabras. Escape cancela, y no se captura nada hasta que sueltas.',
    'how.pic.3.h3': 'Lee la burbuja',
    'how.pic.3.p': 'Las palabras se leen en tu propio ordenador y luego se traducen. La burbuja aparece debajo del recuadro, así que nunca tapa lo que estabas leyendo.',
    'how.note.h3': '¿Prefieres otra tecla?',
    'how.note.p': 'Shift es la opción por defecto porque mantenerla ya extiende una selección, así que traducir sigue siendo un solo gesto. Puedes cambiar a <b>Ctrl</b>, <b>Alt</b> o <b>Super</b> (⌘ en macOS) en los ajustes de la app, o elegir <b>Cualquier selección</b> para traducir todo, como antes. En algunas sesiones Wayland de Linux la tecla no se puede detectar; ahí la app traduce cada selección y lo indica.',


    'priv.head.h2': 'Privado por diseño',
    'priv.head.p': 'El texto que seleccionas es lo único que sale de tu equipo — y solo cuando lo seleccionas.',
    'priv.1.h3': 'Sin historial de traducciones',
    'priv.1.p': 'bubbleTranslate no guarda tu historial de traducciones. La lista de recientes vive en memoria durante la sesión y desaparece al cerrar la app.',
    'priv.2.h3': 'El servidor de licencias nunca ve tu texto',
    'priv.2.p': 'Tu servidor de licencias nunca ve lo que traduces. Recibe tu clave de licencia y un identificador de dispositivo, y nada más.',
    'priv.3.h3': 'Solo se envía lo que señalas',
    'priv.3.p': 'Al proveedor solo se envía el texto que pediste traducir, junto con el idioma al que traducir. Una zona que lees se convierte en texto en tu propia máquina primero — la imagen nunca sale de ella.',
    'priv.arch.tag': 'Por diseño, no por promesa',
    'priv.arch.1.h3': 'Sin cuenta. Sin registro.',
    'priv.arch.1.p': 'La versión gratuita se diseñó así a propósito. No hay perfil que crear, ni correo que entregar, ni nada donde iniciar sesión: los datos que nunca se piden no se pueden filtrar, vender ni reclamar judicialmente.',
    'priv.arch.2.h3': 'El programa no tiene base de datos.',
    'priv.arch.2.p': 'Tus ajustes, tu licencia y tu recuento diario son simples archivos en tu propia máquina. Nada tuyo se guarda en un servidor nuestro. Borra los archivos y no queda rastro: son tuyos, no nuestros.',
    'priv.arch.foot': 'Lo único que llegamos a saber es una compra de Pro. Paddle cobra el pago, así que los datos de tu tarjeta nunca nos llegan. El servicio de licencias guarda tu correo, el estado y la fecha de fin de tu licencia, y un identificador de dispositivo por máquina para que funcione el límite de tres equipos. Ni siquiera se guarda tu clave de licencia: solo un hash irreversible de ella. Lo que traduces nunca forma parte de nada de eso.',

    'price.head.h2': 'Precios sencillos',
    'price.head.p': 'Empieza gratis con 10 traducciones al día. Pásate a ilimitado cuando necesites más.',
    'price.free.h3': 'Gratis',
    'price.free.per': 'para siempre',
    'price.free.tag': 'Para lecturas ligeras del día a día.',
    'price.free.1': '✓ <b>10 traducciones al día</b>',
    'price.free.2': '✓ Funciona allí donde puedas seleccionar texto',
    'price.free.3': '✓ Cambio automático de proveedor',
    'price.free.4': '✓ Burbuja en el cursor, barra de menú / bandeja',
    'price.free.5': '✓ Sin cuenta, sin registro',
    'price.free.cta': '↓ Descargar gratis',
    'price.pro.ribbon': 'Más popular',
    'price.pro.h3': 'Pro',
    'price.pro.per': '/ mes',
    'price.pro.tag': 'o <b>$20 / año</b> — dos meses gratis.',
    'price.pro.1': '✓ <b>Traducciones ilimitadas</b>',
    'price.pro.2': '✓ Todo lo de Gratis',
    'price.pro.3': '✓ Úsalo en hasta <b>3 equipos</b>',
    'price.pro.4': '✓ Una sola clave de licencia, sin volver a pagar',
    'price.pro.5': '✓ Apoya el desarrollo de la app',
    'price.pro.cta': 'Pásate a Pro',

    'dl.head.h2': 'Descarga bubbleTranslate',
    'dl.head.p': 'Instalación gratuita, con 10 traducciones al día. Pásate a Pro cuando quieras para ilimitado.',
    'dl.mac.desc': 'Universal · Apple Silicon e Intel · macOS 11 o posterior · 15&nbsp;MB',
    'dl.mac.btn': 'Descargar DMG',
    'dl.mac.run': 'Abre el DMG y arrastra la app a Aplicaciones.',
    'dl.mac.block': 'macOS <b>rechazará</b> el primer arranque y dirá que no pudo verificar la app — en todos los Mac, siempre, porque Apple no la ha notarizado. Abre <b>System Settings › Privacy &amp; Security</b>, baja hasta Security y pulsa <b>Open Anyway</b>. Solo una vez.',
    'dl.mac.cmdlead': 'O, si prefieres el Terminal, una línea en lugar de esos clics:',
    'dl.mac.more': 'Todos los pasos, incluido el permiso de Accesibilidad →',
    'mac.install.h3': 'Instalación en macOS — el primer arranque',
    'mac.install.1': 'Abre el DMG y arrastra <b>bubbleTranslate.app</b> a <b>Aplicaciones</b>. Instálala ahí, no la ejecutes desde el DMG o Descargas.',
    'mac.install.2': 'Ábrela una vez. macOS dice que <b>"no pudo verificar"</b> la app — es Gatekeeper reaccionando a una app que Apple no ha notarizado, no algo que la app haga. Descártalo, abre <b>Ajustes del Sistema › Privacidad y seguridad</b>, baja hasta Seguridad y pulsa <b>Abrir de todos modos</b>.',
    'mac.install.3': 'Concede <b>Accesibilidad</b>: <b>Ajustes del Sistema › Privacidad y seguridad › Accesibilidad</b>, y activa <b>bubbleTranslate</b>. Así lee lo que seleccionas — un permiso <i>distinto</i> de Abrir de todos modos.',
    'mac.install.4': '<b>Cierra y vuelve a abrir.</b> El permiso de Accesibilidad solo surte efecto tras un arranque nuevo; cierra bubbleTranslate (el globo en la barra de menú → Quit) y ábrela de nuevo. Hasta que lo hagas, la ventana dice <b>"Not watching for selections."</b>',
    'mac.install.5': 'Listo. Mantén <b>Shift</b> y selecciona texto en cualquier parte, y la burbuja aparece junto al cursor.',
    'mac.install.tip': '¿Sigue en "Not watching" tras reabrir? Quita bubbleTranslate de la lista de Accesibilidad (selecciónala y pulsa −), ejecuta <code>xattr -dr com.apple.quarantine /Applications/bubbleTranslate.app</code>, vuelve a añadirla, actívala y reiníciala. Una entrada residual de una versión anterior puede bloquear la nueva sin avisar.',
    'dl.linux.desc': 'ejecutable x86-64 · cualquier distribución con glibc 2.28+ — Ubuntu 20.04, Debian 10, Fedora, Arch y posteriores · 16&nbsp;MB',
    'dl.linux.btn': 'Descargar binario',
    'dl.linux.run': 'Hazlo ejecutable y ejecútalo:',
    'dl.linux.ocr': '<b>Ctrl+Shift+E</b> lee texto de la pantalla sin instalar nada: un lector integrado se descarga la primera vez que lo usas (12&nbsp;MB). Pero solo conoce letras sin acento — ç, ğ, ş, é, ü salen como c, g, s, e, u, y el cirílico, el árabe o el chino no se leen, así que una palabra sin sus letras puede traducirse como otra. <b>Para que lea bien, instala Tesseract</b>, con un paquete por cada idioma que lees (spa, eng, deu, tur…); una vez instalado, es él quien lee:',
    'dl.linux.note2': 'Se instala una vez y se mantiene en cada actualización; traducir texto seleccionado no lo necesita. Funciona en X11, Hyprland, sway, GNOME y KDE: en GNOME y KDE el escritorio puede preguntar una vez si bubbleTranslate puede hacer capturas de pantalla.',
    'dl.win.desc': 'x86-64 · Windows 10 y 11 · también en ARM · 7&nbsp;MB',
    'dl.win.btn': 'Descargar ZIP',
    'dl.win.run': 'Descomprime el zip, pon bubbleTranslate.exe donde guardes tus programas y haz doble clic. No hay nada que instalar.',
    'dl.win.note2': 'No está firmado, así que SmartScreen detiene el primer arranque: <b>Más información</b> › <b>Ejecutar de todas formas</b>, una vez por equipo.',
    'win.install.h3': 'Instalación en Windows — el primer arranque',
    'win.install.1': 'Descomprime la descarga, luego pon <b>bubbleTranslate.exe</b> donde guardes tus programas y haz doble clic. No hay instalador — el zip contiene un solo archivo, y escribe su configuración en <code>%APPDATA%\\bubbleTranslate</code> la primera vez que se ejecuta.',
    'win.install.2': 'Windows dice <b>"Windows protegió su PC"</b>. Es SmartScreen reaccionando a un archivo que no ha visto firmado, no a algo que haga la app. Pulsa <b>Más información</b> y luego <b>Ejecutar de todas formas</b> — una vez por equipo, no en cada arranque.',
    'win.install.3': 'No hay permiso que conceder: Windows le deja leer lo que seleccionas desde el principio, así que empieza a vigilar en cuanto se abre.',
    'win.install.4': 'Busca el globo. Windows 11 esconde cada icono nuevo de la bandeja tras la flecha <b>^</b> junto al reloj — arrástralo a la barra de tareas para tenerlo a la vista. Ese icono vuelve a abrir la ventana, y es como se sale de la app.',
    'win.install.5': 'Listo. Mantén <b>Shift</b> y selecciona texto en cualquier parte, y la burbuja aparece junto al cursor.',
    'win.install.tip': '¿No aparece nada en una app concreta? Si esa ventana se ejecuta como administrador, Windows la oculta a todo programa que no lo sea — incluido este — y no hay permiso que lo cambie. En el resto, comprueba que mantienes la tecla: Shift por defecto, y se cambia en la sección Behaviour de la ventana.',
    'dl.foot': 'El código fuente, las instrucciones de compilación y toda la documentación están en <a href="https://github.com/pelamx/bubbleTranslate" style="color:var(--brand);" target="_blank" rel="noopener">GitHub</a>.',

    'faq.head.h2': 'Preguntas frecuentes',
    'faq.head.p': 'Todo lo que conviene saber antes de instalar.',
    'faq.q1': '¿bubbleTranslate es gratis?',
    'faq.a1': 'Sí. Obtienes 10 traducciones al día gratis, en macOS, Windows y Linux, sin cuenta ni registro. Si necesitas más, Pro elimina el límite diario por $2/mes o $20/año.',
    'faq.q2': '¿Qué obtengo con Pro?',
    'faq.a2': 'Traducciones ilimitadas en hasta tres equipos, por $2/mes o $20/año (el plan anual regala dos meses). Una sola clave de licencia cubre todos tus equipos y apoya el desarrollo continuo de la app.',
    'faq.q3': '¿Cómo pago Pro?',
    'faq.a3': 'Mensual o anual. El cobro se realiza a través de Paddle, el comercio registrado, así que se te cobra en tu propia moneda. Los impuestos, si corresponden, los calcula y muestra Paddle en el checkout. Puedes cancelar cuando quieras.',
    'faq.q4': '¿En qué sistemas funciona?',
    'faq.a4': 'macOS, Windows y Linux. La versión de Windows es un único .exe que no requiere instalar nada y funciona en Windows 10 y 11, incluidos los equipos ARM. En Linux la descarga funciona en cualquier distribución con glibc 2.28 o superior — Ubuntu 20.04, Debian 10, Fedora, Arch y posteriores; leer texto de la pantalla funciona sin instalar nada, y lee bien — acentos y cualquier alfabeto — con Tesseract instalado.',
    'faq.q5': '¿Necesita conexión a internet?',
    'faq.a5': 'Sí. Las traducciones vienen de proveedores en línea, probados por turnos hasta que uno responde. Solo se envía el texto que pediste traducir, y solo para traducirlo. Una zona que lees se convierte en texto en tu propia máquina primero; la imagen nunca sale de ella.',
    'faq.q6': '¿Qué permiso necesita?',
    'faq.a6': 'En macOS, Accesibilidad: así ve la app lo que has seleccionado, y se pide la primera vez que la abres. Leer una zona de la pantalla necesita un segundo permiso, Grabación de pantalla, y solo se pide la primera vez que pulsas el atajo; si nunca lo usas, nunca te lo piden. En Windows y en la mayoría de sesiones X11 y Wayland, seleccionar no necesita nada más; leer la pantalla usa lo que el sistema ya ofrece.',
    'faq.q7': '¿Traduce todo lo que selecciono?',
    'faq.a7': 'No: solo las selecciones que haces con una tecla pulsada. Shift por defecto, así que extender una selección y traducirla son un mismo gesto. Puedes cambiar la tecla a Ctrl, Alt o Super, o hacer que traduzca cada selección como antes. Copiar y resaltar de forma normal quedan intactos.',
    'faq.q8': '¿Cómo informo de un fallo o sugiero algo?',
    'faq.a8': 'Desde la propia app. Abre la ventana de bubbleTranslate y usa <b>Enviar comentarios</b>: algo roto, algo que falta o algo que te molestó. Sale desde tu propio correo — tu app de correo, Gmail u Outlook — y lo lee quien escribió la app.',

    'cta.h2': 'Lee el mundo sin dejar tu trabajo',
    'cta.p': 'Descarga bubbleTranslate gratis y traduce todo lo que puedas seleccionar.',
    'cta.btn': '↓ Consigue bubbleTranslate gratis',

    'js.downloadFor': '↓ Descargar para {os}',
    'js.osSoon': '{os} — próximamente',
    'js.yourSystem': 'Tu sistema'
  }
};

const SUPPORTED_LANGS = ['en', 'tr', 'es'];
let currentLang = 'en';

function t(key) {
  const table = I18N[currentLang] || I18N.en;
  return (table[key] != null) ? table[key] : (I18N.en[key] != null ? I18N.en[key] : key);
}

// The URL path is the source of truth for language: /tr/... and /es/... are
// the localized subtrees, everything else is English at the root. This keeps
// what a crawler indexes, what <link rel=canonical>/hreflang claim, and what
// the page renders in agreement.
function langFromPath() {
  const m = location.pathname.match(/^\/(tr|es)(\/|$)/);
  return m ? m[1] : 'en';
}
function pathForLang(lang) {
  let rest = location.pathname.replace(/^\/(tr|es)(?=\/|$)/, '');
  if (rest === '') rest = '/';
  const prefix = (lang === 'en') ? '' : '/' + lang;
  let p = prefix + rest;
  if (p === '') p = '/';
  return p + location.search + location.hash;
}
function pickInitialLang() {
  return langFromPath();
}

function applyLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
  currentLang = lang;
  try { localStorage.setItem('bt-lang', lang); } catch (e) {}

  document.documentElement.setAttribute('lang', lang);

  // Every translatable element carries data-i18n; values may include HTML.
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val != null) el.innerHTML = val;
  });

  // Labels that are read rather than shown. A button whose face is a picture
  // has no text to translate, and leaving its label in English would tell a
  // screen reader the one thing on the page that never changed language.
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-aria'));
    if (val != null) el.setAttribute('aria-label', val);
  });

  // <title> and meta description. Each page names its own pair of keys via
  // `<body data-meta-key="...">`, because a second page sharing this script
  // would otherwise be retitled as the landing page every time the language
  // was applied.
  const metaKey = document.body.dataset.metaKey || 'meta';
  const title = t(metaKey + '.title');
  if (title != null) document.title = title;
  const md = document.querySelector('meta[name="description"]');
  const desc = t(metaKey + '.desc');
  if (md && desc != null) md.setAttribute('content', desc.replace(/&amp;/g, '&'));

  // Highlight the active language button.
  document.querySelectorAll('#langSwitch button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });

  // Re-apply the OS-aware button labels in the new language.
  refreshPlatformLabels();
}

// Wire the EN / TR / ES buttons.
const langSwitch = document.getElementById('langSwitch');
if (langSwitch) {
  langSwitch.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      const lang = b.getAttribute('data-lang');
      try { localStorage.setItem('bt-lang', lang); } catch (e) {}
      const here = location.pathname + location.search + location.hash;
      const dest = pathForLang(lang);
      if (dest !== here) location.assign(dest);
    });
  });
}

// ---- OS detection + platform-aware download routing ----
// One place that maps an OS to its download, so a file that lands here is
// offered by the whole site at once — the hero button, the pricing CTA and the
// card all read it.
// Only the metered build (10 free translations a day, then Pro) is ever
// offered. All three are the plain-named metered builds on the app repo's main
// branch. The Windows build is x86-64 and runs under emulation on an ARM
// machine, so there is one file for both; `file: null` is what puts an OS back
// to "coming soon".
const DOWNLOADS = {
  mac:     { file: 'https://github.com/bubbleTranslate/downloads/releases/latest',       label: 'macOS' },
  linux:   { file: 'https://github.com/bubbleTranslate/downloads/releases/latest', label: 'Linux' },
  windows: { file: 'https://github.com/bubbleTranslate/downloads/releases/latest',       label: 'Windows' }
};

// Which version each download is, read from the same latest.json installed
// copies check for updates. The platforms are released separately, so each
// button takes its own version and its own exact file from it.
//
// The links above are only the fallback for when that cannot be read, and they
// point at the releases page rather than at a file. Naming a file there would
// mean naming it inside whichever release is newest -- and since the platforms
// go out one at a time, the newest release is usually the one release that
// does not carry your platform's file, so the fallback would answer 404
// exactly when it was needed. A page listing every download cannot.
const MANIFEST_URL = 'https://raw.githubusercontent.com/bubbleTranslate/downloads/main/latest.json';
const MANIFEST_KEY = { mac: 'macos', linux: 'linux', windows: 'windows' };

function applyManifest(manifest) {
  Object.keys(DOWNLOADS).forEach(key => {
    const entry = manifest && manifest[MANIFEST_KEY[key]];
    if (!entry || !/^\d+\.\d+\.\d+$/.test(entry.version || '')) return;
    if (!/^https:\/\/github\.com\/bubbleTranslate\/downloads\//.test(entry.url || '')) return;
    DOWNLOADS[key].file = entry.url;
    DOWNLOADS[key].version = entry.version;
    const card = document.querySelector('.dl-card[data-os="' + key + '"]');
    if (card) {
      const btn = card.querySelector('a.btn');
      if (btn) btn.setAttribute('href', entry.url);
    }
    document.querySelectorAll('.dl-ver[data-ver="' + key + '"]').forEach(tag => {
      tag.textContent = 'v' + entry.version;
      tag.hidden = false;
    });
  });
  // The hero button was pointed at this visitor's file before the manifest
  // arrived; point it at the exact one, and put the version in its label.
  const hero = document.getElementById('heroDownload');
  const mine = DOWNLOADS[os];
  if (hero && mine && mine.file && hero.getAttribute('href') !== '#download') {
    hero.setAttribute('href', mine.file);
  }
  refreshPlatformLabels();
}

fetch(MANIFEST_URL, { cache: 'no-cache' })
  .then(r => (r.ok ? r.json() : null))
  .then(applyManifest)
  .catch(() => {});

function detectOS() {
  const uaData = navigator.userAgentData;
  const plat = ((uaData && uaData.platform) || navigator.platform || '').toLowerCase();
  const ua = (navigator.userAgent || '').toLowerCase();
  const s = plat + ' ' + ua;
  if (/android/.test(s)) return 'unknown';            // mobile, no build
  if (/iphone|ipad|ipod/.test(s)) return 'unknown';   // iOS, no build
  if (/mac/.test(s)) return 'mac';
  if (/win/.test(s)) return 'windows';
  if (/linux|x11|cros/.test(s)) return 'linux';
  return 'unknown';
}

const os = detectOS();

// Point a button at the right download for this visitor's OS.
// - mac/linux: download that file directly.
// - windows: no file yet, so send them to the download section and flash
//   the "coming soon" card.
// - unknown: leave the button as-is (its href already targets #download).
function wirePlatformButton(btn, localise) {
  if (!btn) return;
  const info = DOWNLOADS[os];
  if (info && info.file) {
    btn.setAttribute('href', info.file);
    btn.setAttribute('download', '');
  } else if (info) {
    // Known OS (mac/windows) but no metered build yet: send to the
    // download section and flash that OS's "coming soon" card.
    btn.setAttribute('href', '#download');
    btn.addEventListener('click', () => flashSoonCard(os));
  }
  // Mark buttons whose label should track the detected OS + language.
  if (localise) btn.dataset.platformBtn = '1';
}

// Set (or reset) the localised label on any OS-aware button.
function refreshPlatformLabels() {
  document.querySelectorAll('[data-platform-btn]').forEach(btn => {
    const info = DOWNLOADS[os];
    if (info && info.file) {
      btn.textContent = t('js.downloadFor').replace('{os}', info.label) +
        (info.version ? ' · v' + info.version : '');
    } else if (info) {
      btn.textContent = t('js.osSoon').replace('{os}', info.label);
    }
    // unknown: leave whatever data-i18n set (e.g. "Download free").
  });
}

function flashSoonCard(which) {
  const card = document.querySelector('.dl-card[data-os="' + which + '"]');
  if (!card) return;
  card.classList.add('flash');
  setTimeout(() => card.classList.remove('flash'), 1600);
}

// The hero "Download free" button tracks the visitor's OS.
//
// The Pro CTA deliberately does not: it used to be wired the same way, which
// rewrote its href to the installer, so "Upgrade to Pro" downloaded the free
// build instead of opening the checkout. It is a plain link now, pointing at
// the buy page the licence service serves.
wirePlatformButton(document.getElementById('heroDownload'), true);

// Highlight the download card that matches this visitor's OS.
const match = document.querySelector('.dl-card[data-os="' + os + '"]');
if (match) {
  match.classList.add('detected');
  const tag = document.createElement('span');
  tag.className = 'detected-tag';
  tag.id = 'detectedTag';
  match.insertBefore(tag, match.firstChild);
}

// First visit to an English page from a tr/es browser: send the visitor to the
// localized version once. An explicit language choice is remembered and stops
// this, and Googlebot (en) is never redirected, so it does not affect indexing.
(function maybeRedirect() {
  if (langFromPath() !== 'en') return;
  let stored = null;
  try { stored = localStorage.getItem('bt-lang'); } catch (e) {}
  if (stored) return;
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  if (nav === 'tr' || nav === 'es') location.replace(pathForLang(nav));
})();

// Translate everything, set the active language, and label the OS buttons.
applyLang(pickInitialLang());

// The "Your system" tag text depends on language too.
function refreshDetectedTag() {
  const tag = document.getElementById('detectedTag');
  if (tag) tag.textContent = t('js.yourSystem');
}
refreshDetectedTag();
// Keep the tag in sync when the language changes.
if (langSwitch) {
  langSwitch.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', refreshDetectedTag);
  });
}
