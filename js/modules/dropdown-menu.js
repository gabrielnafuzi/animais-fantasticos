import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, userEvents) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart and click events as default arguments
    // if the user doesn't inform
    this.userEvents = this.userEvents === undefined ? ['touchstart', 'click'] : userEvents;

    this.activeClass = 'active';

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // actives the dropdownmenu and add
  // the function that watch the clickoutside
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);

    outsideClick(element, this.userEvents, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // add events to dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach(menu => {
      this.userEvents.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
