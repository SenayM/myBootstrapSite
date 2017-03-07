
function displaycomment(){
        "use strict";
	document.getElementById("comment").style.display="block";
	
	document.getElementById("question").style.display="none";
	
}
function displayquestion(){
        "use strict";
	document.getElementById("comment").style.display="none";
	document.getElementById("question").style.display="block";
}

function showtime(){
        "use strict";
	var currentDate = new Date();
	var month = currentDate.getMonth() + 1;
	var day = currentDate.getDate();
	var year = currentDate.getFullYear();
	var date = month + "/" + day + "/" + year;
				  
	// Output the date to the above HTML element
	document.getElementById("date").innerHTML = date;
	}
	