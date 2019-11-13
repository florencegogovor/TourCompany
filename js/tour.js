// testing file
// console.log("hello wordl");

const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
// *************nav toggle ********
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

// add events listener
// console.log(navBtn);
// console.log(links);

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
