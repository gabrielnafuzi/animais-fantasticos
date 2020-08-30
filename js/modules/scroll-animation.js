export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // takes the distance of each item in relation
  // to the top of the site
  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  // checks the distance on each object in
  // relation to the site scroll
  checkDistance() {
    this.distance.forEach(item => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }

    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
