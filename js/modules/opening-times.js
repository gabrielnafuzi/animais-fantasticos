export default class OpeningTimes {
  constructor(openTimes, activeClass) {
    this.openTimes = document.querySelector(openTimes);
    this.activeClass = activeClass;
  }

  operatingData() {
    this.weekDays = this.openTimes.dataset.week.split(',').map(Number);
    this.weekTime = this.openTimes.dataset.time.split(',').map(Number);
  }

  nowData() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const weekOpen = this.weekDays.indexOf(this.dayNow) !== -1;

    const timeOpen = this.timeNow >= this.weekTime[0] && this.timeNow < this.weekTime[1];

    return weekOpen && timeOpen;
  }

  activesOpen() {
    if (this.isOpen()) {
      this.openTimes.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.openTimes) {
      this.operatingData();
      this.nowData();
      this.activesOpen();
    }
  }
}
