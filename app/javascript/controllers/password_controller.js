import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="password"
export default class extends Controller {
  static targets = ["button"]

  write(event) {
    console.log('event.target.value :>> ', event.target.value);
    this.buttonTarget.innerText = event.target.value
  }
}
