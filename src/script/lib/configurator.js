const configurator = (function() {
	this.displayedCanvas = null;

	const canvas = (function() {
		const setup = function(canvasClass) {
			this.canvas = document.querySelector(`.${canvasClass}`);
			console.info(canvas);
		};
		const updateCanvas = function(selectedTabClass) {
			console.info('updated');
		};

		return {
			setup: setup,
			updateCanvas: updateCanvas
		};
	})();
})();
