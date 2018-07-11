function Book (name, category, imgUrl, price, sPoints){
	this.name = name;
	this.category = category;
	this.imgUrl = imgUrl;
	this.price = price;
	this.sPoints = sPoints;
}

function Album (name, category, imgUrl, price, sPoints){
	this.name = name;
	this.category = category;
	this.imgUrl = imgUrl;
	this.price = price;
	this.sPoints = sPoints;
}

let book1 = new Book("The Stranger", "Novel", "cdn/img/the-stranger.jpeg", 10, ["El Sherouq library", "Alef Library"]);

let book2 = new Book("A storm of Swords", "Novel", "cdn/img/got.jpg", 15, ["El Sherouq library", "Alef Library"]);

let Album1 = new Album("Best of Nirvana", "Alt-Rock", "cdn/img/Nirvana.png", 10, ["Itunes", "Spotify"]);

let Album2 = new Album("Wish You Were Here", "Rock", "cdn/img/Pink.png", 15, ["Itunes", "Spotify"]);


$(document).ready(() => {
    $("#header1").load("header.html");
    $("#footer").load("footer.html");
	const $bookShow = $('#book-show');
	const $musicShow = $('#music-show');
    $musicShow.click(function(event){
        event.preventDefault();
    });
});
