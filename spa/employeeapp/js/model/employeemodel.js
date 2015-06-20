// Models
window.Employee = Backbone.Model.extend({
    //urlRoot: "http://localhost:8080/SystemInfo/rest/employeedetail",
    localStorage: new Store("backbone-todo"),
    defaults: {
        "empid": null,
        "firstName": "",
        "lastName": "",
        "emailId": "",
        "dob": "",
        "doj": "",
        "phoneNum": ""
    }
});

window.EmployeeCollection = Backbone.Collection.extend({
    model: Employee,
    //url: "http://localhost:8080/SystemInfo/rest/employeedetail",
    localStorage: new Store("backbone-todo")
});
