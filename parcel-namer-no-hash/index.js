const {Namer} = require('@parcel/plugin');
const path = require('path');

const HASHED_TYPES = new Set(['js', 'css', 'html']);

module.exports = new Namer({
    name({bundle}) {
        if (!HASHED_TYPES.has(bundle.type)) {
            const entry = bundle.getMainEntry();
            if (entry) {
                return path.basename(entry.filePath);
            }
        }
        return null;
    }
});
