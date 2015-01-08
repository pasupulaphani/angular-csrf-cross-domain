[![Build Status](https://secure.travis-ci.org/pasupulaphani/angular-csrf-cross-domain.png?branch=master)](http://travis-ci.org/pasupulaphani/angular-csrf-cross-domain) [![Bower version](https://badge.fury.io/bo/angular-csrf-cross-domain.svg)](http://badge.fury.io/bo/angular-csrf-cross-domain) [![Hex.pm](http://img.shields.io/hexpm/l/plug.svg)]() [![Code Climate](https://codeclimate.com/github/pasupulaphani/angular-csrf-cross-domain/badges/gpa.svg)](https://codeclimate.com/github/pasupulaphani/angular-csrf-cross-domain) [![Test Coverage](https://codeclimate.com/github/pasupulaphani/angular-csrf-cross-domain/badges/coverage.svg)](https://codeclimate.com/github/pasupulaphani/angular-csrf-cross-domain)

angular-csrf-cross-domain
============
> Enable csrf/xsrf protection for cross domain requests in Angular

[$http docs](https://docs.angularjs.org/api/ng/service/$http) : 
Angular provides a mechanism to counter XSRF. When performing XHR requests, but will **not** be set for *cross-domain requests*.

You only need this library:
* For *cross domain requests* and enable angular csrf/xsrf protection.

Getting Started
-----
Install the library through bower.
```js
bower install angular-csrf-cross-domain
```
>Also available with the name ```angular-xsrf-cross-domain```

Add it to your app dependency
```js
angular.module('myModule',['csrf-cross-domain'])
```

That's it - you are done!

## Customization
The provider is fully customizable. Below are the methods given by provider.

**Default csrf component names**:
- HTTP default header name: ```X-XSRF-TOKEN```
- HTTP default cookie name: ```XSRF-TOKEN```
- HTTP default allowed methods: ```'GET', 'POST', 'PUT', 'PATCH', 'DELETE'```

**Django example:** (each framework has its own default csrf component naming convention)

```js
angular.config(function(csrfCDProvider) {

        // Django default name
        csrfCDProvider.setHeaderName('X-CSRFToken');
        csrfCDProvider.setCookieName('CSRFToken');

        // You can even configure HTTP methods to set csrf
        csrfCDProvider.setAllowedMethods(['GET', 'POST', 'HEAD']);

    });
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Locations
- http://ngmodules.org/modules/angular-csrf-cross-domain
- http://bower.io/search/?q=angular-csrf-cross-domain
- http://bower.io/search/?q=angular-xsrf-cross-domain


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/pasupulaphani/angular-csrf-cross-domain/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

