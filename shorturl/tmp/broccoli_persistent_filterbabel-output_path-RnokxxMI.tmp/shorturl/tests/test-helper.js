define('shorturl/tests/test-helper', ['exports', 'shorturl/tests/helpers/resolver', 'ember-qunit'], function (exports, _shorturlTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_shorturlTestsHelpersResolver['default']);
});