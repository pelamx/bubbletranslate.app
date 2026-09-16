// ============================================================
//  Consent banner for the Google tag (Consent Mode v2).
//  The <head> of every page sets all consent to "denied" before
//  gtag.js loads, and replays a stored "granted". This file only
//  asks the question and records the answer in localStorage
//  under `bt-consent` ("granted" | "denied").
//  Self-contained: the legal pages do not load script.js.
// ============================================================
(function () {
  var KEY = 'bt-consent';
  var TEXT = {
    en: { msg: 'We use Google Ads cookies to measure whether our ads work. They are off unless you allow them.',
          accept: 'Allow', reject: 'Decline', more: 'Privacy Policy' },
    tr: { msg: 'Reklamlarımızın işe yarayıp yaramadığını ölçmek için Google Ads çerezleri kullanıyoruz. İzin vermediğiniz sürece kapalıdır.',
          accept: 'İzin ver', reject: 'Reddet', more: 'Gizlilik Politikası' },
    es: { msg: 'Usamos cookies de Google Ads para medir si nuestros anuncios funcionan. Están desactivadas salvo que las permitas.',
          accept: 'Permitir', reject: 'Rechazar', more: 'Política de privacidad' }
  };

  function lang() {
    var l = null;
    try { l = localStorage.getItem('bt-lang'); } catch (e) {}
    l = l || (navigator.language || 'en').slice(0, 2).toLowerCase();
    return TEXT[l] ? l : 'en';
  }

  function set(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        ad_storage: value, ad_user_data: value,
        ad_personalization: value, analytics_storage: value
      });
    }
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

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (stored !== 'granted' && stored !== 'denied') show();

  // Any element with data-consent-open reopens the banner (footer link).
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-consent-open]');
    if (!a) return;
    e.preventDefault();
    show();
  });
})();
