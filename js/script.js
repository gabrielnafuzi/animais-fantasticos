import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTollTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOpeningTime from './modules/opening-time.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initScrollAnimation from './modules/scroll-animation.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initModal();
initTollTip();
initDropdownMenu();
initMenuMobile();
initOpeningTime();
initFetchAnimals();
initFetchBitcoin();
initScrollAnimation();
