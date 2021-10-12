const $IP = document.querySelector(".IP"),
    $timezone = document.querySelector(".timezone"),
    $location = document.querySelector(".location"),
    $ISP = document.querySelector(".ISP"),
    $input = document.querySelector(".input"),
    $form = document.querySelector("form");

const myIcon = L.icon({
        iconUrl: './images/icon-location.svg',
        iconSize: [46, 56],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });

let mymap = L.map('mapid').setView([51.505, -0.09], 13);
let marker = L.marker([51.505, -0.09], {icon: myIcon}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF0aWFzMTk5OTE2IiwiYSI6ImNrdW45cjUyZDJoOXIzMHJ1NnA1aG9kMGQifQ.-5OIRNWig1I_uAOkRiwwYQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

const api = async (props) => {
    let {url, cbSuccess} = props
    try {
        let fech = await fetch(url)
        let data = await fech.json()
        cbSuccess(data)
    } catch (error) {
        alert(error)
    }
}

const traerIP = () => {
    api({
        url:"https://api.ipify.org?format=json",
        cbSuccess: (post) => {
            $IP.innerHTML = post.ip;
        }
    });
}

const traerDatos = (input) => {
    api({
        url:`https://geo.ipify.org/api/v1?apiKey=at_ts9BpFhpXJ0WKeqRNiId9uPLVkYHb&ipAddress=${input}`,
        cbSuccess: (data) => {
            console.log(data)
            $IP.innerHTML = data.ip
            $timezone.innerHTML = `UTC ${data.location.timezone}`
            $location.innerHTML = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
            //$timezone.innerHTML += data.location.timezone
            $ISP.innerHTML = data.isp;
            setMap(data.location.lat, data.location.lng)
        }
    })
}
    
const setMap = (lat, lng) => {
    mymap.setView([lat, lng]);
    marker = L.marker([lat, lng]).addTo(mymap);
}


$form.addEventListener("submit", (e) => {
    e.preventDefault();
    traerDatos($input.value)
    traerIP();
    $form.reset()
});    
