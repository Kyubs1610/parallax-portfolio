document.getElementById("checkbox").onclick = function() {
    myFunction()
  };

  function myFunction() {
    let moon = document.querySelector(".moon");
    let sun = document.querySelector(".background");
    let body = document.querySelector("body");
    if (moon.style.display === 'block') {
      moon.style.display = 'none';
      sun.style.display = 'block';
      bird.style.display = 'block';
      document.querySelector(".tree").style.filter = 'none';
      body.style.backgroundColor = '#33100E';
      document.querySelector(".sec").style.backgroundColor = '#33100E';
      body.classList.remove("dark-mode");
    } else {
      sun.style.display = 'none';
      bird.style.display = 'none';
      moon.style.display = 'block';
      document.querySelector(".tree").style.filter = 'grayscale(100%)';
      body.style.backgroundColor = '#171717';
      document.querySelector(".sec").style.backgroundColor = '#171717';
      body.classList.add("dark-mode");
    }
  }

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

  ScrollReveal().reveal('.about', { delay: 600, duration: 1500 });
