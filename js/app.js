// DOM elements
const navItems = document.querySelectorAll('.nav-menu-item');
const currentItems = document.querySelectorAll('.top-menu-item');
console.log(currentItems);

navItems.forEach(clikedNavItems => clikedNavItems.addEventListener('click', () => {
  // First remove the active link
  navItems.forEach(removeNavItems => removeNavItems.classList.remove('active'));

  // Add the active link on the current cliked tab
  clikedNavItems.classList.add('active');
}));

currentItems.forEach(curTabs => curTabs.addEventListener('click', () => {
  currentItems.forEach(removeCurTab => removeCurTab.classList.remove('current'));

  curTabs.classList.add('current');
}))