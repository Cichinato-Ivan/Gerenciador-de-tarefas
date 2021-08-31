var name = document.querySelector("#inputName");
var price = document.querySelector("#inputPrice");
var portion = document.querySelector("#inputPortion");
var description = document.querySelector("#inputDescription");


var fields = document.querySelectorAll("#form-accounts-create [name]");

fields.forEach(function(field, index) {
    console.log(field);
});