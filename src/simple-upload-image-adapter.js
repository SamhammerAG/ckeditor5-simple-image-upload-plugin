
export default class SimpleUploadImageAdapter {
    constructor(loader, config) {
        this.loader = loader;
        this.config = config;
    }

    upload() {
        const uploadHook = this.config.get('simpleImageUpload').onUpload;
        return this.loader.file.then(file => uploadHook(file).then(url => ({ default: url })));
    }

    abort() {
        const abortHook = this.config.get('simpleImageUpload').onAbort || (() => null);
        abortHook();
    }
}
