(function initPages () {
  var navMain = document.querySelector('.main-nav');
  var headerToggle = document.querySelector('.page-header__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--closed');

  headerToggle.classList.remove('page-header__toggle--nojs');
  headerToggle.classList.add('page-header__toggle--closed');

  headerToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      headerToggle.classList.remove('page-header__toggle--closed');
      headerToggle.classList.add('page-header__toggle--opend');
    } else {
      navMain.classList.add('main-nav--closed');
      headerToggle.classList.remove('page-header__toggle--opend');
      headerToggle.classList.add('page-header__toggle--closed');
    }
  });

  /* Yandex Map */
  if (typeof ymaps !== 'undefined') {
    ymaps.ready(init);
  }

  function init () {
    var myMap = new ymaps.Map('contacts-map', {
      center: [59.93857319197349,30.32128424205017],
      controls: ['zoomControl'],
      zoom: 16
    });

    myMap.geoObjects.add(new ymaps.Placemark([59.938577229572054,30.323094733135225], {
      balloonContentHeader: '<strong>Кэт энерджи</strong>',
      balloonContentBody: 'Адрес: Санкт-Петербург, ул. Большая Конюшенная, д. 19/8'
    }, {
      iconLayout: 'default#image',
      iconImageSize: [124, 106],
      iconImageHref: '/img/map-pin.png',
      iconImageOffset: [-62, -106]
    }));

    myMap.behaviors.disable('scrollZoom');
  }
})();
