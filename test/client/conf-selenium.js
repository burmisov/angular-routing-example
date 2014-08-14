module.exports.config = {
	seleniumAddress: 'http://si-sdselenium:4444/wd/hub',
	specs: ['*.spec.js'],
	multiCapabilities: [
		{ browserName: 'chrome' },
		{ browserName: 'firefox' },
		{ browserName: 'ie' }
	]
};
