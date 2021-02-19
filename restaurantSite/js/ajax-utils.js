(function(window){

var ajaxUtils = {};

ajaxUtils.sendGetRequest = function (url,handlerfunction,isjson) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(isjson){
            	handlerfunction(JSON.parse(xhttp.responseText));
            }
            else{
            	handlerfunction(xhttp.responseText);
            }
       	}
    };
    xhttp.open("GET",url, true);
    xhttp.send();
}

window.ajaxUtils = ajaxUtils;

})(window);


