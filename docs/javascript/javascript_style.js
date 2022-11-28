let query_list1 = document.querySelector(".list_1");
let btn_1 = document.querySelector("#btn_1");

// btn클릭하면 이벤트 발생
btn_1.addEventListener("click", img_remove);

function img_remove(event) {
  query_list1.style = "display:none";
}

let query_list2 = document.querySelector(".list_2");
let btn_2 = document.querySelector("#btn_2");
btn_2.addEventListener("click", img_hide);

function img_hide(event) {
  query_list2.style = "visibility : hidden";
}

let query_list3 = document.querySelector(".list_3");
let btn_3 = document.querySelector("#btn_3");
btn_3.addEventListener("click", img_reset);

function img_reset(event) {
  query_list1.style = "display:inline-block";
  query_list2.style = "visibility : visible";
}
