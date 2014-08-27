require.config({
	paths: {
		'jquery': '../vendor/jquery',
		'bootstrap': '../vendor/bootstrap',
		'd3': '../vendor/d3.min',
	},
	shim: {
		'jquery': {
			exports: '$',
		}
	}
});

require(['main']);