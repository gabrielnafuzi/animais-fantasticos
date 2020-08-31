import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import fetchAnimals from './modules/fetch-animals.js';
import MenuMobile from './modules/menu-mobile.js';
import OpeningTimes from './modules/opening-times.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnimation from './modules/scroll-animation.js';
import SlideNav from './modules/slide-nav.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-animate="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

const scrollAnimation = new ScrollAnimation('[data-animate="scroll"]');
scrollAnimation.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const openingTimes = new OpeningTimes('[data-week]', 'open');
openingTimes.init();

fetchAnimals('./animalsapi.json', '.numbers-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-price');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
