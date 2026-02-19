const fs = require('fs');
const htmlPath = 'public/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

html = html.replace(/<link([^>]*)>/g, (match, attrs) => {
    if (/\brel=["']?me["']?\b/.test(attrs)) {
        attrs = attrs.replace(/\bhref=["']?[^"' >]*["']?/, 'href="https://don.gomasy.jp/@gomasy"');
        return `<link${attrs}>`;
    }
    return match;
});

fs.writeFileSync(htmlPath, html);
