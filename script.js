  // dark mode function
  
  function myFunction() {
    let moon = document.querySelector(".moon");
    let sun = document.querySelector(".background");
    let body = document.querySelector("body");
    let cursor = document.querySelector(".cursor");
    let about = document.querySelector(".light");
    let treenight = document.querySelector(".treenight");
    let tree = document.querySelector(".tree");
  
      
    if (moon.style.display === 'block') {
      moon.style.display = 'none';
      sun.style.display = 'block';
      bird.style.display = 'block';
      tree.style.display = 'block';
      treenight.style.display = 'none';
      body.style.backgroundColor = '#33100E';
      document.querySelector(".sec").style.backgroundColor = '#33100E';
      body.classList.remove("dark-mode");
      about.addEventListener('mouseenter', () => {
        cursor.style.display = 'none';
      });
      about.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
      });
    } else {
      sun.style.display = 'none';
      bird.style.display = 'none';
      moon.style.display = 'block';
      tree.style.display = 'none';
      treenight.style.display = 'block';
      body.style.backgroundColor = '#03000B';
      document.querySelector(".sec").style.backgroundColor = '#03000B';
      body.classList.add("dark-mode");
  
      // Show cursor when hovering over the .about section
      about.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
      });
      about.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
      });
    }
  }

  document.getElementById("checkbox").onclick = function() {
    myFunction()
  };
  
  // Scroll animation for the 1st section
  let texte = document.querySelector(".title");
  let tree = document.querySelector(".tree");
  let sun= document.querySelector(".background");
  let moon = document.querySelector(".moon");
  let bird =document.querySelector(".bird");
  window.addEventListener('scroll', function() { 
   
    let value = window.scrollY;
    sun.style.top = value * 0.5 + 'px';
    moon.style.top = value * 0.5 + 'px';
    tree.style.top = value * 0 + 'px';
    bird.style.marginLeft = value * 4 + 'px';
    texte.style.marginRight = value * 4 + 'px';
  })

 // Scroll reveal animation for the 2nd section 
  ScrollReveal().reveal('.light h2',  { origin:'left',distance:'300px',delay: 600, duration: 1500 });
  ScrollReveal().reveal('.buttoncv',  { origin:'left',distance:'600px',delay: 1200, duration: 1500 });
  ScrollReveal().reveal('.work h2',  { origin:'left',distance:'300px',delay: 600, duration: 1500 });
  ScrollReveal().reveal('.contactme h2',  { origin:'left',distance:'300px',delay: 600, duration: 1500 });
  ScrollReveal().reveal('.about p', {origin:'right', distance:'500px',delay: 1000, duration: 1500 });
  ScrollReveal().reveal('.container', { delay: 600, duration: 1500 });
  ScrollReveal().reveal('footer', { origin:'bottom', delay: 600, duration: 1500 });
  

 
// Spot light effect on the dark mode
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  })

// Work section   
const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");


var portfolioIn = function (index) {
    portfolioModels[index].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
     imgCard.addEventListener("click", () => {
        portfolioIn(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModels.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});


// Navigation button when scrolling down doesn't appear on the first section

const navButton = document.querySelector(".navbutton");
const firstSection = document.querySelector(".dark-mode.home");

navButton.style.transition = "opacity 0.7s ease-out 0.7s";

window.addEventListener("scroll", function () {
    if (window.scrollY > 500 && !firstSection.contains(event.target)) {
        navButton.classList.remove("none");
        window.getComputedStyle(navButton).opacity; /* trigger a reflow to apply the transition */
        navButton.style.opacity = "1";
        
    } else {
        navButton.classList.add("none");
        window.getComputedStyle(navButton).opacity; /* trigger a reflow to apply the transition */
        navButton.style.opacity = "0";

    }
});



