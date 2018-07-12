var list;

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

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

function populateNav(Prod){
	for (let i = 0; i<(Object.keys(Prod)).length; i++){
		$('<a href="#" id = "'+Object.keys(Prod)[i]+'" class = "dropdown-item">'+Object.keys(Prod)[i]+'</a>').appendTo($('.dropdown-menu'));
	}
}

function search(keyword, obj){
	let found = 0;
	for (var i in Prod) {
		for (var k in Prod[i]){
			for (var j in Prod[i][k]){
				if (String(Prod[i][k][j]).toLowerCase().indexOf(keyword) >=0){
					found+=1;
					if (found===1){
						createRow("search-row");
					}
					createObj(Prod[i][k],"search-row");
				}
			}
		}
	}
	return found;
}


let book1 = new Book("The Stranger", "Novel", "cdn/img/the-stranger.jpeg", 10, ["El Sherouq library", "Alef Library"]);

let book2 = new Book("A storm of Swords", "Novel", "cdn/img/got.jpg", 15, ["El Sherouq library", "Alef Library"]);

let book3 = new Book("Thus Spoken Zradustra", "Philosophy", "cdn/img/nitshe", 100, ["El Sherouq library", "Alef Library"]);

let Album1 = new Album("Best of Nirvana", "Alt-Rock", "cdn/img/Nirvana.png", 10, ["Itunes", "Spotify"]);

let Album2 = new Album("Wish You Were Here", "Rock", "cdn/img/Pink.png", 15, ["Itunes", "Spotify"]);

let books=[book1, book2, book3];
let albums=[Album1, Album2];
let Prod = {
	"books":books,
	"albums":albums
}
var keyNames = Object.keys(Prod);
$(document).ready(() => {
    $("#header1").load("header.html");
    $("#footer").load("footer.html");
    populateNav(Prod);
    $('.dropdown-item').click(function(event){
        event.preventDefault();
    	let clicked_class = event.target.id;
    	$(".content").html("");
    	createRow(clicked_class+'-row');
    	if (clicked_class==='books'){
    		for (let i = Prod.books.length - 1; i >= 0; i--) {
    			createObj(Prod.books[i],clicked_class+'-row');
    		}
    	}else if(clicked_class==='albums'){
    		for (let i = Prod.albums.length - 1; i >= 0; i--) {
    			createObj(Prod.albums[i],clicked_class+'-row');
    		} 		
    	}else{
    		for (let i = Prod.books.length - 1; i >= 0; i--) {
    			createObj(Prod.books[i],clicked_class+'-row');
    		}
    		for (let i = Prod.albums.length - 1; i >= 0; i--) {
    			createObj(Prod.albums[i],clicked_class+'-row');
    		}
    	}
    });

    $('#srch-btn').on('click', () => {
    	let current_query = $('#srch-box').val().toLowerCase();
		$(".content").html("");
		if (search(current_query,Prod)=== 0){
			$('<h3> No Result Found</h3>').appendTo($('.content'));
		}
    });

    $('#add-btn').on('click',()=>{
    	$('#add-form').toggleClass('notActive', 'Active');
    });
});
