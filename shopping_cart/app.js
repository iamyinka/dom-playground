const items = document.querySelector(".items-list ul");
const addItem = document.querySelector("#add-item");
const itemVal = document.querySelector("#itemVal");
const searchItemForm = document.querySelector("#search-from");
const searchItems = document.querySelector("#search-items");
const hideList = document.querySelector("#search-from input[type='checkbox']");
let inputVal = "";

items.addEventListener("click", removeItem);

addItem.addEventListener("submit", addItemToList);

hideList.addEventListener("change", hideAllItems);

searchItems.addEventListener("keyup", searchItemInList);

function searchItemInList(e) {
  inputVal = e.target.value;
  //   console.log(inputVal);
  let newItems = document.querySelectorAll(".items-list li");
  newItems.forEach((item) => {
    if (!item.textContent.toLowerCase().includes(inputVal.toLowerCase())) {
      item.classList.add("hide-item");
    } else {
      item.classList.remove("hide-item");
    }
  });
}

function hideAllItems(e) {
  if (e.target.checked) {
    items.parentElement.classList.add("hide-items");
  } else {
    items.parentElement.classList.remove("hide-items");
  }
}

function addItemToList(e) {
  e.preventDefault();
  const item = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  item.textContent = itemVal.value;
  item.appendChild(delBtn);
  itemVal.value = "";
  items.appendChild(item);
}

function removeItem(e) {
  //   console.log(e.target.parentElement);
  if (e.target.nodeName == "BUTTON") {
    e.target.parentElement.remove();
  }
}
