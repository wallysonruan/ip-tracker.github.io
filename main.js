const input = document.getElementById("search-bar__input"),
bttn = document.getElementById("search-bar__bttn");

const numberOrDotOnly = () => {
    let ipAdress = input.value,
    ipAdressLastChar = input.value.charAt(input.value.length - 1);

    if(ipAdress.length == 1){
        if(isNaN(parseInt(ipAdress))){
            input.value = "";
            }
    }
    else{
        if(isNaN(parseInt(ipAdressLastChar)) && ipAdressLastChar != "."){
            input.value = ipAdress.slice(0, ipAdress.length - 1)
        }
    }
}
const IpValidation = () => {
    let ipAdress = input.value,
    dots = [],
    otherChar = [];
    
    for(let i = 0; i < ipAdress.length; i++){
        if(ipAdress[i] == "."){
            dots += ipAdress[i];
        }
        else{
            otherChar += ipAdress[i];
        }
    }
    
    if(dots.length == 3 && otherChar.length >= 4){
        return ipAdress
    }
    else{
        window.alert("The IP must contain 4 groups of number separated by dots, each ranging from 1 to 3 numbers.\n\nExample: 000.111.222.333")
    }
}
const searchIpAdress = (ip) =>{
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_Vd9V7RfXcNnnNbl69el94S51ORuj1&ipAddress=${ip}`)
    .then((response) => response.json()
        .then((data) => {
        if(data.code != 422){
            showIpAdress(data);
        }
    }))
}
const showIpAdress = (data) =>{
    document.getElementById("ip").innerHTML = data.ip;

    document.getElementById("location").innerHTML = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;

    document.getElementById("timezone").innerHTML = data.location.timezone;

    document.getElementById("isp").innerHTML = data.isp;
}

input.addEventListener("input", go => {
    numberOrDotOnly();
})
bttn.addEventListener("click", go => {
    searchIpAdress(IpValidation());
});

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