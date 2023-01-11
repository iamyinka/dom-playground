// // let head = document.querySelector("head");
// let head = document.getElementsByTagName("head");

// console.log(head);

// const midLi = document.querySelector("ul");

// console.log(midLi.children[0]);

let newEl = document.createElement("p");
newEl.textContent = "Hello World from JS";

let bodyEl = document.querySelector("body");
// bodyEl.appendChild(newEl);
bodyEl.insertBefore(newEl, bodyEl.children[0]);
// bodyEl.insertAdjacentElement("afterend", newEl);

// console.log(bodyEl.children[0]);

console.log(bodyEl);
console.log(newEl);
