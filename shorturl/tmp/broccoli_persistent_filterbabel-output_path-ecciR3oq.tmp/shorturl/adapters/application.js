define('shorturl/adapters/application', ['exports', 'ember', 'ember-data/adapters/json-api'], function (exports, _ember, _emberDataAdaptersJsonApi) {
  var _Ember$String = _ember['default'].String;
  var pluralize = _Ember$String.pluralize;
  var underscore = _Ember$String.underscore;
  exports['default'] = _emberDataAdaptersJsonApi['default'].extend({

    pathForType: function pathForType(type) {
      return pluralize(underscore(type));
    }

  });
});