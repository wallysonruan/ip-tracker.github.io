const input = document.getElementById("search-bar__input"),
bttn = document.getElementById("search-bar__bttn");


//I plan to substitute the entire functions below for a RegEx validation
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
const validateIpAdress = () => {
    let ipAdress = input.value,
    firstThree, secondThree, thirdThree, fourthThree;

    if(ipAdress.length == 15){
        firstThree = ipAdress.slice(0,3),
        secondThree = ipAdress.slice(4,7),
        thirdThree = ipAdress.slice(8,11),
        fourthThree = ipAdress.slice(12,15);
    }else{
        firstThree = ipAdress.slice(0,3),
        secondThree = ipAdress.slice(3,6),
        thirdThree = ipAdress.slice(6,9),
        fourthThree = ipAdress.slice(9,12);
    }

    ipAdress = firstThree + "." + secondThree + "." + thirdThree + "." + fourthThree;

    return ipAdress
}
const searchIpAdress = (ip) =>{
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_Vd9V7RfXcNnnNbl69el94S51ORuj1&ipAddress=${ip}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        showIpAdress(data);
    })
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
    searchIpAdress(validateIpAdress());
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