// JavaScript
console.log('Hello world!');


import {LeafletMap, TileLayer, Marker, Popup, Icon} from 'leaflet';

const map = new LeafletMap('map').setView([33.67345606589513, 130.44153024807216], 15);

new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// const marker = new Marker([33.67345606589513, 130.44153024807216]).addTo(map);
// marker.bindPopup('<b>Yeah!</b>').openPopup();

// クリック位置の緯度経度表示
const popup = new Popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

//アイコン
// const whiteIcon = new Icon({
//   iconUrl: 'images/ico.png',
//   shadowUrl: 'images/ico_shadow.png',

// iconSize:     [40, 40], // size of the icon
// shadowSize:   [40, 40], // size of the shadow
// iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
// shadowAnchor: [20, 40],  // the same for the shadow
// popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
// });

// new Marker([33.67345606589513, 130.44153024807216], {icon: whiteIcon}).addTo(map).bindPopup('こんにちは！');

//複数アイコンをまとめて定義
class circleIcon extends Icon {
  static defaultOptions = {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  };
}

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });


new Marker([33.67323654094326, 130.44131232389435], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
new Marker([33.67095141865431, 130.44680392593784], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');