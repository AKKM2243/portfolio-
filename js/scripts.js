// Leaflet Map

var map = L.map('map').setView([16.809133, 96.131620], 13);

var marker = L.marker([16.809133, 96.131620]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);


