// document.addEventListener("DOMContentLoaded", 
// 	function (event) {



// 		function sayHello (event) {
// 			this.textContent="Executed";
// 			var input = document.getElementById("box").value;
// 			// console.log("Hello " + input);
// 			if(input=="John Cena"){
// 			var message= "<h2>Hello " + document.getElementById("box").value + "!</h2><p> I am a huge fan, sir!!!</p>";
// 			document.getElementById("content").innerHTML = message;
// 			}
// 			else{	if(input=="student"){
// 						var message="Hello Student!!";
// 						document.getElementById("title").innerHTML= "Learning JS and having fun";
// 						document.getElementById("content").textContent= message;
// 					}
// 					else{						
// 						var message= "Hello " + document.getElementById("box").value + "!";
// 						document.querySelector("#content").innerHTML = message;	
// 					}	
// 			}

// 		}

// 		document.querySelector("button").addEventListener("click",sayHello);

// 		document.querySelector("body").addEventListener("mouseover",
// 			function (event) {
// 				if(event.shiftKey == true) {
// 					console.log("x: " + event.screenX);
// 					console.log("y: " + event.screenY);
// 				}
// 			}

// 		);


// 	}
// );


document.addEventListener("DOMContentLoaded",
function(event){

	document.querySelector("button").addEventListener("click",
	function(){
		ajaxUtils.sendGetRequest("/name.json",
		function(Person){
			document.querySelector("#content").innerHTML = "Hello " + Person.firstName + " " + Person.lastName 
				+ "!<br>My age is " + Person.age;
		},true);

	});

 


});
















