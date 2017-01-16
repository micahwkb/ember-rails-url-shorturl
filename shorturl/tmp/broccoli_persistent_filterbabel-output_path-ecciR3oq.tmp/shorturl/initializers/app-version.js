define('shorturl/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'shorturl/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _shorturlConfigEnvironment) {
  var _config$APP = _shorturlConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});