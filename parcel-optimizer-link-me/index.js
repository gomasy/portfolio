const {Optimizer} = require('@parcel/plugin');
const {blobToString} = require('@parcel/utils');

module.exports = new Optimizer({
    async optimize({bundle, contents}) {
        if (bundle.type !== 'html') {
            return {contents};
        }
        let html = await blobToString(contents);
        html = html.replace(
            /<meta name="parcel-link-me" content="([^"]+)">/g,
            '<link rel="me" href="$1">'
        );
        return {contents: html};
    }
});
