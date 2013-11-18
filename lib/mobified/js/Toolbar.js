define(['marionette', 
    "backbone", 
    "jquery", 
    'handlebars',
    'text!mobified/templates/toolbar.html'],
    function( Marionette, 
        Backbone,
        $, 
        Handlebars,
        toolbarTpl) {
        'use strict';
       
        return  Backbone.View.extend({
            toolbarTpl: Handlebars.compile(toolbarTpl),
            
            initialize: function(options) {
                this.options = options;
            },
            
            render: function(){
                this.$el.html(this.toolbarTpl({}));
            }
        });
    });
    