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
 
  console.log(hamburger.navToggle)

  hamburger.navToggle.addEventListener('click', function(e) { 
    hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { 
    hamburger.doToggle(e); });

}());


// aos
AOS.init({
  duration: 600, // values from 0 to 3000, with step 50ms
  once: true,
});


// things about me slider
if(document.querySelector('.slide-btn')){
  var slides = document.querySelectorAll('.things-slider .slider-item');
  var currentSlide = 0;
  // var slideInterval = setInterval(nextSlide,2000);
  
  function nextSlide() {
      slides[currentSlide].className = 'slider-item slide';
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className = 'slider-item slide showing';
      
  }
  document.querySelector('.slide-btn').addEventListener('click', nextSlide)
  console.log('things slider ok')
}



// testimonial slider. Services.html
if(document.querySelector('.circle-slide-btn')){
  var slides = document.querySelectorAll('.testimonials-slider .testimonial-item');
  var currentSlide2 = 0;
  // var slideInterval = setInterval(nextSlide,2000);
  
  function nextSlide2() {
      slides[currentSlide2].className = 'testimonial-item slide';
      currentSlide2 = (currentSlide2+1)%slides.length;
      slides[currentSlide2].className = 'testimonial-item slide test-showing';
      
  }
  document.querySelector('.circle-slide-btn').addEventListener('click', nextSlide2)
}

