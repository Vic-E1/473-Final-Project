//Victor Jimenez
//Adrian Ongkoputro
$(document).ready(function(){
  //Functionality for hovering over map image
  $("#picContainer").on("mouseover",function (){
    $("#mapPic").attr("src","Images/mapHover.png");
    $("#mapPic").attr("usemap","#locMap");
});

  $("#picContainer").mouseout(function(){
    $("#mapPic").attr("src","Images/map.png");
  });

var modal;

//Click events that will display the picture slideshow
$("#sanFran").click(function(){
  modal = $("#sanFranModal")[0];
  modal.style.display = "block";
});

$("#atlanta").click(function(){
  modal = $("#atlantaModal")[0];
  modal.style.display = "block";
});

$("#indonesia").click(function(){
  modal = $("#indModal")[0];
  modal.style.display = "block";
});


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//Call to function in library that handles the points when screen size changes
$('map').imageMapResize();
});

//Carousel (Atlanta)
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//Carousel (San Francisco)
var slideIndexSF = 1;
showSlidesSF(slideIndexSF);

// Next/previous controls
function plusSlidesSF(n) {
  showSlidesSF(slideIndexSF += n);
}

function showSlidesSF(n) {
  var slidesSF = document.getElementsByClassName("slideSF");
  if (n > slidesSF.length) {slideIndexSF = 1;}
  if (n < 1) {slideIndexSF = slidesSF.length;}
  for (var i = 0; i < slidesSF.length; i++) {
      slidesSF[i].style.display = "none";
  }
  slidesSF[slideIndexSF-1].style.display = "block";
}

//Carousel (Indonesia)
var slideIndexInd = 1;
showSlidesInd(slideIndexInd);

// Next/previous controls
function plusSlidesInd(n) {
  showSlidesInd(slideIndexInd += n);
}

function showSlidesInd(n) {
  var slidesInd = document.getElementsByClassName("slideInd");
  if (n > slidesInd.length) {slideIndexInd = 1;}
  if (n < 1) {slideIndexInd = slidesInd.length;}
  for (var i = 0; i < slidesInd.length; i++) {
      slidesInd[i].style.display = "none";
  }
  slidesInd[slideIndexInd-1].style.display = "block";
}
