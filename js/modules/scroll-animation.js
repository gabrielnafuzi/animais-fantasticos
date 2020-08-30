export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-animate="scroll"]');

  function animateScroll() {
    const halfWindow = window.innerHeight * 0.6;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindow < 80;

      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  if (sections.length) {
    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}
