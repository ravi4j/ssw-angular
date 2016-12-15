/**
 * Created by ravisharma on 10/25/2016.
 */

describe("Unit: Testing Services", function() {
    describe("Testing dbService:", function() {
        var _dbService = null;

        beforeEach(function() {
            module('myApp.dbServices');
        });

        beforeEach(inject(function (dbService , $httpBackend) {
            _dbService = dbService;
        }));

        it('dbService is defined', function() {
            expect(_dbService).toBeDefined();
        });

        it('Test connectUrl method', function() {
            expect(_dbService.getUsers()).toEqual('Get User using http to express connected to mongodb');
        });

    });
});