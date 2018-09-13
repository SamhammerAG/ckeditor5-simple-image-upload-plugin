

# ckeditor5-simple-image-upload-plugin

[![npm version](https://badge.fury.io/js/%40samhammer%2Fckeditor5-simple-image-upload-plugin.svg)](https://www.npmjs.com/package/@samhammer/ckeditor5-simple-image-upload-plugin)

A generic ckeditor plugin to upload images with a custom api backend.

## Features

 - Simple UploadAdapter to upload files with a custom backend.

## How to use
To be able to use this plugin you need a custom build of ckeditor.

Further instructions can be found here:
https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html

Installation:

```bash
npm i @samhammer/ckeditor5-simple-image-upload-plugin
```

## Configuration

This plugin uses a hook which can be configured like shown below. This hook is called with the JS-File-Object as parameter and has to return a Promise which
resolves to the full URL of the uploaded image.

Example:

```js
InlineEditor
	.create( editorElement, {
		onImageUpload: file => {
            // do any upload stuff here with the JS-File-Object
            return Promise.resolve("http://path/to/the/uploaded/image.jpg");
        }
	} )
	.then( ... )
	.catch( ... );
```


## How to publish

For publishing an npm account that is referenced to the organization is required.

See the following how to:

https://docs.npmjs.com/getting-started/publishing-npm-packages

If everything is configured correctly just count up the version number in our package.json and execute one of the following commands:

```bash
npm publish --access public
```

## License

ckeditor5-simple-image-upload-plugin is released under the MIT License. See LICENSE file for details.
