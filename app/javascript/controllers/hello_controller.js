import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["nav", "image"]

  layout() {
    this.imageTarget.style.top = `-${window.scrollY}px`;
    window.scrollY > 0 ? this.navTarget.classList.add('opacity-0', 'duration-500', 'transition-all') : this.navTarget.classList.remove('opacity-0', 'duration-500', 'transition-all');
  }
}
