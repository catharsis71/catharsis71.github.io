let slideIndex = 0;
showSlides();

var vid = document.getElementById("this");

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

function openFullscreen() {
  if (vid.requestFullscreen) {
    vid.requestFullscreen();
  } else if (vid.webkitRequestFullscreen) { /* Safari */
    vid.webkitRequestFullscreen();
  } else if (vid.msRequestFullscreen) { /* IE11 */
    vid.msRequestFullscreen();
  }
}

function playvid() {
  document.getElementById('playbutton').style.display = "none";
  document.getElementById('slideshow-container').style.display = "none";
  vid.style.display = "initial";
  vid.play();
  openFullscreen();
}
