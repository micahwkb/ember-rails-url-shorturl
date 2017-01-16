define('shorturl/tests/helpers/start-app', ['exports', 'ember', 'shorturl/app', 'shorturl/config/environment'], function (exports, _ember, _shorturlApp, _shorturlConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _shorturlConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _shorturlApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});