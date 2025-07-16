const images = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "block";
  showImage(index, "none");
}

function closeLightbox() {
  lightbox.style.display = "none";
  lightboxImg.className = "lightbox-img"; // reset class
}

function showImage(index, direction) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  
  const src = images[index].src;
  lightboxImg.className = "lightbox-img"; // reset
  
  // Delay for transition
  setTimeout(() => {
    lightboxImg.src = src;
    if (direction === "left") {
      lightboxImg.classList.add("show-slide-left");
    } else if (direction === "right") {
      lightboxImg.classList.add("show-slide-right");
    } else {
      lightboxImg.classList.add("show");
    }
  }, 10);

  currentIndex = index;
}

function nextImage() {
  showImage(currentIndex + 1, "right");
}

function prevImage() {
  showImage(currentIndex - 1, "left");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});

  document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("gallerySelect");
    const currentPage = window.location.pathname.split("/").pop(); // ambil nama file

    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === currentPage) {
        select.selectedIndex = i;
        break;
      }
    }

    // Navigasi saat user mengganti opsi
    select.addEventListener("change", function () {
      window.location.href = this.value;
    });
  });