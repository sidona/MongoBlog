/**
 * Created by sidona on 7/21/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Contact = require('./contact');

    module.exports = Backbone.Collection.extend({
        model: Contact,
        url: 'http://localhost:8080',
        pagination : function(perPage, page) {
            page = page-1;
            var collection = this;
            collection = _(collection.rest(perPage*page));
            collection = _(collection.first(perPage));
            return collection.map( function(model) { return model.toJSON() } );
        }


    });
});