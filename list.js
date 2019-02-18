
let ul = document.getElementById('list');
let submitBtn = document.getElementById('submit');

// submit button calling addItem function
submitBtn.onclick = () => {
  addItem(ul);
};

// function to add item in list
function addItem(newItem){
  let input  = document.getElementById(`todoInput`).value;
  let text = document.createTextNode(input + ' ');
  let li = document.createElement("li");
  let doneBtn = document.createElement('button');
  document.getElementById('todoInput').value= '';

// show alert if input is empty
  if(input.length === 0) {
    alert("input box is empty..");
    return false;
  }

  doneBtn.className = 'done';
  doneBtn.innerHTML = "DONE";
  doneBtn.setAttribute("onclick", "done(this);");


  li.appendChild(text);
  li.appendChild(doneBtn);
  document.getElementById("todoList").appendChild(text);
  document.getElementById("todoList").appendChild(doneBtn);
}

// to check the item
function done(item) {
  let doneItem = document.getElementById('todoList');
  doneItem.style.textDecoration = "line-through";
}
