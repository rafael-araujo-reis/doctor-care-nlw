window.addEventListener('scroll', onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function showNavOnScroll() {
  scrollY > 0 ? navigation.classList.add('scroll') : navigation.classList.remove('scroll');
}

function showBackToTopButtonScroll() {
  const backToTopButton = document.querySelector("#backToTopButton");
  scrollY > 500 ? backToTopButton.classList.add('show') : backToTopButton.classList.remove('show');
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}
function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;


  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement?.classList.remove('active');

  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home stats,
  #services,
  #services header,
  #services .card,
`);