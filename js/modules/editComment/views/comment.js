define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');

    module.exports = Marionette.ItemView.extend({
        id: 'infoComment',
        className: 'li',
        template: '#edit-comment',



      showComments:function() {

          Backbone.history.navigate('#com/' + this.model.id, {trigger: true})
      },

      events:{

          'click .editContact': 'showComments'
      }


    });
});