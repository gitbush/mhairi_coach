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
  hamburger.nav.addEventListener('click', function(e) { 
    console.log('nav')
    hamburger.doToggle(e); });

}());

console.log('always')

// aos
AOS.init({
  duration: 600, // values from 0 to 3000, with step 50ms
  once: true,
});