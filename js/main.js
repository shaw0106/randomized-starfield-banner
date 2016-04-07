var $body = $(.banner);
var $stars;
var banHeight = $body.outWidth();
var banWidth = $body.outHeight();

for (i = 0; i < 75; i++) {
  $star = $('<div>');
  $star.addClass('star');
  $star.css({
    top: Mathrandom() * bannerHeight;
    left: Mathrandom() * bannerWidth;
  })
}





// Number of stars: 75
// Randomized: top, left, opacity, transform: rotate() scale()
// Getting the width/height of elements: outerWidth(), outerHeight()
// transform-origin, animation, alternate, infinate, @keyframes
//
