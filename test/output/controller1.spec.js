describe('Constant: MyConstant', function () {

	var MyConstant;

	beforeEach(function () {
		// Load the constant's module
		module('app');

		// Inject in angular constructs otherwise,
		//	you would need to inject these into each test
		inject(function (_MyConstant_) {
			MyConstant = _MyConstant_;
		});
	});

});