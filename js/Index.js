var fieldsAccounts = document.querySelectorAll("#form-accounts-create [name]");
var fieldsWage = document.querySelectorAll("#form-wage-create [name]");

var accounts = {};
var wage = {};

function addAccounts(dataAccounts) {
  
    document.getElementById("table-accounts").innerHTML = `
            
        <tr>
            <td>${dataAccounts.name}</td>
            <td>${dataAccounts.price}</td>
            <td>${dataAccounts.portion}</td>
            <td>${dataAccounts.description}</td>
            <td>
                <button type="button" class="btn btn-danger btn-flat">Excluir</button>
            </td>
        </tr>

    `;
  
    document.getElementById("table-accounts").appendChild(tr);

}

document.getElementById("form-accounts-create").addEventListener("submit", function(event){

    event.preventDefault();

    fieldsAccounts.forEach(function(field, index) {

        accounts[field.name] = field.value;
    
    });
    
    addAccounts(accounts);

});


function addWage (dataWage){

    document.getElementById("table-wage").innerHTML = `
    
        <tr>
            <td>${dataWage.icome}</td>
            <td>${dataWage.profit}</td>
        </tr>
    
    `;

    document.getElementById("table-wage").appendChild(tr);

};

document.getElementById("form-wage-create").addEventListener("submit", function(event){

    event.preventDefault();

    fieldsWage.forEach(function(field, index){

        wage[field.name] = field.value;

    });

    addWage(wage);

});
