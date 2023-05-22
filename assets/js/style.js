// POPUP
var closeButtons = document.querySelectorAll('.popup-content-close');
closeButtons.forEach(function(button) {
button.addEventListener('click', function() {
var popup = document.querySelector('.popup');
popup.style.display = 'none';
});
});

// SEARCH PRODUCT GAME / APP
const search = () => {
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	const storeitems = document.getElementById("search-list")
	const product = document.querySelectorAll(".search-flex")
	const pname = storeitems.getElementsByTagName("h3")
	
	for (var i = 0; i < pname.length; i++) {
		let match = product[i].getElementsByTagName('h3')[0];
		
		if (match) {
			let textvalue = match.textContent || match.innerHTML
			
			if (textvalue.toUpperCase().indexOf(searchbox) > -1){
				product[i].style.display = "";
				} else {
					product[i].style.display = "none";
					}
				}
			}
		}

// KLIK KANAN
document.oncontextmenu = function (e) {
e.preventDefault()
return false;
}

// KUNCI TAMBAHAN
document.onkeydown = function (e) {

// F12
if (event.keyCode == 123) {
return false;
}

// CTRL+SHIFT+I
if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
return false;
}

// CTRL+SHIFT+C
if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
return false;
}

// CTRL+SHIFT+J
if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
return false;
}

// CTRL+SHIFT+U
if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
return false;
}
}