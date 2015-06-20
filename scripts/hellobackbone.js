/**
 * Created by samiksha on 6/11/15.
 */

$(document).ready(function(){
    //alert("hello I am here");
    var AppView = Backbone.View.extend({
        el:'div',
        initialize:function() {
            //alert("I am initalized");
            this.render();
        },
        render:function(){
            //alert("hello");
            this.$el.html('<p>HELLO backbone practice has been started<p>');
            this.$el.html('<div style="width:50px;background:red"><p>Hello I am here</p><div>');



        }
    });


    var appView = new AppView();
    alert("done");
});

