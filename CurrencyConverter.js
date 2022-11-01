// for selecting DOM Element
const searchElm = document.querySelector(".searchBox");
const convertElm = document.querySelector(".convert");
const fromElm = document.querySelector(".from");
const toElm = document.querySelector(".to");
const finalValueElm = document.querySelector(".finalValue");
const finalAmountElm = document.querySelector("#finalAmount");
let resultFrom;
let resultTo;
let searchValue;

// api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// Event when currency is changed
fromElm.addEventListener("change", (evtFrom) => {
  resultFrom = `${evtFrom.target.value}`;
});

// Event when currency is changed
toElm.addEventListener("change", (evtTo) => {
  resultTo = `${evtTo.target.value}`;
});

// function for updating value
function updateValue(evtValue) {
  searchValue = evtValue.target.value;
}

searchElm.addEventListener("input", updateValue);

// display results after convertion
function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValueElm.textContent = ((toRate / fromRate) * searchValue).toFixed(2);
  finalAmountElm.style.display = "block";
}

// when user click on reset button
function resetValue() {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
}

// function getresults
function getResults() {
  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then(displayResults);
}

// when user clicks, it calls function getresults
convertElm.addEventListener("click", getResults);

(() => {})();
