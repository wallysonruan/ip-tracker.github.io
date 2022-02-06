const personalToken = "pk.eyJ1Ijoid2FsbHlzb25ydWFuIiwiYSI6ImNremFsdjduejI1aTcycHIxd2d4MG9zeG8ifQ.ARlUGYo0jle4wk8WPtgbQw";

//Set the location position to be shown on the map
let map = L.map('map').setView([37.38605, -122.08385], 13);

    //Create the map
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: personalToken
    }).addTo(map);

//Set the map marker
let marker = L.icon({
    iconUrl: "images/icon-location.svg",
    iconSize: [50,60],
    iconAnchor: [22,94]
})
    //Set the marker position
    L.marker([37.38605, -122.08385], {icon: marker}).addTo(map);