// Get references to the two select lists and their corresponding add buttons
const selectList1 = document.getElementById("categoryList");
const addButton1 = document.getElementById("addValue1");
const selectList2 = document.getElementById("priorityList");
const addButton2 = document.getElementById("addValue2");
const selectList3 = document.getElementById("statusList");
const addButton3 = document.getElementById("addValue3");

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

// Add an event listener to the second add button
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

//********************************************************************************************* */

const tasks = document.querySelector(".dropdown-menu");
const tasksIframe = document.querySelector("#iframe");

tasks.addEventListener("change", function () {
  const selectedTask = tasks.value;
  tasksIframe.src = selectedTasks;
});

tasks.forEach(addTask)
myForm.onsubmit =e =>{
  e.preventDefault()
  const newtask = addTask(taskNm.value, selectedDt.value)
creatTastsElement(newTasks)
taskNm.value=""
selectedDt.value=""
}