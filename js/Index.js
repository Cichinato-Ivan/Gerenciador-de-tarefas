var name = document.querySelector("#form-name");
var price = document.querySelector("#form-price");
var portion = document.querySelector("#form-portion");
var description = document.querySelector("#form-description");


var fields = document.querySelector("#form-accounts-create [name]");

fields.forEach(function(field, index) {
    console.log(field.name);
});