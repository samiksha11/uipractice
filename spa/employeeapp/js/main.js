Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

    initialize: function () {
        $('#header').html(new HeaderView().render().el);
    },

    routes: {
        "": "list",
        "employee/new": "newEmployee",
        "employee/:id": "employeeDetails"
    },

    list: function () {
        this.before();
    },

    employeeDetails: function (id) {
        this.before(function () {
            var employee = app.employeeList.get(id);
            app.showView('#content', new EmployeeView({model: emmployee}));
        });
    },

    newEmployee: function () {
        this.before(function () {
            alert("new employee function called");
            app.showView('#content', new EmployeeView({model: new Employee()}));
        });
    },

    showView: function (selector, view) {
        if (this.currentView)
            this.currentView.close();
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    },

    before: function (callback) {
        if (this.employeeList) {
            if (callback) callback();
        } else {
            this.employeeList = new EmployeeCollection();
            this.employeeList.fetch({
                success: function () {
                    alert("got the results");
                    $('#sidebar').html(new EmployeeListView({model: app.employeeList}).render().el);
                    if (callback) callback();
                }
            });
        }
    }

});

tpl.loadTemplates(['header', 'employee-details', 'employee-list-item'], function () {
    app = new AppRouter();
    Backbone.history.start();
});