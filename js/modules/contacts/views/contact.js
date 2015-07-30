define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var moment = require('moment');

    module.exports = Marionette.ItemView.extend({
        id: 'infoTpl',
        className: 'li',
        template: '#contacts-contact',
        events: {
            'click .editContact': 'editContact',
            'click .editComment': 'editComment',
            'click .newarticle': 'newarticle'

        },

        templateHelpers: {
           createdAt: function() {
               return moment(this.model.date).format('MMMM Do YYYY, h:mm:ss a');
           }
        },

        editContact: function() {
            Backbone.history.navigate('#edit/' + this.model.id, {trigger: true})
        },
        editComment: function() {
            Backbone.history.navigate('#editComment/' + this.model.id, {trigger: true})
        },
        newarticle: function() {
            Backbone.history.navigate('#newarticle' , {trigger: true})
        }

    });
});