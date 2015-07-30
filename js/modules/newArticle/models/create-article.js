define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Backbone.Model.extend({
        url: 'http://localhost:8080/newarticle',

        sync: function(method, model, options) {
            options = options || {};
            options.headers = {
                'X-User-Hash': this.get('hash')
            };

            return Backbone.sync.apply(this, arguments);
        }
    });
});