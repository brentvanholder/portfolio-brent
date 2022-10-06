const navbar = document.getElementById("nav");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const scrollNavbar = () => {
  navbar.classList[window.scrollY > 0 ? "remove" : "add"]("transparant")
}

// When the user scrolls the page, execute myFunction
window.addEventListener('scroll', scrollNavbar);

export { scrollNavbar };
