const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const clearInputBtn = document.getElementById("clearInputBtn");

addTodoBtn.addEventListener("click", () => {
  if (newTodoInput.value) {
    const newTodoItem = document.createElement("li");
    const task = document.createElement("p");
    const taskBtnContainer = document.createElement("div");
    const completeToDoBtn = document.createElement("button");
    const deleteTodoBtn = document.createElement("button");

    task.innerText = newTodoInput.value;
    completeToDoBtn.innerHTML = "Done";
    deleteTodoBtn.innerText = "X";

    completeToDoBtn.addEventListener("click", () => {
      task.innerHTML = `<strike>${task.innerHTML}</strike>`;
      newTodoItem.classList.add("completed");
    });

    deleteTodoBtn.classList.add("delete-todo-btn");
    deleteTodoBtn.addEventListener("click", function () {
      newTodoItem.remove();
    });

    taskBtnContainer.appendChild(completeToDoBtn);
    taskBtnContainer.appendChild(deleteTodoBtn);
    taskBtnContainer.classList.add("taskBtnContainer");

    newTodoItem.appendChild(task);
    newTodoItem.appendChild(taskBtnContainer);
    todoList.appendChild(newTodoItem);
    clearInput();
  }
});

function clearInput() {
  document.getElementById("newToDoInput").value = "";
}

clearInputBtn.addEventListener("click", clearInput);
