define('shorturl/tests/helpers/resolver', ['exports', 'shorturl/resolver', 'shorturl/config/environment'], function (exports, _shorturlResolver, _shorturlConfigEnvironment) {

  var resolver = _shorturlResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _shorturlConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _shorturlConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});