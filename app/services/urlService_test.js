describe("Unit: Testing Services", function() {
    describe("Testing UrlService:", function() {
        var _urlService = null;

        beforeEach(function() {
            module('myApp.services');
        });

        beforeEach(inject(function (urlService) {
            _urlService = urlService;
        }));

        it('urlService is defined', function() {
            expect(_urlService).toBeDefined();
        });

        it('Test makeUrl method', function() {
            _urlService.setBaseUrl('http://localhost');
            _urlService.setContext('ssw');
            _urlService.setResource('view');
            expect(_urlService.makeUrl()).toEqual('http://localhost/ssw/view');
        });

    });
});