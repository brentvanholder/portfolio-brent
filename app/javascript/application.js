require("@rails/activestorage").start()
import "./channels"
import "./controllers"
import "@hotwired/turbo-rails"


document.addEventListener('turbo:load', () => {
    Textanimation();
    scrollNavbar();
});
