
export default class SimpleUploadImageAdapter {
    constructor(loader, config) {
        this.loader = loader;
        this.config = config;
    }

    upload() {
        const uploadHook = this.config.get('onImageUpload');
        return uploadHook(this.loader.file).then(url => ({ default: url }));
    }

    abort() {
        // Reject promise returned from upload() method.
        server.abortUpload();
    }
}
