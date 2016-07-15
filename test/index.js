var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

var pkg = require('../package.json');

describe('gitbook-plugin-snippet', function () {

  it('should process snippets', function () {
    return tester.builder()
      .withContent('This has a SAMPLE_SNIPPET.')
      .withLocalPlugin(path.join(__dirname, '..'))
      .withBookJson({
        gitbook: pkg.engines.gitbook,
        "plugins": ["snippets"],
        "pluginsConfig": {
          "snippets": {
            "file": path.join(__dirname, './snippets.properties')
          }
        }
      })
      .create()
      .then(function (result) {
        assert.equal(result[0].content, '<p>This has a snippet.</p>');
      });
  });

  it('should fail gracefully', function () {
    return tester.builder()
      .withContent('This has a SAMPLE_SNIPPET.')
      .withLocalPlugin(path.join(__dirname, '..'))
      .withBookJson({
        gitbook: pkg.engines.gitbook,
        "plugins": ["snippets"],
        "pluginsConfig": {
          "snippets": {
            "file": path.join(__dirname, './not-a-file.properties')
          }
        }
      })
      .create()
      .then(function (result) {
        assert.equal(result[0].content, '<p>This has a SAMPLE_SNIPPET.</p>');
      });
  });

});