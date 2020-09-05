export default class UploadAdapter {
	constructor(loader) {
		this.loader = loader;
	}

	upload() {
		return this.loader.file
			.then(file => {
				console.log(file);
			})
	}
}
