// ============================================================
//  Consent banner and ad measurement for the Google tag
//  (Consent Mode v2).
//  The <head> of every page sets all consent to "denied" before
//  gtag.js loads, and replays a stored "granted". This file asks
//  the question and records the answer as the cookie `bt_consent`
//  ("granted" | "denied") on the parent domain, so the purchase
//  page on api.bubbletranslate.app sees the same choice.
//  Choices made before the cookie existed are still read from
//  localStorage (`bt-consent`).
//
//  It also does the two things an ad click needs from this site:
//  it carries the click id to the buy page, where the purchase is
//  reported, and it reports a download as a conversion.
//  Self-contained: the legal pages do not load script.js.
// ============================================================
(function () {
  var KEY = 'bt-consent';
  var TAG = 'AW-18451580938';
  var DOWNLOAD = TAG + '/UsaFCKfvq4YdEIqQs95E';
  var CLICK_IDS = ['gclid', 'gbraid', 'wbraid'];
  var TEXT = {
    en: { msg: 'We use Google Ads cookies to measure whether our ads work. They are off unless you allow them.',
          accept: 'Allow', reject: 'Decline', more: 'Privacy Policy' },
    tr: { msg: 'Reklamlarımızın işe yarayıp yaramadığını ölçmek için Google Ads çerezleri kullanıyoruz. İzin vermediğiniz sürece kapalıdır.',
          accept: 'İzin ver', reject: 'Reddet', more: 'Gizlilik Politikası' },
    es: { msg: 'Usamos cookies de Google Ads para medir si nuestros anuncios funcionan. Están desactivadas salvo que las permitas.',
          accept: 'Permitir', reject: 'Rechazar', more: 'Política de privacidad' }
  };

  // The page's own language comes first: /tr/ and /es/ are the translated
  // trees, and a visitor there should be asked in that language.
  function lang() {
    var m = location.pathname.match(/^\/(tr|es)(\/|$)/);
    if (m) return m[1];
    var l = null;
    try { l = localStorage.getItem('bt-lang'); } catch (e) {}
    l = l || (navigator.language || 'en').slice(0, 2).toLowerCase();
    return TEXT[l] ? l : 'en';
  }

  function stored() {
    var m = document.cookie.match(/(?:^|; )bt_consent=(granted|denied)(?:;|$)/);
    if (m) return m[1];
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function set(value) {
    var domain = /(^|\.)bubbletranslate\.app$/.test(location.hostname) ? '; Domain=bubbletranslate.app' : '';
    document.cookie = 'bt_consent=' + value + domain + '; Path=/; Max-Age=31536000; SameSite=Lax' +
      (location.protocol === 'https:' ? '; Secure' : '');
    try { localStorage.setItem(KEY, value); } catch (e) {}
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        ad_storage: value, ad_user_data: value,
        ad_personalization: value, analytics_storage: value
      });
    }
    if (value === 'granted') keepClickIds();
  }

  function show() {
    if (document.getElementById('consentBanner')) return;
    var t = TEXT[lang()];
    var el = document.createElement('div');
    el.id = 'consentBanner';
    el.className = 'consent';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.innerHTML =
      '<p>' + t.msg + ' <a href="/privacy#website">' + t.more + '</a></p>' +
      '<div class="consent-actions">' +
      '<button type="button" class="btn btn-ghost" data-v="denied">' + t.reject + '</button>' +
      '<button type="button" class="btn btn-primary" data-v="granted">' + t.accept + '</button>' +
      '</div>';
    el.addEventListener('click', function (e) {
      var v = e.target.getAttribute && e.target.getAttribute('data-v');
      if (!v) return;
      set(v);
      el.remove();
    });
    document.body.appendChild(el);
  }

  // -- The ad click id ------------------------------------------------------
  // An ad lands here with ?gclid=… (or gbraid/wbraid from iOS), but the sale
  // happens on api.bubbletranslate.app, a different origin that cannot read
  // this one's storage. So the id is added to the buy link on the way out; the
  // buy page hands it to Paddle, and the paid webhook reports it to Google.
  // Kept across pages in sessionStorage -- this tab only, gone when it closes
  // -- and only with consent: without it, the id still rides along from the
  // page it arrived on, but nothing is stored.
  function clickIdsInUrl() {
    var p = new URLSearchParams(location.search), out = {};
    CLICK_IDS.forEach(function (k) { if (p.get(k)) out[k] = p.get(k); });
    return out;
  }

  function keepClickIds() {
    var ids = clickIdsInUrl();
    if (!Object.keys(ids).length) return;
    try { sessionStorage.setItem('bt-click', JSON.stringify(ids)); } catch (e) {}
  }

  function clickIds() {
    var ids = clickIdsInUrl();
    if (Object.keys(ids).length) return ids;
    try { return JSON.parse(sessionStorage.getItem('bt-click') || '{}'); } catch (e) { return {}; }
  }

  if (stored() === 'granted') keepClickIds();

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;

    if (/^https:\/\/api\.bubbletranslate\.app\/buy/.test(a.href)) {
      var ids = clickIds();
      if (!Object.keys(ids).length) return;
      var url = new URL(a.href);
      Object.keys(ids).forEach(function (k) { url.searchParams.set(k, ids[k]); });
      a.href = url.toString();
      return;
    }

    // A download is a click on the file itself, wherever the button is. Under
    // denied consent gtag sends a cookieless ping; nothing is stored.
    if (/^https:\/\/github\.com\/pelamx\/downloads\//.test(a.href) && typeof gtag === 'function') {
      gtag('event', 'conversion', { send_to: DOWNLOAD });
    }
  });

  var choice = stored();
  if (choice !== 'granted' && choice !== 'denied') show();

  // Any element with data-consent-open reopens the banner (footer link).
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-consent-open]');
    if (!a) return;
    e.preventDefault();
    show();
  });
})();
