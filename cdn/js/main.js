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
let bookName1 = book1.name.split(' ').join();

let book2 = new Book("A storm of Swords", "Novel", "cdn/img/got.jpg", 15, ["El Sherouq library", "Alef Library"]);
let bookName2 = book2.name.split(' ').join();

let Album1 = new Album("Best of Nirvana", "Alt-Rock", "cdn/img/Nirvana.png", 10, ["Itunes", "Spotify"]);

let Album2 = new Album("Wish You Were Here", "Rock", "cdn/img/Pink.png", 15, ["Itunes", "Spotify"]);


$(document).ready(() => {
    $("#header1").load("header.html");
    $("#footer").load("footer.html");

    $('.nav-link').click(function(event){
        event.preventDefault();
    	let clicked_class = ($('#' + event.target.id).attr('class')).split(' ')[1];
    	$('.data').removeClass('Active');
    	$('.data').addClass('notActive');
    	$('#'+clicked_class).toggleClass('Active notActive');
    	if(clicked_class === 'books'){
    		$('<div/>', {
    			'id':'books',
    			'class':'data Active',
    			}).appendTo($('.content'));

    		$('<div/>', {
    			'id':'book-row',
    			'class':'row text-center',
    			}).appendTo($('#books'));    		

    		$('<div/>', {
    			'id':'book1-card',
    			'class':'col-lg-3 col-md-6 mb-4',
    			}).appendTo($('#book-row'));

    		$('<div/>', {
    			'id':bookName1,
    			'class':'book Product',
    			}).appendTo($('#book1-card'));

    		$('<img/>', {
    			'id':bookName1+'-imgUrl'
    			'class':'card-img-top',
    			'src':book1.imgUrl,
    			'alt':'book-cover',
    			}).appendTo($('#'+bookName1));

    		$('<div/>', {
    			'id':bookName1+'-body',
    			'class':'card-body',
    		}).appendTo($('#'+bookName1));

    		$('<div/>', {
    			'id':bookName1+'-text',
    			'class':'book-name'
    		}).appendTo($('#'+bookName1+'-body'));

    		$('#'+bookName1+'-body').append('<h5>'+book1.name+'</h5>');

    		$('<div/>', {
    			'id':bookName1+'-category',
    			'class':'book-category'
    		}).appendTo($('#'+bookName1+'-body'));

    		$('#'+bookName1+'-body').append('<h6>'+book1.category+'</h6>');    		
    	}
    });

});
