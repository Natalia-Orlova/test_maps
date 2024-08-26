let center = [53.22808674592312,50.198100290207854];

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 16
    });
    let placemark = new ymaps.Placemark(center, {
        balloonContentHeader: 'заголовок подсказки',
        balloonContentBody: 'описание подсказки',
        balloonContentFooter: '798945465'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'map_point.svg',
        iconImageSize: [19, 42],
        iconImageOffset: [-10, -40]
    });


    let placemark1 = new ymaps.Placemark(center, {
        balloonContent: `
            <div class="balloon">
                <div class="balloon__address">г.Самара, 300-летний Дуб</div>
                <div class="balloon__contacts">
                    <a href="https://tvsamara.ru/news/v-parke-gagarina-svalilsya-znamenityi-300-letnii-dub/">Подробнее</a>
                </div>
            </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'oak.png',
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -25]
    });

    let placemark2 = new ymaps.Placemark([53.22780660392432,50.20009080470383], {
        balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Здесь плавают уточки</div>
                <div class="balloon__contacts">
                    <a href="https://dzen.ru/video/watch/5f1d296bbd3a507b1b34d289?rid=2623975490.1148.1724669405928.77356&t=7&utm_referrer=dzen.ru">Посмотреть</a>
                </div>
            </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'duck.png',
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -25]
    });

    
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  //map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол измерения расстояний
  //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  //добавление метки
  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);


  //открыть по умолчанию
//   placemark1.balloon.open();
}

ymaps.ready(init);