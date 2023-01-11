let quoteBox = document.querySelector("ul");
let selectedQuote = null;

quoteBox.addEventListener("click", deleteQuote);

function deleteQuote(e) {
  let currentQuote = e.target;
  selectedQuote = currentQuote;

  if (selectedQuote !== null) {
    if (selectedQuote.classList.contains("quote-close")) {
      console.log(selectedQuote.parentElement);
      selectedQuote.parentElement.remove();
    }
    selectedQuote = null;
  }
}

console.log(quoteBox);
