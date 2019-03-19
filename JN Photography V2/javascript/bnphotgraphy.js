/* Setting a variable that helps switch classes. */
let x = 0;

/* Creating a function called navbarSwitch. */
function navbarSwitch() {
  /* Selecting navbarItems class and font ID with DOM manipulation. */
  let navbarToggle = document.querySelectorAll('.navbarItems');
  let font = document.querySelector('#font');
  /* Toggle navbarToggleShow being in the class and not in the class. */
  navbarToggle.forEach(nav => nav.classList.toggle('navbarToggleShow'));
  /* Changing icons. */
  if(x === 0){
    font.classList.remove('fa-bars');
    font.classList.add('fa-window-close');
    x = 1;
  } else {
    font.classList.add('fa-bars');
    font.classList.remove('fa-window-close');
    x = 0;
  }
}

/* When user clicks on navbarLink-toggle button, calls the navbarSwitch function
and shows the other pages the user can visit. */
document.querySelector('.navbarLink-toggle').addEventListener('click', navbarSwitch);
