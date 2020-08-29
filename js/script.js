import SmoothScroll from './modules/smooth-scroll.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
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

initAccordion();
initTabNav();
initModal();
initTollTip();
initDropdownMenu();
initMenuMobile();
initOpeningTime();
initFetchAnimals();
initFetchBitcoin();
initScrollAnimation();
