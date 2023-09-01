import _ from 'lodash';
import '../styles/main.scss';

const defaultOptions = {
  speed: 0.6,
  minWidth: 991,
};

export function parallaxEffect(options) {
  const parallaxElements = document.getElementsByClassName('parallax-element');
  const parallaxSpeed = options?.speed ?? defaultOptions.speed;

  function updateElement(element) {
    const scrollY = window.scrollY;
    const elementOffset = element.getBoundingClientRect();
    const elementTop = elementOffset.top + scrollY;
    const translateY = parallaxSpeed * (scrollY - elementTop);

    element.style.transform = `translate3d(0, ${translateY}px, 0)`;
  }

  function updateParallaxElements() {
    Array.from(parallaxElements).forEach(element => {
      if (window.innerWidth > options?.minWidth ?? defaultOptions.minWidth) {
        updateElement(element);
      } else {
        element.style.transform = 'translate3d(0, 0, 0)';
      }
    });
  }

  function handleResize() {
    updateParallaxElements();
  }

  function handleScroll() {
    updateParallaxElements();
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  // Initial update
  updateParallaxElements();
}