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

// ---- OS detection + platform-aware download routing ----
// One place that maps an OS to its download. Add the Windows file here when
// it's ready and the whole site starts offering it automatically.
const DOWNLOADS = {
  mac:     { file: 'downloads/bubbleTranslate-macos.dmg',      label: 'macOS' },
  linux:   { file: 'downloads/bubbleTranslate-linux-x86_64',   label: 'Linux' },
  windows: { file: null,                                       label: 'Windows' } // null = coming soon
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
function wirePlatformButton(btn, macLinuxLabel) {
  if (!btn) return;
  const info = DOWNLOADS[os];
  if (info && info.file) {
    btn.setAttribute('href', info.file);
    btn.setAttribute('download', '');
    if (macLinuxLabel) btn.textContent = macLinuxLabel + ' for ' + info.label;
  } else if (os === 'windows') {
    btn.setAttribute('href', '#download');
    btn.addEventListener('click', flashWindowsSoon);
    if (macLinuxLabel) btn.textContent = 'Windows — coming soon';
  }
  // unknown: untouched; the download section lets them pick manually.
}

function flashWindowsSoon() {
  const card = document.querySelector('.dl-card[data-os="windows"]');
  if (!card) return;
  card.classList.add('flash');
  setTimeout(() => card.classList.remove('flash'), 1600);
}

// Hero "Download free" and the Pro CTA both route to the correct executable.
wirePlatformButton(document.getElementById('heroDownload'), '↓ Download');
wirePlatformButton(document.getElementById('proBuy'), null); // keep "Upgrade to Pro" label

// Highlight the download card that matches this visitor's OS.
const match = document.querySelector('.dl-card[data-os="' + os + '"]');
if (match) {
  match.classList.add('detected');
  const tag = document.createElement('span');
  tag.className = 'detected-tag';
  tag.textContent = 'Your system';
  match.insertBefore(tag, match.firstChild);
}
