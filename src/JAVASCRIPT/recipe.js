const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(`Please double check your class names, there is no ${selector} class`);
};

const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');
const navbar = document.querySelector('.navbar');
const date = getElement('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
