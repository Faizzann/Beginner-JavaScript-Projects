var numberOfItems = 0;

document.querySelector(".create-btn").addEventListener("click", function(){
    numberOfItems++;
    var text = document.querySelector(".create-input").value;
    var listItem = document.createElement("div");
    var itemText = document.createElement("div");
    var itemDelete = document.createElement("i");

    listItem.setAttribute('class', 'list-item item-'+numberOfItems);
    itemText.setAttribute('class', 'item-text');
    itemDelete.setAttribute('class', 'fas fa-trash item-delete');
    itemDelete.setAttribute('onclick', 'deleteItem('+numberOfItems+')');

    itemText.innerText = text;

    document.querySelector(".list-container").appendChild(listItem);
    document.querySelector(".item-"+numberOfItems).appendChild(itemText);
    document.querySelector(".item-"+numberOfItems).appendChild(itemDelete);

    
})

function deleteItem(item){
    document.querySelector(".item-"+item).remove();
}
