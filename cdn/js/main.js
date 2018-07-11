var list;

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

function createBook1(){
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
    			'id':bookName1+'-imgUrl',
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
    			'class':'book-name',
    		}).appendTo($('#'+bookName1+'-body'));
    		$('#'+bookName1+'-text').append('<h5>'+book1.name+'</h5>');

    		$('<div/>', {
    			'id':bookName1+'-category',
    			'class':'book-category',
    		}).appendTo($('#'+bookName1+'-body'));
    		$('#'+bookName1+'-category').append('<h6>'+book1.category+'</h6>'); 

    		$('<div/>', {
    			'id':bookName1+'-sPoints',
    			'class':'s-points',
    		}).appendTo($('#'+bookName1+'-body'));
    		$('#'+bookName1+'-sPoints').append('<p>Buy From: </p>');
    		list = '<ul>';
			for (var i in book1.sPoints) {
    			list += '<li>'+i+'</li>';
				}
			list += '</ul>';
			$('#'+bookName1+'-sPoints').append(list);

    		$('<div/>', {
    			'id':bookName1+'-footer',
    			'class':'card-body',
    		}).appendTo($('#'+bookName1));
    		$('#'+bookName1+'-footer').append('<h4>Buy For:<span class="price">'+book1.price+'$</span></h4>');  		

}

let book1 = new Book("The Stranger", "Novel", "cdn/img/the-stranger.jpeg", 10, ["El Sherouq library", "Alef Library"]);
let bookName1 = book1.name.split(' ').join('');

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
    		$(".content").html("");
    		createBook1();
    	}
    });

});
