export default async function fetchBitcoin(url, target) {
  try {
    const btcPrice = document.querySelector(target);

    const response = await fetch(url);

    const data = await response.json();

    btcPrice.innerText = (1000 / data.BRL.sell).toFixed(4);
  } catch (err) {
    console.error(err);
  }
}
