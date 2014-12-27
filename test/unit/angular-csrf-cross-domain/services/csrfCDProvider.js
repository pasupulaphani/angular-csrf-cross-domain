'use strict';

describe('api specs', function() {

    var csrfCDProvider;

    // load the service's module
    beforeEach(function() {
        // Initialize the service provider by injecting it to a fake module's config block
        angular.module('testApp', function() {})
            .config(function(_csrfCDProvider_) {
                csrfCDProvider = _csrfCDProvider_;
            });
        // Initialize myApp injector
        module('csrf-cross-domain', 'testApp');

        // Kickstart the injectors previously registered with calls to angular.mock.module
        inject(function() {});
    });

    describe("csrfCDProvider", function() {

        it('should match provider api specs', function() {
            expect(csrfCDProvider.setHeaderName).toBeDefined();
            expect(csrfCDProvider.setCookieName).toBeDefined();
            expect(csrfCDProvider.setAllowedMethods).toBeDefined();
        });
    });

    // instantiate service
    var csrfCD;
    beforeEach(inject(function(_csrfCD_) {
        csrfCD = _csrfCD_;
    }));

    it('should match service api specs', function() {
        expect(csrfCD.request).toBeDefined();
    });

    describe('Setting CSRF headers for default methods', function() {

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
