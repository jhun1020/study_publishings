let input_btn = document.querySelector(".input_btn");
let input_task = document.querySelector(".input_task");
// add클릭하면 input값 받아서 새로운 li 추가
input_btn.addEventListener("click", (event) => {
  if (input_task.value == "") {
    alert("Please enter a task");
  } else {
    new_task();
  }
});

let query_task_list = document.querySelector(".task_list");
// 새로운  task입력
function new_task() {
  let new_task = `<li class="flex_between">
  <div>${input_task.value}</div><div><span class="material-symbols-outlined favorite" id="favorite_false">favorite</span>
  <span><i class="material-icons delete">delete</i></span>
  </div>
  </li>`;
  query_task_list.insertAdjacentHTML("beforeend", new_task);
}

// 클릭했을 때
query_task_list.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }

  if (event.target.id == "favorite_false") {
    event.target.id = "favorite_true";
    return;
  }
  if (event.target.id == "favorite_true") {
    event.target.id = "favorite_false";
    return;
  }
});

// 엔터쳤을때
input_task.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    new_task();
  }
});
