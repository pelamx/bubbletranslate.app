// The site is static; this script exists only to send www.bubbletranslate.app
// to the bare domain with a permanent redirect. Without it both hosts answered
// 200 with the same pages, which search engines see as duplicate content and
// split the site's ranking between. Everything else goes straight to the
// static assets, 404 page included.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.bubbletranslate.app') {
      url.hostname = 'bubbletranslate.app';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
