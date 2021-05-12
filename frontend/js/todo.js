let addtodobutton = document.getElementById("addTodo");
let todoContainer = document.getElementById("todoContainer");
let inputField = document.getElementById("inputField");

addtodobutton.addEventListener('click', function() {
    var pragragh = document.createElement('p');
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    todoContainer.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph);
    })

})