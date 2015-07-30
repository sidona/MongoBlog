define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'home',
        template: '#home-layout',
        events: {

            'click .Login': 'Login'


        },
        Login: function() {
            Backbone.history.navigate('#login/' , {trigger: true})
        }
    });
});