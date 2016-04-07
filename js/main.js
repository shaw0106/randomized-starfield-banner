var $body = $('.banner');
var $stars;
var banHeight = $body.outerWidth();
var banWidth = $body.outerHeight();

for (i = 0; i > 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    opacity: Math.random(),
    top: Math.random() * bannerHeight,
    left: Math.random() * bannerWidth,
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'
  });
  $body.append($star);
}

// Number of stars: 75
// Randomized: top, left, opacity, transform: rotate() scale()
// Getting the width/height of elements: outerWidth(), outerHeight()
// transform-origin, animation, alternate, infinate, @keyframes
//
