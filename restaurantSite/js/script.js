(function(window){
var dc = {};

var homeHtml = "snippets/home-snippet.html";

var allCategoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";

var allMenuItemsUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
var menuItemTitleHtml = "snippets/menu-item-title-snippet.html";
var menuItemHtml = "snippets/menu-item-snippet.html";

var aboutHtml = "snippets/about-snippet.html";
var awardsHtml = "snippets/awards-snippet.html";

function insertHtml (selector,html){
	document.querySelector(selector).innerHTML = html;
}

function loadingSign (id) {
	html = "<div class='text-center'><img src='images/ajax-loader.gif' alt='Just a loading sign' ";
	html += "width='100' height='100' style='margin-bottom:40px;'></div>";
	insertHtml(id,html);
}

function insertProperty(string,replaceThis,withThis){
	var addBrackets = "{{" + replaceThis + "}}";
	string = string.replace(new RegExp(addBrackets,"g") , withThis);
	return string;
}

function applyActiveTo(selector){
	for(var i=0; i<document.querySelectorAll(".fullWidthNav").length; i++){
		document.querySelectorAll(".fullWidthNav")[i].classList.remove("active");
	};
	document.querySelector(selector).classList.add("active");
}


//home page
document.addEventListener("DOMContentLoaded",function(event){

	loadingSign("#maincontent");

	ajaxUtils.sendGetRequest(homeHtml,function(content){
		document.querySelector("#maincontent").innerHTML = content;			
	},false);
});
//home page ends


//menuCategories page starts
dc.loadMenuCategories= function(){

	loadingSign("#maincontent");
	
	ajaxUtils.sendGetRequest(allCategoriesUrl,buildAndShowCategories,true);

	applyActiveTo("#navbartoggle>ul>li:nth-child(2)");
}

function buildAndShowCategories(categoriesJsonCode){
	ajaxUtils.sendGetRequest(categoriesTitleHtml,function(categoriesTitleCode){
		ajaxUtils.sendGetRequest(categoryHtml,function(categoryCode){
			var categoriesViewHtml = 
				buildCategoriesViewHtml(categoriesJsonCode,categoriesTitleCode,categoryCode);
			insertHtml("#maincontent",categoriesViewHtml);
		},false);

	},false);

}

function buildCategoriesViewHtml(categoriesJsonCode,categoriesTitleCode,categoryCode){
	var finalHtml = categoriesTitleCode;
	finalHtml += "<div class='row'>";
	for(var i=0; i<categoriesJsonCode.length; i++){
		var intermediateHtml = categoryCode;
		var serverCode = categoriesJsonCode[i];
		intermediateHtml = 
			insertProperty(intermediateHtml,"short_name",categoriesJsonCode[i].short_name);
		intermediateHtml = 
			insertProperty(intermediateHtml,"name",categoriesJsonCode[i].name);

	finalHtml += intermediateHtml;
	}

	finalHtml += "</div>"
	return finalHtml;
}
//menuCategories page ends


//singleCategories page starts
dc.loadMenuItems = function(shortName){

	loadingSign("#maincontent");

	var menuItemUrl = allMenuItemsUrl + shortName;
	ajaxUtils.sendGetRequest(menuItemUrl,buildAndShowMenuItemsHtml,true);

	applyActiveTo("#navbartoggle>ul>li:nth-child(2)");

};

function buildAndShowMenuItemsHtml(menuItemJsonCode){
	ajaxUtils.sendGetRequest(menuItemTitleHtml,function(menuItemTitleCode){
		ajaxUtils.sendGetRequest(menuItemHtml,function(menuItemCode){
			var MenuItemsViewHtml = 
				buildMenuItemsViewHtml(menuItemJsonCode,menuItemTitleCode,menuItemCode);
			insertHtml("#maincontent",MenuItemsViewHtml);

		},false);

	},false);
}

function buildMenuItemsViewHtml(json,menuItemTitleCode,menuItemCode) {
	var finalHtml = insertProperty(menuItemTitleCode,"name",json.category.name);
	finalHtml = 
		insertProperty(finalHtml,"special_instructions",json.category.special_instructions);
	finalHtml += "<div class='row'>";
	for(var i=0; i<json.menu_items.length; i++){
		var html = menuItemCode;
		html = insertProperty(html,"short_name",json.menu_items[i].short_name);
		html = insertProperty(html,"short_name_cat",json.category.short_name);
		html = insertProperty(html,"name",json.menu_items[i].name);
		html = insertProperty(html,"description",json.menu_items[i].description);

		html = insertPrice(html,"price_small",json.menu_items[i].price_small);
		html = insertPortion(html,"small_portion_name",json.menu_items[i].small_portion_name);
		html = insertPrice(html,"price_large",json.menu_items[i].price_large);
		html = insertPortion(html,"large_portion_name",json.menu_items[i].large_portion_name);

		finalHtml += html;
	}
	finalHtml += "</div>";
	return finalHtml;

}

function insertPrice(string ,replaceThis, withThis) {
	if(withThis){
		return insertProperty(string, replaceThis, "$" + withThis);
	}
	else{
		return insertProperty(string,replaceThis,"");
	}
}
function insertPortion(string ,replaceThis, withThis) {
	if(withThis){
		return insertProperty(string, replaceThis, "(" + withThis + ")");
	}
	else{
		return insertProperty(string,replaceThis,"");
	}
}
//singleCategories page ends

//about
dc.loadAbout = function(){
	loadingSign("#maincontent");	

	ajaxUtils.sendGetRequest(aboutHtml,function(html){
		insertHtml("#maincontent",html);

	},false);

	applyActiveTo("#navbartoggle>ul>li:nth-child(3)");

}
//about page ends

//awards
dc.loadAwards = function(){
	loadingSign("#maincontent");

	ajaxUtils.sendGetRequest(awardsHtml,function(html){
		insertHtml("#maincontent",html);

	},false);

	applyActiveTo("#navbartoggle>ul>li:nth-child(4)")
}



window.dc = dc;
})(window);
//awards page ends










//For making the navbar button on small screen collapse after you click elsewhere
// document.querySelector("#navbarcollapse").addEventListener("blur",
// 	function(event){
// 		var screenSize = window.innerWidth;
// 		if (screenSize < 768){
// 			$("#navbarcollapse").collapse('hide');
// 		}
// 	}
//	)









