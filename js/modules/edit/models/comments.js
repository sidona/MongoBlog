/**
 * Created by UserA on 7/21/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Comment = require('./comment');

    module.exports = Backbone.Collection.extend({

        url:"",
        model: Comment

    });
});