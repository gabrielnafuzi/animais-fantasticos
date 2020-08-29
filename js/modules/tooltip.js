export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // class object bind to callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move the tooltip based on your styles
  // according to the position of the mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 280 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 280}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove tooltip and remove mousemove and mouseleave events
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // creates the tooltip and add mousemove and mouseleave
  // events into target
  onMouseOver({ currentTarget }) {
    // creates the tooltip box and put on a property
    this.createTooltipBox(currentTarget);

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // create tooltip box and put on body
  createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;
  }

  // add mouseover to each tooltip
  addTooltipsEvent() {
    this.tooltips.forEach(tooltip => {
      tooltip.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }

    return this;
  }
}
