define('shorturl/helpers/app-version', ['exports', 'ember', 'shorturl/config/environment'], function (exports, _ember, _shorturlConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _shorturlConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});