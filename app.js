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

function showImage() {
    var dropdown = document.getElementById("dropdown");
    var selectedIndex = dropdown.selectedIndex;
    var selectedValue = dropdown.options[selectedIndex].value;

    var imageContainer = document.getElementById("image-container");
    var imageElement = imageContainer.getElementsByTagName("img")[0];

    if (selectedValue === "option1") {
      imageElement.src = "./imge/IMG_20231214_122106_227.jpg";
    } else if (selectedValue === "option2") {
      imageElement.src = "./imge/IMG-20231214-WA0003.jpg";
    } else if (selectedValue === "option3") {
      imageElement.src = "./imge/Untitled-1.png";
    }

    imageContainer.style.display = "block";
  }