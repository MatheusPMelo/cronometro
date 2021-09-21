let time = 10000,
  currentImageIndex = 0,
  images = document.querySelectorAll(".slider");
max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
    // troca de image
    nextImage();
  }, time);
}

window.addEventListener("load", start);
