const elements = document.querySelectorAll('.why-pick-us-container, .why-pick-us-title, .grid-item, .grid-item2');
let delay1 = 0.1;
let observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${delay1}s`;
            entry.target.style.animationPlayState = 'running';
            entry.target.style.visibility = 'visible';
            delay1 += 0.1;
        }
    });
});
elements.forEach(element => {
    observer1.observe(element);
});

// for program option
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
};

let delay = 0.1;

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeInSlide 1s ease-out ${delay}s forwards`;
        observer.unobserve(entry.target);
        delay += 0.01;
      }
    });
};

const observer = new IntersectionObserver(observerCallback, options);

document.querySelectorAll('.title-container2, .title-container2 h1, .programs-container, .program-box, .program-box h2, .program-box img, .program-box .program-button, .program-desc').forEach((el, i) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

