/**
 * Created by sidona on 7/21/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Comment = require('./comment');

    module.exports = Backbone.Collection.extend({

        url:"http://localhost:8080",
        model: Comment // url: 'js/modules/api/contacts.json'

    });
});