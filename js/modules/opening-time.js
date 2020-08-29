export default function initOpeningTime() {
  const openingTime = document.querySelector('[data-week]');

  const weekDays = openingTime.dataset.week.split(',').map(Number);
  const weekTime = openingTime.dataset.time.split(',').map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const timeNow = dateNow.getHours();

  const weekOpen = weekDays.indexOf(dayNow) !== -1;

  const timeOpen = timeNow >= weekTime[0] && timeNow < weekTime[1];

  if (weekOpen && timeOpen) {
    openingTime.classList.add('open');
  }
}
