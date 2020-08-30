import AnimeNumbers from './anime-numbers.js';

export default function initFetchAnimals() {
  const numbersGrid = document.querySelector('.numbers-grid');

  function createAnimal(animal) {
    numbersGrid.innerHTML += `<div class="number-animal">
      <h3>${animal.specie}</h3>
      <span data-number>${animal.total}</span>
    </div>`;
  }

  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      animalsJSON.forEach(animal => {
        createAnimal(animal);
      });

      const animeNumbers = new AnimeNumbers('[data-number]', '.numbers', 'active');
      animeNumbers.init();
    } catch (err) {
      console.error(err);
    }
  }

  fetchAnimals('../../animalsapi.json');
}
