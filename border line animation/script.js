let borderLine = document.querySelector('.border-line');
let animationWidth = 0;
let previousScroll = 0;

window.addEventListener('scroll', () => {

  if (previousScroll > window.scrollY) {
    borderLine.style.width = animationWidth + '%';
    animationWidth -= 1.5;
  } else {
    animationWidth += 1.5;
  }

  if (animationWidth > 100) {
    animationWidth = 100;
  }

  if (animationWidth < 0) {
    animationWidth = 0;
  }

  borderLine.style.width = animationWidth + '%';

  previousScroll = window.scrollY;
});

