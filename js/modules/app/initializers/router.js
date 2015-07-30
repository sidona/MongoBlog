define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var ContactsRouter=require('modules/contacts/router');
    var BlogRouter=require('modules/blog/router');
    var EditRouter=require('modules/edit/router');
    //var EditCommentRouter=require('modules/editComment/router');
    var EditCommentNewRouter=require('modules/editCommentNew/router');
    //var EditLogin=require('modules/login/router');
    var NewArticle=require('modules/newArticle/router');


    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new ContactsRouter();
                new BlogRouter();
                new EditRouter();
               // new EditCommentRouter();
                new EditCommentNewRouter();
                //new EditLogin();
                new NewArticle();
            });
        }
    });

    module.exports = new RouterInitializer();
});
