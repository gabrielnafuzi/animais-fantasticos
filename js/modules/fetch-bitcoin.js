export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const btcPrice = document.querySelector('.btc-price');

      const response = await fetch('https://blockchain.info/ticker');

      const data = await response.json();

      btcPrice.innerText = (1000 / data.BRL.sell).toFixed(4);
    } catch (err) {
      console.error(err);
    }
  }

  fetchBitcoin();
}
