define(function(require, exports, module) {
    var Marionette = require('marionette');
    var app = require('app');
    var MapLayout = require('../views/layout');
    var _=require('underscore');

    var Articles = require('modules/contacts/models/contacts');

    var MapRouteController = Marionette.Controller.extend({

        showEdit: function(id) {

            var articles = new Articles();
            articles.fetch().then(function(options) {
                //debugger;
                var model = _.findWhere(options, {'id': id})
                app.showLayout(new MapLayout({
                    model: new Backbone.Model(model)
                }));
            })
        }
    });

    module.exports = new MapRouteController();
});