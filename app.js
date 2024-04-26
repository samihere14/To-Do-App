function addTodo() {
    var input = document.getElementById('inputField');
    if (input.value === "") {
        alert("Please Enter an item for your list.");
    } else {
        var list = document.getElementById('list');
        var liElement = document.createElement('li');
        liElement.textContent = input.value;

        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'libtn';
        editBtn.onclick = function() { editListItem(this); };
        liElement.appendChild(editBtn);

        var delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'libtn';
        delBtn.onclick = function() { deleteListItem(this); };
        liElement.appendChild(delBtn);

        list.appendChild(liElement);
    }
    input.value = "";
}

function deleteListItem(button) {
    var listItem = button.parentNode;
    listItem.remove();
}

function editListItem(button) {
    var listItem = button.parentNode;
    var currentText = listItem.firstChild.textContent;
    var newText = prompt("Enter the new value", currentText);
    if (newText) {
        listItem.firstChild.textContent = newText;
    } else {
        alert("Please fill in the list item.");
    }
}

function deleteAll() {
    var list = document.getElementById('list');
    list.innerHTML = "";
}
