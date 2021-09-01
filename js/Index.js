var fields = document.querySelectorAll("#form-accounts-create [name]");
var user = {};

function addLine(dataAccounts) {
  
    var ul = document.getElement("ul");
  
  ul.innerHTML = `
    
    <ul class="list-group-item rounded-3">
        <li>
            <div class="row mt-2">
                <div class="col-md-10">
                        <p>${dataAccounts.name}</p>
                        <p>${dataAccounts.price}</p>
                        <p>${dataAccounts.portion}</p>
                        <p>${dataAccounts.description}</p>
                </div>
                <div class="col-md-2">
                    <a href="">
                        <img src="./icons/info-square.svg" alt="" width="25px" height="25px">
                    </a>
                </div>
            </div>
        </li>
    </ul>
  `;

  document.getElementsById("list-accounts").appendChild("ul");
}

document.getElementById("form-accounts-create").addEventListener("submit", function(event){

    event.preventDefault();

    fields.forEach(function(field, index) {

        user[field.name] = field.value;
    
    });
    
    addLine(user);

});
