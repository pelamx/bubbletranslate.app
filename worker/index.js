// The site is static; this script exists only to send every other spelling
// of the address -- www.bubbletranslate.app, and plain http:// on either
// host -- to https://bubbletranslate.app with one permanent redirect.
// Without it each spelling answered 200 with the same pages, which search
// engines see as duplicate content and split the site's ranking between, and
// http:// served the pages unencrypted. Everything else goes straight to the
// static assets, 404 page included.
const HOST = 'bubbletranslate.app';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Named hosts only, so `wrangler dev` on localhost still serves locally.
    const www = url.hostname === 'www.' + HOST;
    if (www || (url.hostname === HOST && url.protocol !== 'https:')) {
      url.hostname = HOST;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
