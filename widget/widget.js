const header = document.getElementById ('header');
const footer = document.getElementById ('footer');
const mobile = document.getElementById ('mmobile');
 
fetch('../widget/header.html').then(function(snap) {
snap.text().then(function(result) {
header.innerHTML = result;
})
})

fetch('../widget/footer.html').then(function(snap) {
snap.text().then(function(result) {
footer.innerHTML = result;
})
})

fetch('../widget/mobile.html').then(function(snap) {
snap.text().then(function(result) {
mobile.innerHTML = result;
})
})