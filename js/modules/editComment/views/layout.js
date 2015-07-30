/**
 * Created by sidona on 7/26/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var InfoComment = require('./infoComment');
    var Comments = require('../models/comments');

    module.exports = Marionette.ItemView.extend({
        id: 'editComment',
        template: '#editComment-layout',
        events: {
            'click .editCommentNew': 'editCommentNew'
        },
        regions: {
            infoComment: '#infoComment'
        },

        onRender: function() {
            var self = this;
            var commentsData = new Comments();
            this.infoComment.show(new InfoComment({
                collection: new Backbone.Collection(thi.model.get('comments'))
            }));

        },

    editCommentNew: function() {
        Backbone.history.navigate('#editCommentNew/' + this.model.id, {trigger: true})
    }


    });



});