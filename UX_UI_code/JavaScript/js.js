//Here we add JavaScript
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var d = new Date();
document.getElementById("current_date").innerHTML = "Today is " + d.toDateString();



