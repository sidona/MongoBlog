/**
 * Created by sidona on 7/27/2015.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var _=require('underscore');
    var app = require('app');
    var NewArticleLayout = require('../views/layout');

    var NewArticleController = Marionette.Controller.extend({
        showNewArticle: function() {
            app.showLayout(new NewArticleLayout);
        }
    });

    module.exports = new NewArticleController();
});