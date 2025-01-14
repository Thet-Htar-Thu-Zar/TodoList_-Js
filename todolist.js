class TodoList {
  // task;
  // id;
  constructor(task, id) {
    this.task = task;
    this.id = id ? id : Date.now();
  }
}

let TodoListArray = [];
const TaskContainer = document.getElementById("task-container");

const todolist1 = new TodoList("Sleep", 1);
const todolist2 = new TodoList("Eat", 2);
const todolist3 = new TodoList("Play", 3);

TodoListArray.push(todolist1, todolist2, todolist3);

const render = () => {
  TodoListArray.forEach((TodoList) => {
    const div = document.createElement("div");
    div.classList.add(
      "d-flex",
      "align-items-center",
      "justify-content-between"
    );

    const span = document.createElement("span");
    span.textContent = TodoList.task;
    div.appendChild(span);

    const button = document.createElement("button");
    button.classList.add("btn", "btn-danger");
    button.textContent = "Delete";
    button.addEventListener("click", () => {
      DeleteTodoList(TodoList.id);
      TaskContainer.innerHTML = "";
      render();
    });
    div.appendChild(button);

    TaskContainer.appendChild(div);
    // console.log(div);
  });
};

render();

const DeleteTodoList = (id) => {
  let newArray = TodoListArray.filter((TodoList) => {
    return TodoList.id != id;
  });
  // return newArray;

  TodoListArray = newArray;
};

const TaskInput = document.getElementById("task-input");

const SubmitClick = () => {
  console.log(TaskInput.value);
  let input = TaskInput.value;
  let newTodoList = new TodoList(input);
  TodoListArray.push(newTodoList);
  console.log(TodoListArray);

  TaskContainer.innerHTML = "";
  render();
  TaskInput.value = "";
};
