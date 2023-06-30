///home (intro 2)
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          const id = entry.target.getAttribute("id");
          if (entry.intersectionRatio > 0) {
              document.querySelector(`#${id}`).classList.add("animate");
          } else {
              //document.querySelector(`#${id}`).classList.remove("animate");
          }
      });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('div[id]').forEach((section) => {
      observer.observe(section);
  });
});
/// home(why choose us)
document.addEventListener("DOMContentLoaded", function() {
  var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
          var id = entry.target.getAttribute("id");
          if (entry.intersectionRatio > 0) {
              document.querySelector(`#${id}`).classList.add("animate");
          } else {
              //document.querySelector(`#${id}`).classList.remove("animate");
          }
      });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('div[id]').forEach((section) => {
      observer.observe(section);
  });
});








//-------------------------------------------------------------------------------------------------------------------
////this is for program (auto appear animation)
///menu
document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector('.menu');
  var observer = new IntersectionObserver(function(entries) {
      // If the menu is visible on the screen
      if(entries[0].isIntersecting === true) {
          menu.classList.add('menu-animate');
      } else {
          //menu.classList.remove('menu-animate');
      }
  }, { threshold: [0] });

  observer.observe(menu);
});

///overview
document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
        // If the section is in view
        if(entry.isIntersecting){
            // Add the animations
            entry.target.querySelector('.title').style.animation = 'title-fade-in 1s ease-in-out';
            entry.target.querySelector('.content').style.animation = 'content-fade-in 1s ease-in-out forwards';
            entry.target.querySelectorAll('.features').forEach((feature) => {
                feature.style.animation = 'features-fade-in 0.5s ease-in-out forwards';
            });
        }
    });
  }, {threshold: 0.1});

  // Observe the "overview" section
  observer.observe(document.querySelector('#overview'));
});

///career path
document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
        // If the section is in view
        if(entry.isIntersecting){
            // Add the animations
            entry.target.querySelector('h2').style.animation = 'fadeInDown 1s ease forwards';
            entry.target.querySelectorAll('ul').forEach((ul) => {
                ul.style.animation = 'fadeInUp 1s ease forwards';
            });
            entry.target.querySelectorAll('li').forEach((li) => {
                li.style.animation = 'fadeInLeft 1s ease forwards';
            });
            entry.target.querySelectorAll('.sub-title').forEach((subTitle) => {
                subTitle.style.animation = 'fadeInUp 1s ease forwards';
            });
        }
    });
  }, {threshold: 0.1});

  // Observe the "course-structure" section
  observer.observe(document.querySelector('#course-structure'));
});

///carrer-path
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          const id = entry.target.getAttribute("id");
          if (entry.intersectionRatio > 0) {
              document.querySelector(`.${id}`).classList.add("animate");
          } else {
              //document.querySelector(`.${id}`).classList.remove("animate");
          }
      });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
  });
});

