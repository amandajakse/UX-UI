//Here we add JavaScript
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var d = new Date();
document.getElementById("current_date").innerHTML = "Today is " + d.toDateString();



// thor's mill: 56.12188/10.21332
// below: add the token to the string
L.mapbox.accessToken = 'pk.eyJ1IjoiZXJpbGFuc2siLCJhIjoiY2ttNXl1dzl2MGozaDJwdWl5cnlxNWF3ayJ9.UzMkpU5CIvTCmhrYxR_o2w'
var map = L.mapbox.map('map')
    .setView([56.16960,10.11622], 16) // latitude and longtitude
    // below: add the link to your style
    .addLayer(L.mapbox.styleLayer('mapbox://styles/erilansk/cknq99mfb11sc17rvsap8i1vm'))
