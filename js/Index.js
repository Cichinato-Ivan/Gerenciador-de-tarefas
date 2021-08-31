var fields = document.querySelectorAll("#form-accounts-create [name]");

var user = {};

document.getElementById("form-accounts-create").addEventListener("submit", function(event){

    event.preventDefault();

    fields.forEach(function(field, index) {

        user[field.name] = field.value;
    
    });
    
    console.log(user);

});
