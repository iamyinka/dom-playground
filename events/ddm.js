const level1 = document.querySelector(".level-1");

level1.addEventListener("click", showDropDownMenu);

function showDropDownMenu(e) {
  e.preventDefault();
  e.target.nextElementSibling.classList.toggle("hide");
}
