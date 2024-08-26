let center = [53.22808674592312,50.198100290207854];
let placemark;

let shops = [
    {
        id: 1,
        coords: [53.23349978768868,50.199472871048975],
        product_count: 5,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 2,
        coords: [53.22393051205803,50.19029310235747],
        product_count: 100,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 3,
        coords: [53.20759674153676,50.19598741688122],
        product_count: 7,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 4,
        coords: [53.22074453137698,50.26229162372937],
        product_count: 3,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
];

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 12
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


    // let placemark1 = new ymaps.Placemark(center, {
    //     balloonContent: `
    //         <div class="balloon">
    //             <div class="balloon__address">г.Самара, 300-летний Дуб</div>
    //             <div class="balloon__contacts">
    //                 <a href="https://tvsamara.ru/news/v-parke-gagarina-svalilsya-znamenityi-300-letnii-dub/">Подробнее</a>
    //             </div>
    //         </div>
    //     `
    // }, {
    //     iconLayout: 'default#image',
    //     iconImageHref: 'oak.png',
    //     iconImageSize: [32, 32],
    //     iconImageOffset: [-16, -25]
    // });

    // let placemark2 = new ymaps.Placemark([53.22780660392432,50.20009080470383], {
    //     balloonContent: `
    //         <div class="balloon">
    //             <div class="balloon__address">Здесь плавают уточки</div>
    //             <div class="balloon__contacts">
    //                 <a href="https://dzen.ru/video/watch/5f1d296bbd3a507b1b34d289?rid=2623975490.1148.1724669405928.77356&t=7&utm_referrer=dzen.ru">Посмотреть</a>
    //             </div>
    //         </div>
    //     `
    // }, {
    //     iconLayout: 'default#image',
    //     iconImageHref: 'duck.png',
    //     iconImageSize: [32, 32],
    //     iconImageOffset: [-16, -25]
    // });

    shops.forEach(shop => {
        placemark = new ymaps.Placemark(shop.coords, {
            balloonContent: `
                <div class="balloon">
                    <div class="balloon__name">МАГАЗ-${shop.id}</div>
                    <div class="balloon__details">
                        <div class="product__count">Кол-во товара: ${shop.product_count}</div>
                        <a href=${shop.details_link}>Подробнее</a>
                    </div>
                </div>
            `
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'map_pointer1.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-25, -50],
            iconContentLayout: ymaps.templateLayoutFactory.createClass(
                `<div class="icon_text">${shop.product_count}</div>`
            )
        });
        map.geoObjects.add(placemark);
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
//   map.geoObjects.add(placemark1);
//   map.geoObjects.add(placemark2);


  //открыть по умолчанию
//   placemark1.balloon.open();
}

ymaps.ready(init);