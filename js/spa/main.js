const mobileNavButton = document.querySelector(".mobileNavButton");
const mobileNavButtonIcon = document.querySelector(".mobileNavButton i");
const mobileNav = document.querySelector(".mobileNav");
const navItems = document.querySelectorAll(".mobileNav__list__item__link");

let isOpen = false;

const handleNavClick = () => {
  console.log("click?");
  isOpen = !isOpen;
  mobileNav.classList.toggle("mobileNav--active");
  mobileNavButtonIcon.classList.toggle("fa-xmark");
  mobileNavButton.classList.toggle("mobileNavButton--active");
};

handleNavItemClick = () => {
  mobileNav.classList.remove("mobileNav--active");
  mobileNavButtonIcon.classList.remove("fa-xmark");
  mobileNavButton.classList.remove("mobileNavButton--active");
};

mobileNavButton.addEventListener("click", handleNavClick);

navItems.forEach((item) => {
  item.addEventListener("click", handleNavItemClick);
});
