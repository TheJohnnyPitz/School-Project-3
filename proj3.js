window.onload = start;

function start() {
	rotate()
	rolloverInit()
}

var thisAd = 0; //variable (can't be called within a function)

function rotate() {
	var adImages = new Array("images/ff7.jpg","images/khearts.jpg","images/ocarina.jpg"); //object variable that stores images

	thisAd++; //counter
	if (thisAd == adImages.length) {
		thisAd = 0; //if statement resets counter to 0 after max is reached
	}
	document.getElementById("slideshow").src = adImages[thisAd]; //sets adBanner as the array

	setTimeout(rotate, 5 * 1000); //built in function, time out 5 seconds
}

function rolloverInit() {
	for(var i=0; i<document.images.length;i++) {
		if(document.images[i].parentNode.tagName == "A") {
			setupRollover(document.images[i]);
		}
	}
}
function setupRollover(thisImage) {
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = function() {
		this.src = this.outImage.src;
	}
	thisImage.overImage = new Image();
	thisImage.overImage.src = "images/" + thisImage.id + "_on.jpg";
	thisImage.onmouseover = function() {
		this.src = this.overImage.src;
	}
}
