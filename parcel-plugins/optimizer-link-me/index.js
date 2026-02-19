const {Optimizer} = require('@parcel/plugin');
const {blobToString} = require('@parcel/utils');

module.exports = new Optimizer({
    async optimize({bundle, contents}) {
        if (bundle.type !== 'html') {
            return {contents};
        }
        let html = await blobToString(contents);
        html = html.replace(
            /<meta name="link-me" content="([^"]+)">/g,
            '<link rel="me" href="$1">'
        );
        html = html.replace(/[\uE000-\uF8FF]/g, (char) => `&#x${char.codePointAt(0).toString(16)};`);
        return {contents: html};
    }
});
