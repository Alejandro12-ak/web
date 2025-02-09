const warped = document.querySelector('.warped');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
 
 warped.classList.add('active');
};

loginLink.onclick = () => {
 
 warped.classList.remove('active');
};

btnPopup.onclick = () => {
 
 warped.classList.add('active-popup');
};

iconClose.onclick = () => {
 
 warped.classList.remove('active-popup');
  warped.classList.remove('active');
};