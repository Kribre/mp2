var carousel = document.querySelector('.carousel');
var cellCount = 3;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-182px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.prev');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});