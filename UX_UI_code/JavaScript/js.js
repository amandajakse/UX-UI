//Here we add JavaScript
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var d = new Date();
document.getElementById("current_date").innerHTML = "Today is " + d.toDateString();




mapboxgl.accessToken = 'pk.eyJ1IjoiYW15LWtyaSIsImEiOiJja201eXRiMWswajBnMnhrbjF0NjJrMjg5In0.gzeG_pFW93uuh_DvYJ2lIQ';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/amy-kri/cknn8knez0jwz17kutezjyxwl', // style URL
    center: [10.116, 56.170], // starting position [lng, lat]
    zoom: 15 // starting zoom
});
