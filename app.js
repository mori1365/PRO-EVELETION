const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 140)
})

let menu = document.getElementById('menu');
let nav = document.querySelector(".nav");
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open')
}

function showSelectedIframe() {
  var dropdown = document.getElementById("dropdown");
  var selectedItem = dropdown.options[dropdown.selectedIndex].value;
  var displayDiv = document.getElementById("display-item");
  var myFrame = document.getElementById("myFrame");

  if (selectedItem === "item1") {
    displayDiv.style.display = "block";
    myFrame.src = "./table.html"; // لینک مورد نظر برای آیتم 1 رو قرار بدید
  } else if (selectedItem === "item2") {
    displayDiv.style.display = "block";
    myFrame.src = "./Betters.html"; // لینک مورد نظر برای آیتم 2 رو قرار بدید
  } else if (selectedItem === "item3") {
    displayDiv.style.display = "block";
    myFrame.src = "./players record.html"; // لینک مورد نظر برای آیتم 3 رو قرار بدید
  } else {
    displayDiv.style.display = "none";
    myFrame.src = "";
  }
}

var dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", showSelectedIframe);