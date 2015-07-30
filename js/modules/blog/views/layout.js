/**
 * Created by sidona on 7/22/2015.
 */
define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var Region1=require('./reg1');


    module.exports=Marionette.Layout.extend({

        id: 'blog',
        template :'#blog-layout',

        regions:{
            reg1:'#reg1'

        },
        onRender:function(){
            this.reg1.show(new Region1());

        }


    });

});
