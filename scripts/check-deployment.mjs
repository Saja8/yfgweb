import assert from 'node:assert/strict';

const base = new URL(process.env.DEPLOYMENT_URL || '');
assert.equal(base.protocol, 'https:', 'Use an HTTPS deployment URL');
assert.match(base.hostname, /^yfgweb(?:-[a-z0-9-]+)?\.vercel\.app$/, 'Only YFG Vercel deployments are supported');
assert.ok(!base.username && !base.password && !base.port, 'Do not include credentials or a custom port');

for (const route of ['/', '/yfg', '/hmds', '/schools', '/meetings']) {
  const response = await fetch(new URL(route, base), {
    redirect: 'error',
    signal: AbortSignal.timeout(30000),
  });
  assert.equal(response.status, 200, `${route}: expected HTTP 200`);
  assert.match(response.headers.get('content-type') || '', /text\/html/, `${route}: expected HTML`);
  const html = await response.text();
  assert.match(html, /<title>[^<]+<\/title>/i, `${route}: missing page title`);
  assert.ok(html.length > 1000, `${route}: unexpectedly empty page`);
  console.log(`${route}: HTTP 200, HTML title and content present`);
}
