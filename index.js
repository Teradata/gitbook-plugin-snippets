"use strict";

var replace = require('replace');
var properties = require('properties');

var snippets;

module.exports = {
  hooks: {
    init: function() {
      // If there is an error, just swallow it
      properties.parse(this.config.get('pluginsConfig.snippets.file'), {path: true, include: true}, function(error, properties) {
        snippets = properties;
      });
    },
    page: function(page) {

      // If snippets were loaded, search and replace them
      if (snippets !== null) {
        for (var code in snippets) {
          page.content = page.content.replace(RegExp(code, 'gmi'), snippets[code], 'gmi');
        }
      }

      return page;
    }
  }
};
