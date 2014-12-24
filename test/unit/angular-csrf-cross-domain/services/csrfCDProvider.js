'use strict';

describe('Service: csrfCD', function() {

    // load the service's module
    beforeEach(module('csrf-cross-domain'));

    // instantiate service
    var csrfCD;
    beforeEach(inject(function(_csrfCD_) {
        csrfCD = _csrfCD_;
    }));

    it('should match api specs', function() {
        expect(csrfCD.request).toBeDefined();
    });

    describe('Setting CSRF headers for methods', function() {

        var config = {};

        beforeEach(function() {
            config = {
                headers: {}
            };
        });

        it('should not set for OPTIONS', function() {
            config.method = 'OPTIONS';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(false);
        });

        it('should set for GET', function() {
            config.method = 'GET';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(true);
        });

        it('should set for POST', function() {
            config.method = 'POST';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(true);
        });

        it('should set for PUT', function() {
            config.method = 'PUT';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(true);
        });

        it('should set for PATCH', function() {
            config.method = 'PATCH';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(true);
        });

        it('should set for DELETE', function() {
            config.method = 'DELETE';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(true);
        });

    });

});
