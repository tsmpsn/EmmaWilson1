/* Display pop-up */

var imageMap = {
	1: "img/gallery/GALLERY1.jpg",
	2: "img/gallery/GALLERY2.jpg",
	3: "img/gallery/GALLERY3.jpg",
	4: "img/gallery/GALLERY4.jpg",
	5: "img/gallery/GALLERY5.jpg",
	6: "img/gallery/GALLERY6.jpg",
	7: "img/gallery/GALLERY7.jpeg",
	8: "img/gallery/GALLERY8.jpg",
	9: "img/gallery/GALLERY9.jpg",
	10: "img/gallery/GALLERY10.jpg",
	11: "img/gallery/GALLERY11.jpg",
	12: "img/gallery/GALLERY12.jpg",
	13: "img/gallery/GALLERY13.jpg",
	14: "img/gallery/GALLERY14.jpg",
	15: "img/gallery/GALLERY15.jpg",
	16: "img/gallery/GALLERY16.jpg",
	17: "img/gallery/GALLERY17.jpg",
	18: "img/gallery/GALLERY18.jpg"
};

var currentImage = 0;

document.addEventListener("keydown", function(e) {
	switch (e.keyCode) {
		case 37:
			previousImage();
			break;
		case 39:
			nextImage();
			break;
		case 27:
			hideGalleryView();
			break;
	}
});

// Show/hide gallery slideshow

function showFullImage(imageID) {
	currentImage = imageID.substr(3,4);
	document.getElementById("fullGalleryImage").alt = currentImage;
	document.getElementById("fullGalleryImage").src = imageMap[currentImage];
	$("#imageBacking").removeClass("hideGalleryView");
}

function hideGalleryView() {	
	$("#imageBacking").addClass("hideGalleryView");
}

/* Switching image */

function nextImage() {
	currentImage = document.getElementById("fullGalleryImage").alt;
	var newImage = parseInt(currentImage);
	if (currentImage != Object.keys(imageMap).length) {
		newImage += 1;
	} else {
		newImage = 1;
	}
	document.getElementById("fullGalleryImage").alt = newImage;
	document.getElementById("fullGalleryImage").src = imageMap[newImage];
}

function previousImage() {
	currentImage = document.getElementById("fullGalleryImage").alt;
	var newImage = parseInt(currentImage);
	if (currentImage == 1) {
		newImage = Object.keys(imageMap).length;
	} else {
		newImage -= 1;
	}
	document.getElementById("fullGalleryImage").alt = newImage;
	document.getElementById("fullGalleryImage").src = imageMap[newImage];
}