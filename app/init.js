/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'app',
    paths: {
        
        jquery: '../lib/jquery',
        underscore : '../lib/underscore',
        backbone : '../lib/backbone',
        text: '../lib/text',
        marionette : '../lib/backbone.marionette',
        //        BaseView : 'util/baseview',
        Util : 'util/Util',
        mobified: '../lib/mobified',
        handlebars: '../lib/handlebars'
    },
    shim : {
        jquery : {
            exports : '$'
        },
        backbone : {
            deps : ['jquery','underscore'],
            exports : 'Backbone'
        },
        underscore : {
            deps : ['jquery'],
            exports : '_'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        marionette : {
            deps : ["jquery","backbone"],
            exports : "Marionette"
        }
    }
});


//Start the main app logic.
require(['app'], function(App){
    
    console.log('starting app')
    App.start();
});

