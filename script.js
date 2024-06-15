MathJax = {
  tex: {
    inlineMath: [['$', '$']]
  }
};
// Get the button:
let mybutton = document.getElementById("bttBtn");

window.addEventListener('DOMContentLoaded', function() {
    mybutton.style.display = "none";
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
