define('shorturl/router', ['exports', 'ember', 'shorturl/config/environment'], function (exports, _ember, _shorturlConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _shorturlConfigEnvironment['default'].locationType,
    rootURL: _shorturlConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('urls');
  });

  exports['default'] = Router;
});