// Get references to the two select lists and their corresponding add buttons
const form = document.querySelector("#myForm");
const nameInput = document.querySelector("#taskNames");
const dateInput = document.querySelector("#date");
const selectList1 = document.getElementById("categoryList");
const addButton1 = document.getElementById("addValue1");
const selectList2 = document.getElementById("priorityList");
const addButton2 = document.getElementById("addValue2");
const selectList3 = document.getElementById("statusList");
const addButton3 = document.getElementById("addValue3");
const descriptionInput = document.querySelector("#description");
const resultColumn = document.getElementById("output");
const outputDiv9 = document.querySelector("#output9");
const submit = document.querySelector("#submit");
const img = document.getElementById("relaxImg");

// Get references to the two form input fields and their corresponding modals
const inputField1 = document.getElementById("valueInput1");
const modal1 = new bootstrap.Modal(document.getElementById("myModal1"));
const inputField2 = document.getElementById("valueInput2");
const modal2 = new bootstrap.Modal(document.getElementById("myModal2"));
const inputField3 = document.getElementById("valueInput3");
const modal3 = new bootstrap.Modal(document.getElementById("myModal3"));

// Get the saved options from the local storage, if any, for each select list
const savedOptions1 = localStorage.getItem("selectList1Options");
const savedOptions2 = localStorage.getItem("selectList2Options");
const savedOptions3 = localStorage.getItem("selectList3Options");

// If saved options are found, parse them into an array and add them to the corresponding select list
if (savedOptions1) {
  const optionsArray = JSON.parse(savedOptions1);
  optionsArray.forEach(function (option) {
    const newOption = document.createElement("option");
    newOption.text = option;
    selectList1.add(newOption);
  });
}

if (savedOptions2) {
  const optionsArray = JSON.parse(savedOptions2);
  optionsArray.forEach(function (option) {
    const newOption = document.createElement("option");
    newOption.text = option;
    selectList2.add(newOption);
  });
}
if (savedOptions3) {
  const optionsArray = JSON.parse(savedOptions3);
  optionsArray.forEach(function (option) {
    const newOption = document.createElement("option");
    newOption.text = option;
    selectList3.add(newOption);
  });
}

// Add an event listener to the first add button
addButton1.addEventListener("click", function () {
  // Get the new value from the input field
  const newValue = inputField1.value;

  // Create a new option element with the new value and add it to the first select list
  const newOption = document.createElement("option");
  newOption.text = newValue;
  selectList1.add(newOption);

  // Clear the input field and hide the modal
  inputField1.value = "";
  modal1.hide();

  // Save the updated options to the local storage for the first select list
  const optionsArray = Array.from(selectList1.options).map(function (option) {
    return option.text;
  });
  localStorage.setItem("selectList1Options", JSON.stringify(optionsArray));
});

// Add an event listener to the second add button
addButton2.addEventListener("click", function () {
  // Get the new value from the input field
  const newValue = inputField2.value;

  // Create a new option element with the new value and add it to the second select list
  const newOption = document.createElement("option");
  newOption.text = newValue;
  selectList2.add(newOption);

  // Clear the input field and hide the modal
  inputField2.value = "";
  modal2.hide();

  // Save the updated options to the local storage for the second select list
  const optionsArray = Array.from(selectList2.options).map(function (option) {
    return option.text;
  });
  localStorage.setItem("selectList2Options", JSON.stringify(optionsArray));
});

// Add an event listener to the third add button
addButton3.addEventListener("click", function () {
  // Get the new value from the input field
  const newValue = inputField3.value;

  // Create a new option element with the new value and add it to the second select list
  const newOption = document.createElement("option");
  newOption.text = newValue;
  selectList3.add(newOption);

  // Clear the input field and hide the modal
  inputField3.value = "";
  modal3.hide();

  // Save the updated options to the local storage for the second select list
  const optionsArray = Array.from(selectList3.options).map(function (option) {
    return option.text;
  });
  localStorage.setItem("selectList3Options", JSON.stringify(optionsArray));
});
// *************************************************************************************************

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = new Date().getTime();
  const name = nameInput.value;
  const date = dateInput.value;
  const cat = selectList1.value;
  const priority = selectList2.value;
  const status = selectList3.value;
  const description = descriptionInput.value;



  const toDo = document.createElement("div");
  const nameP = document.createElement("p");
  const dateP = document.createElement("p");
  const catP = document.createElement("p");
  const priorityP = document.createElement("p");
  const statusP = document.createElement("p");
  const descriptionP = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  toDo.classList.add("row");
  nameP.classList.add("col-2");
  dateP.classList.add("col-1");
  catP.classList.add("col-1");
  priorityP.classList.add("col-1");
  statusP.classList.add("col-1");
  descriptionP.classList.add("col-3");
  deleteBtn.classList.add("col-1");
  editBtn.classList.add("col-1");

  nameP.textContent = `${name}`;
  dateP.textContent = `${date}`;
  catP.textContent = `${cat}`;
  priorityP.textContent = `${priority}`;
  statusP.textContent = `${status}`;
  descriptionP.textContent = `${description}`;
  deleteBtn.innerText = "Delete";
  editBtn.innerText = "Edit";
  dateP.style.fontSize = "10px";
  priorityP.style.textAlign = "center";
  editBtn.style.backgroundColor = "gray";
  editBtn.style.border = "1px solid";
  editBtn.style.marginBottom = "19px";
  editBtn.style.borderRadius = "19px";
  editBtn.style.width = "60px";
  editBtn.style.fontSize = "10px";
  deleteBtn.style.backgroundColor = "gray";
  deleteBtn.style.border = "1px solid";
  deleteBtn.style.marginRight = "5px";
  deleteBtn.style.marginBottom = "19px";
  deleteBtn.style.borderRadius = "19px";
  deleteBtn.style.width = "60px";
  deleteBtn.style.fontSize = "10px";

  deleteBtn.addEventListener("click", () => {
    // Remove from localStorage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const filteredTodos = todos.filter(
      (todo) =>
        todo.name !== name ||
        todo.date !== date ||
        todo.cat !== cat ||
        todo.priority !== priority ||
        todo.status !== status ||
        todo.description !== description||
        todo.id !== id

    );
    localStorage.setItem("todos", JSON.stringify(filteredTodos));

    // Remove from outputDiv9
    outputDiv9.removeChild(toDo);
    // location.reload();
    
  });

 

  toDo.appendChild(nameP);
  toDo.appendChild(dateP);
  toDo.appendChild(catP);
  toDo.appendChild(priorityP);
  toDo.appendChild(statusP);
  toDo.appendChild(descriptionP);
  toDo.appendChild(deleteBtn);
  toDo.appendChild(editBtn);
  outputDiv9.prepend(toDo);

  // Store in localStorage
  const todo = { name, date, cat, priority, status, description,id};
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  // Clear form inputs
  nameInput.value = "";
  dateInput.value = "";
  selectList1.value = "";
  selectList2.value = "";
  selectList3.value = "";
  descriptionInput.value = "";

  // if (resultColumn.style.display === "none") {
  //   resultColumn.style.display = "block";
  // }

  // Set background color based on priority
  if (priorityP.textContent === "High") {
    priorityP.style.background = "red";
  }
  if (priorityP.textContent === "Medium") {
    priorityP.style.background = "yellow";
    priorityP.style.color = "black";
  }
  if (priorityP.textContent === "Low") {
    priorityP.style.background = "green";
  }
  // if (localStorage.length < "0") {
  //   (img.style.display = "block"), (resultColumn.style.display = "none");
  // } else {
  //   (img.style.display = "none"), (resultColumn.style.display = "block");
  // }
});



// *************************************************************************************************

// When Refreshing or Loading the Page => Retrieve todos from local storage and display them
const todos = JSON.parse(localStorage.getItem("todos")) || [];
todos.forEach((todo) => {
  const toDo = document.createElement("div");
  const nameP = document.createElement("p");
  const dateP = document.createElement("p");
  const catP = document.createElement("p");
  const priorityP = document.createElement("p");
  const statusP = document.createElement("p");
  const descriptionP = document.createElement("p");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  toDo.classList.add("row");
  nameP.classList.add("col-2");
  dateP.classList.add("col-1");
  catP.classList.add("col-1");
  priorityP.classList.add("col-1");
  statusP.classList.add("col-1");
  descriptionP.classList.add("col-3");
  deleteBtn.classList.add("col-1");
  editBtn.classList.add("col-1");

  nameP.textContent = todo.name;
  dateP.textContent = todo.date;
  catP.textContent = todo.cat;
  priorityP.textContent = todo.priority;
  statusP.textContent = todo.status;
  descriptionP.textContent = todo.description;
  deleteBtn.innerText = "Delete";
  editBtn.innerText = "Edit";
  dateP.style.fontSize = "12px";
  priorityP.style.textAlign = "center";
  editBtn.style.backgroundColor = "gray";
  editBtn.style.border = "1px solid";
  editBtn.style.marginBottom = "19px";
  editBtn.style.borderRadius = "19px";
  editBtn.style.width = "60px";
  editBtn.style.fontSize = "10px";
  deleteBtn.style.backgroundColor = "gray";
  deleteBtn.style.border = "1px solid";
  deleteBtn.style.marginRight = "5px";
  deleteBtn.style.marginBottom = "19px";
  deleteBtn.style.borderRadius = "19px";
  deleteBtn.style.width = "60px";
  deleteBtn.style.fontSize = "10px";

  // Set background color based on priority
  if (priorityP.textContent === "High") {
    priorityP.style.background = "red";
  }
  if (priorityP.textContent === "Medium") {
    priorityP.style.background = "yellow";
    priorityP.style.color = "black";
  }
  if (priorityP.textContent === "Low") {
    priorityP.style.background = "green";
  }

  deleteBtn.addEventListener("click", () => {
    // Remove from localStorage
    const filteredTodos = todos.filter(
      (t) =>
        t.name !== todo.name ||
        t.date !== todo.date ||
        t.cat !== todo.cat ||
        t.priority !== todo.priority ||
        t.status !== todo.status ||
        t.description !== todo.description||
        t.id !== todo.id
    );
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    location.reload();
  });
  
  

  toDo.appendChild(nameP);
  toDo.appendChild(dateP);
  toDo.appendChild(catP);
  toDo.appendChild(priorityP);
  toDo.appendChild(statusP);
  toDo.appendChild(descriptionP);
  toDo.appendChild(deleteBtn);
  toDo.appendChild(editBtn);
  outputDiv9.prepend(toDo);
  if (localStorage.length < 0) {
    (img.style.display = "block"), (resultColumn.style.display = "none");
  } else {
    (img.style.display = "none"), (resultColumn.style.display = "block");
  }
});
