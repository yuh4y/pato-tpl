var slideIndex = 1;

var slides = document.getElementsByClassName("slide");
function showSlide(slideIndex) {
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  console.log(slideIndex);
}

function changeSlide(index){
  slideIndex = (slideIndex + index + slides.length) % slides.length;
  showSlide(slideIndex);
}
setInterval(changeSlide, 5000, 1 );

showSlide(slideIndex);

var btnSideBar = document.getElementsByClassName('btn-side-bar');

