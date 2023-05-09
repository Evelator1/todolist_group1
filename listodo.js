// Create a new to-do item
// let newItem = Object.create(todoItem);
// newItem.title = title;
// newItem.dueDate = dueDate;
// newItem.category = category;
// newItem.priority = priority;
// newItem.status = status;

window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const taskName = document.querySelector("#taskNames");
  const categoryList = document.querySelector("#categoryList");
  const priorityList = document.querySelector("#priorityList");
  const statusList = document.querySelector("#statusList");
  //const taskDescription = document.querySelector("");

  const username = localStorage.getItem("username") || "";
  nameInput.value = username;

  taskName.addEventListener("change", (e) => {
    //the editor suggested not to set localStorage to username and instead e.target.value
    localStorage.setItem(e.target.value);
  });
  newToDoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = {
      taskName: e.target.elements.taskName.value,
      categoryList: e.target.elements.categoryList.value,
      priorityList: e.target.elements.priorityList.value,
      statusList: e.target.elements.statusList.value,
      done: false,
      createdAt: new Date().getTime(),
    };

    todos.push(todo);

    //converts an array to a string in order to store in the localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));

    //resets the fields and they are no longer filled out
    e.target.reset();

    DisplayTodos();
  });
  DisplayTodos();
});

function DisplayTodos() {
  const todoList = document.querySelector("#todo-items");

  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("content");
    const actions = document.createElement("actions");
    const edit = document.createElement("edit");
    const deleteButton = document.createElement("delete");

    //use different color icons  based on priority of the tasks
    input.type = "checkbox";
    input, (checked = todo.done);
    //span.classList.add('icons');

    if (todo.priority == "high") {
      span.classList.add("red");
    } else if (todo.medium == "medium") {
      span.classList.add("red");
    } else {
      span.classList.add("green");
    }
    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type ='text' value = '${todo.content}' readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(edit);
    label.appendChild(deleteButton);
    label.appendChild(label);
    label.appendChild(content);
    label.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add("done");
    }

    input.addEventListener("click", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringifz(todos));

      if (todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }

      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly", true);
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    //delete already completed tasks
    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      DisplayTodos();
    });
  });
}
