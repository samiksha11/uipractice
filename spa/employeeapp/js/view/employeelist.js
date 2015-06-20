window.EmployeeListView = Backbone.View.extend({

    tagName: 'ul',

    initialize: function () {
        alert("initializing the list");
        this.model.bind("reset", this.render, this);
        var self = this;
        this.model.bind("add", function (employee) {
            alert(employee);
            $(self.el).append(new EmployeeListItemView({model: employee}).render().el);
        });
    },

    render: function (eventName) {
        _.each(this.model.models, function (employee) {
            alert("initializing the list" + employee);
            console.log(employee);
            $(this.el).append(new EmployeeListItemView({model: employee}).render().el);
        }, this);
        return this;
    }
});

window.EmployeeListItemView = Backbone.View.extend({

    tagName: "li",

    template: _.template($('#tpl-employee-list-item').html()),

    initialize: function () {
        alert("initializing the list item");
        this.template = _.template(tpl.get('employee-list-item'));
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function (eventName) {
        alert("rendering the list item");
        console.log("result json:" + this.model.toJSON());
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    close: function () {
        $(this.el).unbind();
        $(this.el).remove();
    }

});