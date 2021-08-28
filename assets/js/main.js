var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
// slide img 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

}
// show img when click img 
const slideImg = document.querySelectorAll(".product__head__slide-img")

for (var i = 0; i < slideImg.length; i++) {
  slideImg[i].addEventListener("click", show)
}
function show() {
  const slideContainer = document.querySelector(".slideshow-container")
  slideContainer.classList.toggle("show")
}

// show content when click content 
const toggleContent = document.querySelector(".product-info--continue")

toggleContent.addEventListener("click", content)

function content() {
  const content = document.querySelector(".product-info__content")
  content.classList.toggle("hide-content")

  if (content.classList.contains("hide-content")) {
    toggleContent.innerHTML = "Xem thêm <i class='fas fa-chevron-down'></i>"
  } else {
    toggleContent.innerHTML = "Thu gọn <i class='fas fa-chevron-up'></i>"
  }
}

