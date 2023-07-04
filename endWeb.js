///ending web (auto animation)
/*// Select the elements you want to animate
const footerContainer = document.querySelector('.footer-container');
const bottomBar = document.querySelector('.bottom-bar');
const btnTanya = document.querySelector('.btn-tanya');

// Define the observer options
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// Define the observer callback
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target === footerContainer) {
        entry.target.style.animation = 'fadeInFromBottom 1s ease-out forwards';
      }
      else if (entry.target === bottomBar) {
        entry.target.style.animation = 'fadeInFromTop 1s ease-out forwards';
      }
      else if (entry.target === btnTanya) {
        entry.target.style.animation = 'fadeInFromBottom 1s ease-out 0.5s forwards';
      }
      observer.unobserve(entry.target);
    }
  });
};

// Create the observer
const observer = new IntersectionObserver(observerCallback, options);

// Start observing the elements
observer.observe(footerContainer);
observer.observe(bottomBar);
observer.observe(btnTanya);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////this is another way end web(testing)
// Define the observer options
// Define the observer options
const options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observerCallback2 = (entries, observer2) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeInSlide 0.8s ease-out ${entry.target.dataset.delay}s forwards`;
        observer2.unobserve(entry.target);
      }
    });
};
const observer2 = new IntersectionObserver(observerCallback2, options2);
document.querySelectorAll('.footer-container, .footer-info, .footer-text-selang, .icon-link, .bottom-bar, .btn-tanya').forEach((el, i) => {
    el.dataset.delay = i * 0.1;
    observer2.observe(el);
});

document.querySelectorAll('.program-desc-wrapper').forEach((el, i) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});
