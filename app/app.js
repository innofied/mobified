define(['marionette',
    "backbone",
    "jquery", 
    'mobified/js/Mobified'],
    function(Marionette,
        Backbone,
        $,
        Mobified) {
    
        var App = new Marionette.Application({
            views : {}
        });
        
        //        Marionette.Region.prototype.open = function(view){
        //            this.$el.hide();
        //            this.$el.html(view.el);
        //            this.$el.slideDown("fast");
        //        }
        
        App.addInitializer(function (options) {
            App.addRegions({
                containerRegion: '#home'
            //                containerRegion: {
            //                    selector: "#home",
            //                    regionType: Marionette.TransitionRegion
            //                }
            });
            
            var container = new Mobified.Container({
                fullScreen: true
            });
            App.containerRegion.show(container);
        });
        
        return App;
       
    });

