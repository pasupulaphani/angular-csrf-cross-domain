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

    describe("csrfCDProvider:", function() {

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


    describe("csrfCD:", function() {
        it('should match service api specs', function() {
            expect(csrfCD.request).toBeDefined();
        });
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


    describe('Setting CSRF header name', function() {

        var config = {};

        beforeEach(function() {

            csrfCDProvider.setHeaderName('X-XSRFToken');

            config = {
                headers: {}
            };
        });

        it('GET should have header', function() {
            config.method = 'GET';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRFToken')).toBe(true);
        });

    });

    describe('Setting CSRF cookie name', function() {

        var config = {};

        beforeEach(function() {

            csrfCDProvider.setCookieName('XSRFToken');

            config = {
                headers: {}
            };
        });

        it('should copy cookie token to header', function() {
            config.method = 'GET';

            // set the data to the cookie
            inject(function($cookies) {
                $cookies['XSRFToken'] = 'servertoken';
            });
            config = csrfCD.request(config);

            expect(config.headers['X-XSRF-TOKEN']).toEqual('servertoken');
        });

    });

    describe('Setting CSRF allowed method', function() {

        var config = {};

        beforeEach(function() {

            csrfCDProvider.setAllowedMethods(['GET', 'HEAD', 'POST']);

            config = {
                headers: {}
            };
        });

        it('should set for GET', function() {
            config.method = 'GET';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(true);
        });

        it('should set for HEAD', function() {
            config.method = 'HEAD';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(true);
        });

        it('should set for POST', function() {
            config.method = 'POST';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(true);
        });

        it('should not set for PATCH', function() {
            config.method = 'PATCH';
            config = csrfCD.request(config);
            expect(config.headers.hasOwnProperty('X-XSRF-TOKEN')).toBe(false);
        });

    });

});
