let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1000);
}

function playvid() {
  document.getElementById('playbutton').style.display = "none";
  document.getElementById('slideshow-container').style.display = "none";
  document.getElementById('this').style.display = "initial";
  document.getElementById('this').play();
}