

// ---------------------------------------------------------------------
// Option 1
// ---------------------------------------------------------------------------------------
// var pageVisit = document.querySelector(".counts");
// var visitCount = localStorage.getItem("page_view");
// if (visitCount) {
//   visitCount = Number(visitCount);
// } else {
//   visitCount = 0;
//   localStorage.setItem("page_view", visitCount);
// }
// document.addEventListener("load", () => {
//   pageVisit.innerText = visitCount;
//   localStorage.setItem("page_view", visitCount);
//   visitCount++;
// });

// ---------------------------------------------------------------------
// Option 2
// ---------------------------------------------------------------------------------------

// var pageVisit = document.querySelector(".counts");
// var visitCount = localStorage.getItem("page_view");
// visitCount = 0;
// pageVisit.innerText = 0;

// document.addEventListener("load", () => {
//   localStorage.setItem("page_view", visitCount);
//   pageVisit.innerText = visitCount;
//   visitCount++;
// });

// ---------------------------------------------------------------------
// Option 3
// ---------------------------------------------------------------------------------------

var pageVisit = document.querySelector(".counts");
var visitCount = localStorage.getItem("page_view");
if (visitCount) {
  visitCount = Number(visitCount);
} else {
  visitCount = 1;
}
document.addEventListener("load", () => {
  localStorage.setItem("page_view", visitCount);
  pageVisit.innerText = visitCount;
  visitCount++;
});