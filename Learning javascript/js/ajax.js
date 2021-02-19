(function(window){
var ajaxUtils = {};

ajaxUtils.sendGetRequest = function(requestUrl,responseHandler,isJsonResponse){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if( this.readyState == 4 && this.status == 200 ){
			if(isJsonResponse == undefined){
				isJsonResponse = true;
			}
			if( isJsonResponse){
				responseHandler(JSON.parse(xhttp.responseText));
			}
			else{
				responseHandler(xhttp.responseText);
			}
		}
	}
	xhttp.open("GET",requestUrl,true);
	xhttp.send();
}

window.ajaxUtils=ajaxUtils;
}
)(window);












