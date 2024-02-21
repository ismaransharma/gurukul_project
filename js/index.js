// NavBar Js
const mobile_navBar = document.querySelector(".mobile-navBar");
const nav_header = document.querySelector(".navBar");

const toggleNavBar = () => {
  console.log("Hello!");
  nav_header.classList.toggle("active");
};

mobile_navBar.addEventListener("click", () => toggleNavBar());

// Gallery Section JS
const gallery = document.querySelector("#gallery .gallery");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;

function showNextImage() {
  currentIndex = (currentIndex + 1) % gallery.children.length;
  showImage(currentIndex);
}

function showPrevImage() {
  currentIndex =
    (currentIndex - 1 + gallery.children.length) % gallery.children.length;
  showImage(currentIndex);
}

function showImage(index) {
  const galleryWidth = gallery.clientWidth;
  gallery.style.transform = `translateX(-${index * galleryWidth}px)`;
}

nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPrevImage);

showImage(currentIndex);
