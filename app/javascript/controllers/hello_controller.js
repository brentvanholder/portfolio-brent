import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["nav", "image", 'about', 'projectOne', 'projectTwo', 'projectThree', 'projectFour']

  connect() {
  }

  layout() {
    // const projectOneTop = window.pageYOffset + this.projectOneTarget.getBoundingClientRect().top
    // if (window.scrollY + window.innerHeight > projectOneTop) this.projectOneTarget.classList.add('opacity-100')

    // const projectTwoTop = window.pageYOffset + this.projectTwoTarget.getBoundingClientRect().top
    // if (window.scrollY + window.innerHeight > projectTwoTop) this.projectTwoTarget.classList.add('opacity-100')

    // const projectThreeTop = window.pageYOffset + this.projectThreeTarget.getBoundingClientRect().top
    // if (window.scrollY + window.innerHeight > projectThreeTop) this.projectThreeTarget.classList.add('opacity-100')

    // const projectFourTop = window.pageYOffset + this.projectFourTarget.getBoundingClientRect().top
    // if (window.scrollY + window.innerHeight > projectFourTop) this.projectFourTarget.classList.add('opacity-100')



    const textContainerOffsetTop = window.pageYOffset + this.aboutTarget.getBoundingClientRect().top
    if (window.scrollY + window.innerHeight > textContainerOffsetTop) this.aboutTarget.classList.add('animate-textSecond');
    this.imageTarget.style.transform = `translateY(-${window.scrollY}px)`;
    window.scrollY > 0 ? this.navTarget.classList.add('opacity-0', 'duration-500', 'transition-all') : this.navTarget.classList.remove('opacity-0', 'duration-500', 'transition-all');
  }
}
