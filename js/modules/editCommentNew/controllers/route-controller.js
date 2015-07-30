/**
 * Created by sidona on 7/26/2015.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var _=require('underscore');
    var app = require('app');
    var MapLayout = require('../views/layout');
    var Contacts=require('../models/contacts');

    var MapRouteController = Marionette.Controller.extend({
        showEditCommentNew: function(id) {


            var contacts = new Contacts();
            contacts.fetch().then(function (options) {
                debugger;
                var editModel = _.findWhere(options, {'id': (id)})
                app.showLayout(new MapLayout({
                    model: new Backbone.Model(editModel)
                }));
            })
        }
    });

    module.exports = new MapRouteController();
});