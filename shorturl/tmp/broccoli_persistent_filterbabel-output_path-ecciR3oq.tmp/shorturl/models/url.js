define('shorturl/models/url', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    url: _emberData['default'].attr('string'),
    short: _emberData['default'].attr('string')
  });
});