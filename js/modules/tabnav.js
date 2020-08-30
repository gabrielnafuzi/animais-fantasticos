export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  // activates the tab according to its index
  activeTab(index) {
    this.tabContent.forEach(section => {
      section.classList.remove(this.activeClass);
    });

    const animateDirection = this.tabContent[index].dataset.animate;

    this.tabContent[index].classList.add(this.activeClass, animateDirection);
  }

  // add events to tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // active first item
      this.activeTab(0);
      this.addTabNavEvent();
    }

    return this;
  }
}
