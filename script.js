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
    'meta.title': 'BubbleTranslate — Translate anything without leaving your screen',
    'meta.desc': 'BubbleTranslate is a lightweight desktop app for macOS and Linux. Select text in any app and a bubble appears at your cursor with the translation. 10 free translations a day; go unlimited with Pro from $2/month.',

    // -- /pricing -----------------------------------------------------------
    'pricing.meta.title': 'Pricing — BubbleTranslate',
    'pricing.meta.desc': 'BubbleTranslate is free for 10 translations a day. Pro removes the daily limit for $2 a month or $20 a year, on up to three machines.',
    'pricing.h1': 'Free to use. Pro when ten a day is not enough.',
    'pricing.sub': 'Every feature is in the free version. Pro changes exactly one thing: it removes the daily limit.',
    'pricing.counts.h3': 'What counts as a translation',
    'pricing.counts.p': 'Only a translation you asked for and actually got back. Re-selecting text you already translated today is free, a failed request costs nothing, and switching the target language on a result you have already seen does not charge you twice. The count resets at your own midnight, not at UTC.',
    'pricing.region.h3': 'How you pay',
    'pricing.region.p': 'In Turkey the checkout is PayTR and you are charged in lira, for a fixed term that does not renew by itself. Everywhere else it is Paddle, as a subscription you can cancel at any time. The checkout picks the right one for you.',
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

    'hero.pill': '🫧 For macOS &amp; Linux · 10 free translations a day',
    'hero.h1': 'Translate anything <span class="grad">without leaving your screen.</span>',
    'hero.lead': 'No interruption while reading anymore. Stop copy-pasting text into Google Translate. <b>Hold Shift, select text</b>, and read the translation right where you are.',
    'hero.dlfree': '↓ Download free',
    'hero.see': 'See how it works',
    'hero.note': 'Free · 10 translations a day · Pro from $2/month for unlimited',
    'video.caption': '▶ A real screen recording — hold Shift, select text, read the bubble.',

    'feat.head.h2': 'New experience in translation, no interruption while foreign docs and readings.',
    'feat.head.p': 'The window is somewhere to visit, not somewhere to live. The app just watches your selections and answers.',
    'feat.1.h3': 'Works in every app',
    'feat.1.p': 'Select text in a PDF, a terminal, a browser, or an editor. If you can highlight it, BubbleTranslate can read it.',
    'feat.2.h3': 'Bubble at your cursor',
    'feat.2.p': 'The translation appears right where you\'re reading, then auto-hides. No new tab, no window to hunt for.',
    'feat.3.h3': 'Three backends, in order',
    'feat.3.p': 'Google, then MyMemory, then DeepL — tried until one answers. When all refuse, the bubble tells you why.',
    'feat.4.h3': 'Lives in the menu bar / tray',
    'feat.4.p': 'A globe in the macOS menu bar or the Linux tray. Closing the window doesn\'t quit; it keeps watching.',
    'feat.5.h3': 'One permission',
    'feat.5.p': 'Accessibility on macOS, so the app can see what\'s selected. That\'s the only thing it asks for.',
    'feat.6.h3': 'Yours to tune',
    'feat.6.p': 'Target language, provider order, text size, and auto-hide delay — all editable, saved the moment you change them.',

    'lang.badge': '✨ Automatic language detection',
    'lang.h2': 'You never pick the source language',
    'lang.p': 'BubbleTranslate figures out what you\'re reading on its own. Select text in any language and it detects it, then shows the translation in the language you chose. The bubble even tells you what it detected — like <b>Japanese&nbsp;→&nbsp;English</b>.',
    'lang.title': 'Translate into any of these <span class="lang-count">17 languages</span>',
    'lang.note': 'Those are one click away in the bubble. Need another? Any language code the providers accept works too — just set it in the config.',

    'how.head.h2': 'Three steps, then it\'s automatic',
    'how.head.p': 'Set your language once. After that, hold Shift and select.',
    'how.1.h3': 'Hold Shift and select',
    'how.1.p': 'Keep Shift down while you highlight anything in any app. Shift is the default; you can change it to Ctrl, Alt or Super — or turn the key off and have every selection translated.',
    'how.2.h3': 'Read the bubble',
    'how.2.p': 'A small bubble pops up at your cursor with the translation, and quietly hides itself after a few seconds.',
    'how.3.h3': 'Keep working',
    'how.3.p': 'It stays in the menu bar or tray and translates the next thing you select. Change the target language from the bubble\'s ⚙ menu.',

    'price.head.h2': 'Simple pricing',
    'price.head.p': 'Start free with 10 translations a day. Go unlimited when you need more.',
    'price.free.h3': 'Free',
    'price.free.per': 'forever',
    'price.free.tag': 'For light, everyday reading.',
    'price.free.1': '✓ <b>10 translations per day</b>',
    'price.free.2': '✓ Works in every app on macOS &amp; Linux',
    'price.free.3': '✓ Google, MyMemory &amp; DeepL backends',
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

    'dl.head.h2': 'Download BubbleTranslate',
    'dl.head.p': 'Free to install, with 10 translations a day. Upgrade to Pro anytime for unlimited.',
    'dl.mac.desc': 'Apple Silicon · macOS 11 or later · 7&nbsp;MB',
    'dl.mac.btn': 'Download DMG',
    'dl.mac.run': 'Open the DMG and drag the app into Applications.',
    'dl.mac.note2': 'The app is ad-hoc signed, so macOS blocks the first launch. Run that once, or use <b>Open Anyway</b> in System Settings › Privacy &amp; Security.',
    'dl.linux.desc': 'x86-64 executable · needs glibc 2.43+ · 20&nbsp;MB',
    'dl.linux.btn': 'Download binary',
    'dl.linux.run': 'Make it executable and run it:',
    'dl.linux.note2': 'On an older distro, or GNOME Wayland, build from source instead.',
    'dl.win.badge': 'Coming soon',
    'dl.win.desc': 'It is coming soon.',
    'dl.win.btn': 'Coming soon',
    'dl.win.note': 'Want to hear when it lands? Watch the project on <a href="https://github.com/pelamx/bubbleTranslate" style="color:var(--brand);" target="_blank" rel="noopener">GitHub</a>.',
    'dl.foot': 'Source, build instructions, and full docs live on <a href="https://github.com/pelamx/bubbleTranslate" style="color:var(--brand);" target="_blank" rel="noopener">GitHub</a>.',

    'faq.head.h2': 'Frequently asked questions',
    'faq.head.p': 'Everything worth knowing before you install.',
    'faq.q1': 'Is BubbleTranslate free?',
    'faq.a1': 'Yes. You get 10 translations a day for free, on macOS and Linux, with no account or sign-up. If you need more, Pro removes the daily limit for $2/month or $20/year.',
    'faq.q2': 'What do I get with Pro?',
    'faq.a2': 'Unlimited translations on up to three machines, for $2/month or $20/year (the yearly plan is two months free). One licence key covers all your machines, and it supports the app\'s ongoing development.',
    'faq.q3': 'How do I pay for Pro?',
    'faq.a3': 'Monthly or yearly. In Turkey billing goes through PayTR; everywhere else through Paddle, the merchant of record. You can cancel anytime.',
    'faq.q4': 'Which systems does it run on?',
    'faq.a4': 'macOS and Linux. There\'s no Windows build yet. On Linux you need glibc 2.43 or newer for the prebuilt binary; on an older distribution, build from source.',
    'faq.q5': 'Does it need an internet connection?',
    'faq.a5': 'Yes. Translations come from online providers — Google, MyMemory, and optionally DeepL — tried in order until one answers. Only the text you select is sent, and only to translate it.',
    'faq.q6': 'What permission does it need?',
    'faq.a6': 'On macOS, Accessibility — that\'s how the app sees what you\'ve selected. It\'s the only permission it asks for. On Linux nothing extra is needed on X11 or Hyprland. On other Wayland desktops, reading the Shift key needs your user to be in the <code>input</code> group; without it every selection is translated instead.',

    'cta.h2': 'Read the world without leaving your work',
    'cta.p': 'Download BubbleTranslate free and translate anything you can select.',
    'cta.btn': '↓ Get BubbleTranslate free',

    'js.downloadFor': '↓ Download for {os}',
    'js.osSoon': '{os} — coming soon',
    'js.yourSystem': 'Your system'
  },

  tr: {
    'meta.title': 'BubbleTranslate — Ekranınızdan ayrılmadan seçtiğiniz metni çevirin',
    'meta.desc': 'BubbleTranslate, macOS ve Linux için hafif bir masaüstü uygulamasıdır. Herhangi bir uygulamada metin seçin; imlecinizin yanında çevirisiyle bir baloncuk belirir. Günde 10 ücretsiz çeviri; sınırsız için Pro aylık $2\'den başlar.',

    // -- /pricing -----------------------------------------------------------
    'pricing.meta.title': 'Fiyatlandırma — BubbleTranslate',
    'pricing.meta.desc': 'BubbleTranslate günde 10 çeviriye kadar ücretsiz. Pro, günlük sınırı kaldırır: ayda 2 dolar veya yılda 20 dolar, üç makineye kadar.',
    'pricing.h1': 'Kullanması ücretsiz. Günde on yetmediğinde Pro var.',
    'pricing.sub': 'Bütün özellikler ücretsiz sürümde. Pro tek bir şeyi değiştirir: günlük sınırı kaldırır.',
    'pricing.counts.h3': 'Ne çeviri sayılır',
    'pricing.counts.p': 'Yalnızca sizin istediğiniz ve gerçekten dönen bir çeviri. Bugün zaten çevirdiğiniz bir metni yeniden seçmek ücretsizdir, başarısız istek hiçbir şeye mal olmaz, gördüğünüz bir sonucun hedef dilini değiştirmek de iki kez saymaz. Sayaç UTC\'de değil, sizin gece yarınızda sıfırlanır.',
    'pricing.region.h3': 'Ödeme nasıl yapılır',
    'pricing.region.p': 'Türkiye\'de ödeme PayTR üzerinden ve lira olarak alınır; kendiliğinden yenilenmeyen sabit bir süre satın alırsınız. Diğer ülkelerde Paddle üzerinden, istediğiniz an iptal edebileceğiniz bir abonelik olarak işler. Ödeme sayfası doğru olanı kendisi seçer.',
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

    'hero.pill': '🫧 macOS &amp; Linux için · günde 10 ücretsiz çeviri',
    'hero.h1': '<span class="grad">Ekranınızdan ayrılmadan</span> seçtiğiniz metnin çevirisini yapın.',
    'hero.lead': 'Okurken artık copy/paste dikkatinizi dağıtmayacak. Metinleri Google Translate\'e kopyalayıp yapıştırmayı bırakın. <b>Shift\'i basılı tutun, metni seçin</b> ve çeviriyi tam olduğunuz yerde okuyun.',
    'hero.dlfree': '↓ Ücretsiz indir',
    'hero.see': 'Nasıl çalıştığını gör',
    'hero.note': 'Ücretsiz · günde 10 çeviri · sınırsız için Pro aylık $2\'den',
    'video.caption': '▶ Gerçek bir ekran kaydı — Shift\'i basılı tutun, metni seçin, baloncuğu okuyun.',

    'feat.head.h2': 'Çeviride yeni bir deneyim — yabancı belgeleri okurken kesinti yok.',
    'feat.head.p': 'Pencere, yaşanacak değil ziyaret edilecek bir yer. Uygulama sadece seçimlerinizi izler ve yanıtlar.',
    'feat.1.h3': 'Her uygulamada çalışır',
    'feat.1.p': 'Bir PDF\'te, terminalde, tarayıcıda veya editörde metin seçin. Seçebiliyorsanız, BubbleTranslate okuyabilir.',
    'feat.2.h3': 'İmlecinizde baloncuk',
    'feat.2.p': 'Çeviri tam okuduğunuz yerde belirir, sonra kendiliğinden gizlenir. Yeni sekme yok, aranacak pencere yok.',
    'feat.3.h3': 'Sırayla üç sağlayıcı',
    'feat.3.p': 'Google, sonra MyMemory, sonra DeepL — biri yanıt verene kadar denenir. Hepsi reddederse, baloncuk nedenini söyler.',
    'feat.4.h3': 'Menü çubuğunda / tepside durur',
    'feat.4.p': 'macOS menü çubuğunda veya Linux tepsisinde bir küre. Pencereyi kapatmak uygulamayı kapatmaz; izlemeye devam eder.',
    'feat.5.h3': 'Tek bir izin',
    'feat.5.p': 'macOS\'ta Erişilebilirlik, böylece uygulama neyin seçildiğini görebilir. İstediği tek şey bu.',
    'feat.6.h3': 'İstediğiniz gibi ayarlayın',
    'feat.6.p': 'Hedef dil, sağlayıcı sırası, metin boyutu ve otomatik gizlenme süresi — hepsi düzenlenebilir, değiştirdiğiniz an kaydedilir.',

    'lang.badge': '✨ Otomatik dil algılama',
    'lang.h2': 'Kaynak dili asla siz seçmezsiniz',
    'lang.p': 'BubbleTranslate ne okuduğunuzu kendisi anlar. Herhangi bir dilde metin seçin; algılar ve çeviriyi seçtiğiniz dilde gösterir. Baloncuk, neyi algıladığını bile söyler — örneğin <b>Japonca&nbsp;→&nbsp;İngilizce</b>.',
    'lang.title': 'Şu <span class="lang-count">17 dilden</span> herhangi birine çevirin',
    'lang.note': 'Bunlar baloncukta tek tıkla seçilebilir. Başka mı lazım? Sağlayıcıların kabul ettiği herhangi bir dil kodu da çalışır — sadece ayar dosyasına yazın.',

    'how.head.h2': 'Üç adım, sonrası otomatik',
    'how.head.p': 'Dilinizi bir kez ayarlayın. Sonrasında Shift\'i basılı tutup seçin.',
    'how.1.h3': 'Shift\'i basılı tutup seçin',
    'how.1.p': 'Herhangi bir uygulamada seçim yaparken Shift\'i basılı tutun. Shift varsayılandır; Ctrl, Alt veya Super olarak değiştirebilir, ya da tuşu tamamen kapatıp her seçimin çevrilmesini sağlayabilirsiniz.',
    'how.2.h3': 'Baloncuğu okuyun',
    'how.2.p': 'İmlecinizde çeviriyle küçük bir baloncuk belirir ve birkaç saniye sonra sessizce gizlenir.',
    'how.3.h3': 'Çalışmaya devam edin',
    'how.3.p': 'Menü çubuğunda veya tepside kalır ve seçtiğiniz bir sonraki şeyi çevirir. Hedef dili baloncuğun ⚙ menüsünden değiştirin.',

    'price.head.h2': 'Basit fiyatlandırma',
    'price.head.p': 'Günde 10 çeviriyle ücretsiz başlayın. Daha fazlası gerektiğinde sınırsıza geçin.',
    'price.free.h3': 'Ücretsiz',
    'price.free.per': 'sonsuza dek',
    'price.free.tag': 'Günlük, hafif okumalar için.',
    'price.free.1': '✓ <b>Günde 10 çeviri</b>',
    'price.free.2': '✓ macOS &amp; Linux\'ta her uygulamada çalışır',
    'price.free.3': '✓ Google, MyMemory ve DeepL sağlayıcıları',
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

    'dl.head.h2': 'BubbleTranslate\'i indirin',
    'dl.head.p': 'Kurulumu ücretsiz, günde 10 çeviriyle. Sınırsız için istediğiniz zaman Pro\'ya geçin.',
    'dl.mac.desc': 'Apple Silicon · macOS 11 veya üzeri · 7&nbsp;MB',
    'dl.mac.btn': 'DMG indir',
    'dl.mac.run': 'DMG\'yi açın ve uygulamayı Applications klasörüne sürükleyin.',
    'dl.mac.note2': 'Uygulama ad-hoc imzalı olduğu için macOS ilk açılışı engeller. Yukarıdaki komutu bir kez çalıştırın veya Sistem Ayarları › Gizlilik ve Güvenlik bölümünden <b>Yine de Aç</b>\'ı seçin.',
    'dl.linux.desc': 'x86-64 çalıştırılabilir dosya · glibc 2.43+ gerekir · 20&nbsp;MB',
    'dl.linux.btn': 'İkili dosyayı indir',
    'dl.linux.run': 'Çalıştırılabilir yapın ve çalıştırın:',
    'dl.linux.note2': 'Daha eski bir dağıtımda veya GNOME Wayland\'da bunun yerine kaynaktan derleyin.',
    'dl.win.badge': 'Yakında',
    'dl.win.desc': 'Yakında geliyor.',
    'dl.win.btn': 'Yakında',
    'dl.win.note': 'Çıktığında haber almak ister misiniz? Projeyi <a href="https://github.com/pelamx/bubbleTranslate" style="color:var(--brand);" target="_blank" rel="noopener">GitHub</a>\'da takip edin.',
    'dl.foot': 'Kaynak kod, derleme talimatları ve tüm belgeler <a href="https://github.com/pelamx/bubbleTranslate" style="color:var(--brand);" target="_blank" rel="noopener">GitHub</a>\'da.',

    'faq.head.h2': 'Sıkça sorulan sorular',
    'faq.head.p': 'Kurmadan önce bilmeye değer her şey.',
    'faq.q1': 'BubbleTranslate ücretsiz mi?',
    'faq.a1': 'Evet. macOS ve Linux\'ta, hesap veya kayıt olmadan günde 10 ücretsiz çeviri alırsınız. Daha fazlası gerekirse Pro, günlük sınırı $2/ay veya $20/yıl karşılığında kaldırır.',
    'faq.q2': 'Pro ile ne elde ederim?',
    'faq.a2': 'En fazla üç makinede sınırsız çeviri, $2/ay veya $20/yıl karşılığında (yıllık planda iki ay bedava). Tek lisans anahtarı tüm makinelerinizi kapsar ve uygulamanın sürekli gelişimini destekler.',
    'faq.q3': 'Pro için nasıl ödeme yaparım?',
    'faq.a3': 'Aylık veya yıllık. Türkiye\'de ödeme PayTR üzerinden; diğer tüm yerlerde kayıtlı satıcı Paddle üzerinden yapılır. İstediğiniz zaman iptal edebilirsiniz.',
    'faq.q4': 'Hangi sistemlerde çalışır?',
    'faq.a4': 'macOS ve Linux. Henüz Windows sürümü yok. Linux\'ta hazır ikili dosya için glibc 2.43 veya üstü gerekir; daha eski bir dağıtımda kaynaktan derleyin.',
    'faq.q5': 'İnternet bağlantısı gerekir mi?',
    'faq.a5': 'Evet. Çeviriler çevrimiçi sağlayıcılardan gelir — Google, MyMemory ve isteğe bağlı DeepL — biri yanıt verene kadar sırayla denenir. Yalnızca seçtiğiniz metin, yalnızca çevirmek için gönderilir.',
    'faq.q6': 'Hangi izne ihtiyacı var?',
    'faq.a6': 'macOS\'ta Erişilebilirlik — uygulama seçtiğinizi böyle görür. İstediği tek izin budur. Linux\'ta X11 ve Hyprland\'de ek bir şey gerekmez. Diğer Wayland masaüstlerinde Shift tuşunu okuyabilmek için kullanıcınızın <code>input</code> grubunda olması gerekir; olmazsa tuş şartı uygulanmaz ve her seçim çevrilir.',

    'cta.h2': 'İşinizi bırakmadan dünyayı okuyun',
    'cta.p': 'BubbleTranslate\'i ücretsiz indirin ve seçebildiğiniz her şeyi çevirin.',
    'cta.btn': '↓ BubbleTranslate\'i ücretsiz al',

    'js.downloadFor': '↓ {os} için indir',
    'js.osSoon': '{os} — yakında',
    'js.yourSystem': 'Sizin sisteminiz'
  },

  es: {
    'meta.title': 'BubbleTranslate — Traduce lo que sea sin salir de tu pantalla',
    'meta.desc': 'BubbleTranslate es una ligera app de escritorio para macOS y Linux. Selecciona texto en cualquier app y aparece una burbuja junto al cursor con la traducción. 10 traducciones gratis al día; pásate a ilimitado con Pro desde $2/mes.',

    // -- /pricing -----------------------------------------------------------
    'pricing.meta.title': 'Precios — BubbleTranslate',
    'pricing.meta.desc': 'BubbleTranslate es gratis con 10 traducciones al día. Pro quita el límite diario por 2 $ al mes o 20 $ al año, en hasta tres equipos.',
    'pricing.h1': 'Gratis para usar. Pro cuando diez al día no bastan.',
    'pricing.sub': 'Todas las funciones están en la versión gratuita. Pro cambia exactamente una cosa: quita el límite diario.',
    'pricing.counts.h3': 'Qué cuenta como traducción',
    'pricing.counts.p': 'Solo una traducción que pediste y que realmente llegó. Volver a seleccionar un texto que ya tradujiste hoy es gratis, una petición fallida no cuesta nada, y cambiar el idioma de destino de un resultado que ya viste no se cobra dos veces. El contador se reinicia a tu medianoche, no a la de UTC.',
    'pricing.region.h3': 'Cómo se paga',
    'pricing.region.p': 'En Turquía el pago es con PayTR y se cobra en liras, por un plazo fijo que no se renueva solo. En el resto del mundo es Paddle, como una suscripción que puedes cancelar cuando quieras. La página de pago elige la opción correcta por ti.',
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

    'hero.pill': '🫧 Para macOS y Linux · 10 traducciones gratis al día',
    'hero.h1': 'Traduce lo que sea <span class="grad">sin salir de tu pantalla.</span>',
    'hero.lead': 'Se acabaron las interrupciones mientras lees. Deja de copiar y pegar texto en Google Translate. <b>Mantén pulsada la tecla Shift y selecciona el texto</b> para leer la traducción justo donde estás.',
    'hero.dlfree': '↓ Descargar gratis',
    'hero.see': 'Mira cómo funciona',
    'hero.note': 'Gratis · 10 traducciones al día · Pro desde $2/mes para ilimitado',
    'video.caption': '▶ Una grabación de pantalla real: mantén Shift, selecciona texto, lee la burbuja.',

    'feat.head.h2': 'Una nueva experiencia en traducción, sin interrupciones al leer documentos extranjeros.',
    'feat.head.p': 'La ventana es un lugar para visitar, no para vivir. La app solo observa lo que seleccionas y responde.',
    'feat.1.h3': 'Funciona en cualquier app',
    'feat.1.p': 'Selecciona texto en un PDF, una terminal, un navegador o un editor. Si puedes resaltarlo, BubbleTranslate puede leerlo.',
    'feat.2.h3': 'Burbuja en el cursor',
    'feat.2.p': 'La traducción aparece justo donde estás leyendo y luego se oculta sola. Sin pestañas nuevas, sin ventanas que buscar.',
    'feat.3.h3': 'Tres motores, en orden',
    'feat.3.p': 'Google, luego MyMemory, luego DeepL: se prueban hasta que uno responde. Si todos fallan, la burbuja te dice por qué.',
    'feat.4.h3': 'Vive en la barra de menú / bandeja',
    'feat.4.p': 'Un globo en la barra de menú de macOS o en la bandeja de Linux. Cerrar la ventana no cierra la app; sigue observando.',
    'feat.5.h3': 'Un solo permiso',
    'feat.5.p': 'Accesibilidad en macOS, para que la app pueda ver lo seleccionado. Es lo único que pide.',
    'feat.6.h3': 'A tu medida',
    'feat.6.p': 'Idioma de destino, orden de proveedores, tamaño de texto y tiempo de ocultado automático: todo editable y guardado al instante.',

    'lang.badge': '✨ Detección automática de idioma',
    'lang.h2': 'Nunca eliges el idioma de origen',
    'lang.p': 'BubbleTranslate descubre por sí solo qué estás leyendo. Selecciona texto en cualquier idioma y lo detecta, luego muestra la traducción en el idioma que elijas. La burbuja hasta te dice qué detectó — por ejemplo <b>Japonés&nbsp;→&nbsp;Inglés</b>.',
    'lang.title': 'Traduce a cualquiera de estos <span class="lang-count">17 idiomas</span>',
    'lang.note': 'Están a un clic en la burbuja. ¿Necesitas otro? También funciona cualquier código de idioma que acepten los proveedores: solo ponlo en la configuración.',

    'how.head.h2': 'Tres pasos y luego es automático',
    'how.head.p': 'Configura tu idioma una vez. Después, mantén Shift y selecciona.',
    'how.1.h3': 'Mantén Shift y selecciona',
    'how.1.p': 'Mantén pulsada la tecla Shift mientras resaltas cualquier cosa en cualquier app. Shift es la predeterminada; puedes cambiarla por Ctrl, Alt o Super, o desactivar la tecla y que se traduzca cada selección.',
    'how.2.h3': 'Lee la burbuja',
    'how.2.p': 'Aparece una pequeña burbuja junto al cursor con la traducción y se oculta sola tras unos segundos.',
    'how.3.h3': 'Sigue trabajando',
    'how.3.p': 'Se queda en la barra de menú o la bandeja y traduce lo siguiente que selecciones. Cambia el idioma de destino desde el menú ⚙ de la burbuja.',

    'price.head.h2': 'Precios sencillos',
    'price.head.p': 'Empieza gratis con 10 traducciones al día. Pásate a ilimitado cuando necesites más.',
    'price.free.h3': 'Gratis',
    'price.free.per': 'para siempre',
    'price.free.tag': 'Para lecturas ligeras del día a día.',
    'price.free.1': '✓ <b>10 traducciones al día</b>',
    'price.free.2': '✓ Funciona en cualquier app en macOS y Linux',
    'price.free.3': '✓ Motores Google, MyMemory y DeepL',
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

    'dl.head.h2': 'Descarga BubbleTranslate',
    'dl.head.p': 'Instalación gratuita, con 10 traducciones al día. Pásate a Pro cuando quieras para ilimitado.',
    'dl.mac.desc': 'Apple Silicon · macOS 11 o posterior · 7&nbsp;MB',
    'dl.mac.btn': 'Descargar DMG',
    'dl.mac.run': 'Abre el DMG y arrastra la app a Aplicaciones.',
    'dl.mac.note2': 'La app está firmada ad-hoc, así que macOS bloquea el primer inicio. Ejecuta ese comando una vez, o usa <b>Abrir de todos modos</b> en Ajustes del Sistema › Privacidad y seguridad.',
    'dl.linux.desc': 'ejecutable x86-64 · requiere glibc 2.43+ · 20&nbsp;MB',
    'dl.linux.btn': 'Descargar binario',
    'dl.linux.run': 'Hazlo ejecutable y ejecútalo:',
    'dl.linux.note2': 'En una distro más antigua, o GNOME Wayland, compílalo desde el código fuente.',
    'dl.win.badge': 'Próximamente',
    'dl.win.desc': 'Llegará pronto.',
    'dl.win.btn': 'Próximamente',
    'dl.win.note': '¿Quieres enterarte cuando salga? Sigue el proyecto en <a href="https://github.com/pelamx/bubbleTranslate" style="color:var(--brand);" target="_blank" rel="noopener">GitHub</a>.',
    'dl.foot': 'El código fuente, las instrucciones de compilación y toda la documentación están en <a href="https://github.com/pelamx/bubbleTranslate" style="color:var(--brand);" target="_blank" rel="noopener">GitHub</a>.',

    'faq.head.h2': 'Preguntas frecuentes',
    'faq.head.p': 'Todo lo que conviene saber antes de instalar.',
    'faq.q1': '¿BubbleTranslate es gratis?',
    'faq.a1': 'Sí. Obtienes 10 traducciones al día gratis, en macOS y Linux, sin cuenta ni registro. Si necesitas más, Pro elimina el límite diario por $2/mes o $20/año.',
    'faq.q2': '¿Qué obtengo con Pro?',
    'faq.a2': 'Traducciones ilimitadas en hasta tres equipos, por $2/mes o $20/año (el plan anual regala dos meses). Una sola clave de licencia cubre todos tus equipos y apoya el desarrollo continuo de la app.',
    'faq.q3': '¿Cómo pago Pro?',
    'faq.a3': 'Mensual o anual. En Turquía el cobro es a través de PayTR; en el resto a través de Paddle, el comercio registrado. Puedes cancelar cuando quieras.',
    'faq.q4': '¿En qué sistemas funciona?',
    'faq.a4': 'macOS y Linux. Aún no hay versión para Windows. En Linux necesitas glibc 2.43 o superior para el binario precompilado; en una distribución más antigua, compílalo desde el código fuente.',
    'faq.q5': '¿Necesita conexión a internet?',
    'faq.a5': 'Sí. Las traducciones vienen de proveedores en línea — Google, MyMemory y, opcionalmente, DeepL — probados en orden hasta que uno responde. Solo se envía el texto que seleccionas, y solo para traducirlo.',
    'faq.q6': '¿Qué permiso necesita?',
    'faq.a6': 'En macOS, Accesibilidad: así ve la app lo que has seleccionado. Es el único permiso que pide. En Linux no hace falta nada extra en X11 ni en Hyprland. En otros escritorios Wayland, leer la tecla Shift requiere que tu usuario esté en el grupo <code>input</code>; sin eso se traduce cada selección.',

    'cta.h2': 'Lee el mundo sin dejar tu trabajo',
    'cta.p': 'Descarga BubbleTranslate gratis y traduce todo lo que puedas seleccionar.',
    'cta.btn': '↓ Consigue BubbleTranslate gratis',

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

function pickInitialLang() {
  let stored = null;
  try { stored = localStorage.getItem('bt-lang'); } catch (e) {}
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(nav) ? nav : 'en';
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
    b.addEventListener('click', () => applyLang(b.getAttribute('data-lang')));
  });
}

// ---- OS detection + platform-aware download routing ----
// One place that maps an OS to its download. Add the Windows file here when
// it's ready and the whole site starts offering it automatically.
// Only the metered build (10 free translations a day, then Pro) is ever
// offered. Both files are the plain-named metered builds on the app repo's main
// branch. The macOS DMG is arm64 only, so an Intel Mac gets a download it
// cannot run — worth a universal build before that matters. Windows has no
// build yet and stays "coming soon" (file: null) until one exists.
const DOWNLOADS = {
  mac:     { file: 'https://github.com/pelamx/bubbleTranslate/raw/main/bubbleTranslate.dmg',       label: 'macOS' },
  linux:   { file: 'https://github.com/pelamx/bubbleTranslate/raw/main/bubbleTranslate-linux-x86_64', label: 'Linux' },
  windows: { file: null,                                                                          label: 'Windows' }
};

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
      btn.textContent = t('js.downloadFor').replace('{os}', info.label);
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
