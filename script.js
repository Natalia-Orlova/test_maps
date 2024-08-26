let center = [53.22561075925768,50.21157224822299];
let placemark;
const shopSelect = document.querySelector("#shop");

let shops = [
    {
        id: 1,
        name: "МАГАЗ-1",
        coords: [53.23349978768868,50.199472871048975],
        product_count: 5,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 2,
        name: "МАГАЗ-2",
        coords: [53.22393051205803,50.19029310235747],
        product_count: 100,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 3,
        name: "МАГАЗ-3",
        coords: [53.20759674153676,50.19598741688122],
        product_count: 7,
        details_link: "https://cdn1.ozone.ru/s3/multimedia-9/6015300333.jpg"
    },
    {
        id: 4,
        name: "МАГАЗ-4",
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
            map.setCenter(selectedShop.coords, 16);
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
      option.textContent = shop.name;
      shopSelect.appendChild(option);
    })

    // shopSelect.addEventListener('change', function() {
    //     const selectedShop = shops.find(shop => shop.id == this.value);
    //     if (selectedShop) {
    //         map.setCenter(selectedShop.coords, 15);
    //     }
    // });
}

fillShopSelect();