/**
 * Created by sidona on 7/22/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var reg1 = require('./reg1');

    module.exports = Marionette.ItemView.extend({
        id: 'reg1',
        template: '#blog-reg1'
    });
});
