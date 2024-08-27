let center = [53.22561075925768,50.21157224822299];
let placemark;
const shopSelect = document.querySelector("#shop");

let shops = [
    {
        id: 1,
        name: "МАГАЗ-1",
        address: "г.Самара, Московское шоссе, 81А ",
        coords: [53.23349978768868,50.199472871048975],
        product_count: 5,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 2,
        name: "МАГАЗ-2",
        address: "г.Самара, Московское шоссе, 106",
        coords: [53.22393051205803,50.19029310235747],
        product_count: 100,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 3,
        name: "МАГАЗ-3",
        address: "г.Самара, Дыбенко, 30",
        coords: [53.20759674153676,50.19598741688122],
        product_count: 7,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 4,
        name: "МАГАЗ-4",
        address: "г.Самара, проспект Кирова, 147",
        coords: [53.22074453137698,50.26229162372937],
        product_count: 3,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 5,
        name: "МАГАЗ-4",
        address: "Московское шоссе, 185А",
        coords: [53.248868002455744,50.22097051546659],
        product_count: 20,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 6,
        name: "МАГАЗ-5",
        address: "Ново-Садовая, 160М",
        coords: [53.224819946311406,50.1676354794404],
        product_count: 34,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 7,
        name: "МАГАЗ-6",
        address: "Московское шоссе, 18-й км, 23",
        coords: [53.275627999734745,50.272617331130824],
        product_count: 2,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    }
];

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 12
    });

    shops.forEach(shop => {
        placemark = new ymaps.Placemark(shop.coords, {
            balloonContent: `
                <div class="balloon">
                    <div class="balloon__name">${shop.name}</div>
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

    
    shopSelect.addEventListener('change', function() {
        const selectedShop = shops.find(shop => shop.id == this.value);
        if (selectedShop) {
            map.setCenter(selectedShop.coords, 16, {
                duration: 1000,
                timingFunction: 'ease-in-out'
            });
        }
    });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  //map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол измерения расстояний
  //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);



function fillShopSelect() {
    const shopSelect = document.querySelector("#shop");
    shops.forEach(shop => {
      const option = document.createElement("option");
      option.value = shop.id;
      option.textContent = shop.name + ', ' + shop.address;
      shopSelect.appendChild(option);
    })
}

fillShopSelect();