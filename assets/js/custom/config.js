require.config({
	paths: {
		'jquery': '../vendor/jquery',
		'bootstrap': '../vendor/bootstrap',
		'd3': '../vendor/d3.min',
		'ryb': '../vendor/ryb-color-mixer',
	},
	shim: {
		'jquery': {
			exports: '$',
		}
	}
});

require(['main']);