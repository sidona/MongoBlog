/**
 * Created by sidona on 7/26/2015.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var _=require('underscore');
    var app = require('app');
    var MapLayout = require('../views/layout');
    var Comments=require('../models/comments');

    var MapRouteController = Marionette.Controller.extend({
        showEditComment: function(id) {


            var comments = new Comments();
            comments.fetch().then(function (options) {
                var editModel = _.findWhere(options, {'id': id});
                debugger;
                app.showLayout(new MapLayout({
                    model: new Backbone.Model(editModel)
                }));
            })
        }
    });

    module.exports = new MapRouteController();
});