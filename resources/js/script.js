var hb = document.querySelector('.mobile-nav-icon'); // hamburger continer
var hbOpen = document.querySelector('.hb-open'); // hamburger bars icon
var hbClose = document.querySelector('.hb-close'); // close icon

var nav = document.querySelector('.main-nav');
var navLinks = document.querySelector('.main-nav-links');

var hungryButton = document.querySelector('.js-scroll-to-orders');
var moreButton = document.querySelector('.js-scroll-to-features');
var featuresSection = document.querySelector('.js-section-features');
var orderSection = document.querySelector('.js-section-order');

// reveal fixed navbar
var waypointHeader = new Waypoint({
  element: document.querySelector('.js-section-features'),
  handler: function(dir) {
    if (dir === 'down') {
      nav.classList.add('sticky');
      hb.classList.add('sticky');
    } else if (dir === 'up') {
      nav.classList.remove('sticky');
      hb.classList.remove('sticky');
    }
  },
  offset: '-10%'
});

// hook up hero buttons
hungryButton.addEventListener('click', function() {
  orderSection.scrollIntoView({ behavior: 'smooth' });
});
moreButton.addEventListener('click', function() {
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});

// fade features in
var waypointFeatures = new Waypoint({
  element: document.querySelector('.js-wp1'),
  handler: function(dir) {
    if (dir === 'down') {
      this.element.classList.add('animated', 'fadeIn');
    }
  },
  offset: '75%'
});

// fade iPhone image in and slide up
var waypointFeatures = new Waypoint({
  element: document.querySelector('.js-wp2'),
  handler: function(dir) {
    if (dir === 'down') {
      this.element.classList.add('animated', 'fadeInUp');
    }
  },
  offset: '50%'
});

/* Hamburger functionality */

hb.addEventListener('click', function(e) {
  e.preventDefault(); // no page refresh for empty link
  nav.classList.toggle('slide');
  navLinks.classList.toggle('slide');

  if (hbOpen.style.display !== 'none') {
    // when hamburger visible
    hbOpen.style.display = 'none';
    hbClose.style.display = 'inline-block';
  } else {
    hbOpen.style.display = 'inline-block';
    hbClose.style.display = 'none';
  }
});
