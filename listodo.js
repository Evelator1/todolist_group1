let todoItem = {
  title: "",
  dueDate: "",
  category: "",
  priority: "",
  status: "",

  //   delete: "",
};

// Get the values from the form fields
let title = document.getElementById("title").value;
let dueDate = document.getElementById("due-date").value;
let category = document.getElementById("categoryList").value;
let priority = document.getElementById("priorityList").value;
let status = document.getElementById("statusList").value;
// let delete = document.getElementById("delete").value;

// Create a new to-do item
let newItem = Object.create(todoItem);
newItem.title = title;
newItem.dueDate = dueDate;
newItem.category = category;
newItem.priority = priority;
newItem.status = status;
