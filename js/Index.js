var fields = document.querySelectorAll("#form-accounts-create [name]");
var accounts = {};

function addLine(dataAccounts) {
  
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

    fields.forEach(function(field, index) {

        accounts[field.name] = field.value;
    
    });
    
    addLine(accounts);

});
