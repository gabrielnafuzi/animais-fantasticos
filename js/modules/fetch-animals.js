import AnimateNumbers from './animate-numbers.js';

export default function fetchAnimals(url, target) {
  // creates a div containing information
  // with the total number of animals
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  // fill each animal inside DOM
  const gridNumbers = document.querySelector(target);

  function fillAnimals(animal) {
    const animalDiv = createAnimal(animal);

    gridNumbers.appendChild(animalDiv);
  }

  // animates each animal's number
  function animateAnimalsNumbers() {
    const animateNumbers = new AnimateNumbers('[data-number]', '.numbers', 'active');
    animateNumbers.init();
  }

  // Pull animals from a JSON archive
  // and creates each animal using createAnimal function
  async function createAnimals() {
    try {
      // fetch, wait for response then transform response to json
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      // after transformation in json, activates the functions
      // to fill and animate the numbers
      animalsJSON.forEach(animal => fillAnimals(animal));

      animateAnimalsNumbers();
    } catch (err) {
      console.error(err);
    }
  }

  return createAnimals();
}
