export default class AnimateNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    // bind the this from the object to the mutation callback
    this.handleMutation = this.handleMutation.bind(this);
  }

  // receives a DOM element with number in its text
  // increases from 0 to the final number
  static incrementNumbers(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);

    let start = 0;

    const timer = setInterval(() => {
      start += increment;

      number.innerText = start;

      if (start > total) {
        number.innerText = total;

        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // actives increment number to each number
  // selected from DOM
  animateAllNumbers() {
    this.numbers.forEach(number => this.constructor.incrementNumbers(number));
  }

  // function that occurs when the mutation occurs
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateAllNumbers();
    }
  }

  // add MutationObserver to verify
  // when active class is added to element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }

    return this;
  }
}
