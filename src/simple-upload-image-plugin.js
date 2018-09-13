
import SimpleUploadImageAdapter from './simple-upload-image-adapter';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';

export default class SimpleUploadImagePlugin extends Plugin {

    static get requires() {
        return [FileRepository];
    }

    static get pluginName() {
        return 'SimpleUploadImage';
    }

    init() {
        this.editor.plugins.get('FileRepository').createUploadAdapter = loader => new SimpleUploadImageAdapter(loader, this.editor.config);
    }
}
