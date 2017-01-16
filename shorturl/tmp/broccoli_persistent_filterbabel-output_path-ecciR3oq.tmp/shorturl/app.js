define('shorturl/app', ['exports', 'ember', 'shorturl/resolver', 'ember-load-initializers', 'shorturl/config/environment'], function (exports, _ember, _shorturlResolver, _emberLoadInitializers, _shorturlConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _shorturlConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _shorturlConfigEnvironment['default'].podModulePrefix,
    Resolver: _shorturlResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _shorturlConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});