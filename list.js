// function addItem() {
//   let item = document.getElementById('inputBox');
//   let submitBtn = document.getElementById('addBtn');
//   let list = document.getElementById('list');
//
//   submitBtn.addEventListener(click, addItem);
//
//   if(item.value == ""){
//     alert("Enter item");
//   }
//   else {
//
//   }
// }

function addItem(){
  let element = document.getElementById(`todoInput`).value;
  let text = document.createTextNode(element);
  let newElement = document.createElement("li");
  newElement.appendChild(text);
  document.getElementById("todoList").appendChild(newElement);
}
