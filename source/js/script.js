  var navMain = document.querySelector(".main-nav");
  var headerToggle = document.querySelector(".page-header__toggle");

    navMain.classList.remove("main-nav--nojs");
    navMain.classList.add("main-nav--closed");

    headerToggle.classList.remove("page-header__toggle--nojs");
    headerToggle.classList.add("page-header__toggle--closed");

    headerToggle.addEventListener("click" , function() {
      if (navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        headerToggle.classList.remove("page-header__toggle--closed");
        headerToggle.classList.add("page-header__toggle--opend");
      } else {
        navMain.classList.add("main-nav--closed");
        headerToggle.classList.remove("page-header__toggle--opend");
        headerToggle.classList.add("page-header__toggle--closed");
      }
    });
