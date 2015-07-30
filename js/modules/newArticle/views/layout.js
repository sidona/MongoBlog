/**
 * Created by sidona on 7/27/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var CreateArticle = require('../models/create-article');

    module.exports = Marionette.ItemView.extend({
        id: 'newarticle',
        template: '#newArticle-layout',

        events: {
            "click .save": "saveArticle"
        },

        saveArticle: function() {
            var article = new CreateArticle();
            article.set('title', this.$el.find('input').val());
            article.set('content', this.$el.find('input').val());
            article.set('author', this.$el.find('input').val());
            article.save().success(function () {
                debugger;
                Backbone.history.navigate('#contacts', {trigger:true});
            });
        }
    });
});