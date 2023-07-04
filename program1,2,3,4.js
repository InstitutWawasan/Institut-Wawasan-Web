// Get all navigation links
const navLinks = document.querySelectorAll('.navigation a');
/// button to scroll down automaticly
// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the target section ID
    const target = link.getAttribute('data-target');
    const targetSection = document.getElementById(target);

    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

//// carrer path animation
window.addEventListener("scroll", function() {
  var section = document.getElementById("career-path");
  var position = section.getBoundingClientRect();

  // checking whether fully visible
  if(position.top >= 0 && position.bottom <= window.innerHeight) {
    var careerGroups = section.getElementsByClassName("career-group");
    for (var i = 0; i < careerGroups.length; i++) {
      careerGroups[i].style.animationPlayState = "running";
    }
  }
});

let samt = 0;
window.addEventListener('scroll', function() {
    samt <= 10 ? samt++ : AOS.refresh();
});



  
  
  

  
  
  