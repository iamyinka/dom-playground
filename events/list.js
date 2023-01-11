const lists = document.querySelector(".lists");

lists.addEventListener("click", clickHandler);

function clickHandler(e) {
  if (e.target.children.length >= 1) {
    target = e.target;
    //   console.log(target.childNodes);
    newUl = target.querySelector("ul");
    newUl.classList.toggle("hide");
  }
}

// console.log(lists);
