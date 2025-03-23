var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) greet = "Magandang umaga,";
else if (hrs >= 12 && hrs < 15) greet = "Magandang tanghali,";
else if (hrs >= 15 && hrs < 18) greet = "Magandang araw,";
else if (hrs >= 18 && hrs < 24) greet = "Magandang gabi,";

document.getElementById("greetings").innerHTML = "<b>" + greet + "</b>";
