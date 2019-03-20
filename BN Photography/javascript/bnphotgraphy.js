/* Creating a function called navbarSwitch. */
function navbarSwitch() {
  /* Selecting navbarItems class and font ID with DOM manipulation. */
  let navbarToggle = document.querySelector('.navbarItems');
  let icon = document.querySelector('#font');

  /* Toggle navbarToggleShow being in the class and not in the class. */
  navbarToggle.classList.toggle('navbarToggleShow');

  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-window-close');
}

/* When user clicks on navbarLink-toggle button, calls the navbarSwitch function
and shows the other pages the user can visit. */
document.querySelector('.navbarLink-toggle').addEventListener('click', navbarSwitch);
