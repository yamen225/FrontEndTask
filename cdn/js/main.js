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

function createRow(type){
	$('<div/>', {
    	'id':type,
    	'class':'data Active',
    }).appendTo($('.content'));

    $('<div/>', {
    	'id':type +'-row',
    	'class':'row text-center',
    }).appendTo($('#'+type));  
}

function createObj(obj, type){
	let objName = obj.name.split(' ').join('');  		
	alert(objName);
    		$('<div/>', {
    			'id':objName+'-card',
    			'class':'col-lg-3 col-md-6 mb-4',
    			}).appendTo($('#'+type+'-row'));

    		$('<div/>', {
    			'id':objName,
    			'class':type+' Product',
    			}).appendTo($('#'+objName+'-card'));

    		$('<img/>', {
    			'id':objName+'-imgUrl',
    			'class':'card-img-top',
    			'src':obj.imgUrl,
    			'alt':type+'-cover',
    			}).appendTo($('#'+objName));

    		$('<div/>', {
    			'id':objName+'-body',
    			'class':'card-body',
    		}).appendTo($('#'+objName));

    		$('<div/>', {
    			'id':objName+'-text',
    			'class':type+'-name',
    		}).appendTo($('#'+objName+'-body'));
    		$('#'+objName+'-text').append('<h5>'+obj.name+'</h5>');

    		$('<div/>', {
    			'id':objName+'-category',
    			'class':type+'-category',
    		}).appendTo($('#'+objName+'-body'));
    		$('#'+objName+'-category').append('<h6>'+obj.category+'</h6>'); 

    		$('<div/>', {
    			'id':objName+'-sPoints',
    			'class':'s-points',
    		}).appendTo($('#'+objName+'-body'));
    		$('#'+objName+'-sPoints').append('<p>Buy From: </p>');
    		list = '<ul>';
			for (var i in obj.sPoints) {
    			list += '<li>'+obj.sPoints[i]+'</li>';
				}
			list += '</ul>';
			$('#'+objName+'-sPoints').append(list);

    		$('<div/>', {
    			'id':objName+'-footer',
    			'class':'card-body',
    		}).appendTo($('#'+objName));
    		$('#'+objName+'-footer').append('<h4>Buy For:<span class="price">'+obj.price+'$</span></h4>');  		

}



let book1 = new Book("The Stranger", "Novel", "cdn/img/the-stranger.jpeg", 10, ["El Sherouq library", "Alef Library"]);

let book2 = new Book("A storm of Swords", "Novel", "cdn/img/got.jpg", 15, ["El Sherouq library", "Alef Library"]);

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
    	$(".content").html("");
    	createRow(clicked_class);
    	if (clicked_class==='books'){
    		createObj(book1,clicked_class);
    		createObj(book2,clicked_class);
    	}else if(clicked_class==='music'){
    		createObj(Album1,clicked_class);
    		createObj(Album2,clicked_class);    		
    	}else{
    		createObj(book1,clicked_class);
    		createObj(book2,clicked_class);
    		createObj(Album1,clicked_class);
    		createObj(Album2,clicked_class);    		
    	}
    });

});
