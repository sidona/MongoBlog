define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'infoComment',
        className: 'li',
        template: '#edit-comment',



      editComments:function() {

          Backbone.history.navigate('#comments/' + this.model.id, {trigger: true})
      },

      events:{

          'click .editComments': 'editComments'
      }


    });
});