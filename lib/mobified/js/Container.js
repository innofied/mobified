define(['marionette', 
    "backbone", 
    "jquery", 
    'handlebars',
    'text!mobified/templates/container.html'],
    function( Marionette, 
        Backbone,
        $, 
        Handlebars,
        containerTpl) {
        'use strict';
       
        return  Backbone.View.extend({
            containerTpl:  Handlebars.compile(containerTpl),
            
            initialize: function(options) {
                this.options = options;
               
            },
            
            onShow: function(){
                if(this.options.fullScreen){
                    this.$el.parent().addClass('fullscreen');
                }
            }, 
            
            render: function(){
                this.$el.html(this.containerTpl({}));
            }
        });
    });
    