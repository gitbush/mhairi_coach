// toggle
(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { 
    console.log('yes')
    hamburger.doToggle(e); });
  // hamburger.nav.addEventListener('click', function(e) { 
  //   console.log('nav')
  //   hamburger.doToggle(e); });

}());

console.log('always')

// aos
AOS.init({
  duration: 600, // values from 0 to 3000, with step 50ms
  once: true,
});

// slick carousel
// $(document).ready(function(){
//   $('.things-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
//   });

//   $('.slick-next').html("Next thing")
  
// });

var slides = document.querySelectorAll('.things-slider .slider-item');
var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slider-item slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider-item slide showing';
    
}



document.querySelector('.slide-btn').addEventListener('click', nextSlide)