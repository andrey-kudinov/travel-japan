(function () {
  const header = document.querySelector(".header");
  const headerWrapper = document.querySelector(".header__wrapper");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
      headerWrapper.classList.add("header__wrapper_active");
    } else {
      header.classList.remove("header_active");
      headerWrapper.classList.remove("header__wrapper_active");
    }
  };
})();

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
})();
