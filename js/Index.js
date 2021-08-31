var fields = document.querySelectorAll("#form-accounts-create [name]");

var user = {};

fields.forEach(function(field, index) {

    user[field.name] = field.value;

});