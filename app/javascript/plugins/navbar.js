
// When the user scrolls the page, execute myFunction
window.onscroll = function () { scrollNavbar() };

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const scrollNavbar = () => {
  var navbar = document.getElementById("nav");

  if (window.pageYOffset > 0) {
    navbar.classList.toggle("transparant")
  }
}

export { scrollNavbar };
