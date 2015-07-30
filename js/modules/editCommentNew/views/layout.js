/**
 * Created by sidona on 7/26/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    //var InfoComment = require('./infoComment');

    module.exports = Marionette.ItemView.extend({
        id: 'editCommentNew',
        template: '#editCommentNew-layout',
        events: {
            "click .save": "saveComment"
        },

        saveComment: function(event) {
            event.preventDefault();
            var text = document.getElementById("comments").value;
            var articleId = this.options.model.attributes['id'];

            $.ajax({
                url : "http://localhost:8080/" + articleId + "/comments",
                type: "POST",
                data: JSON.stringify(
                    {
                        "comment": text
                    }
                ),
                contentType: "application/json",//; charset=utf-8",
                dataType   : "json",
                success    : function(){
                    console.log("Pure jQuery Pure JS object");
                }
            });
        }
    });
});