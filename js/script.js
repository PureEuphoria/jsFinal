	function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getMeat(runningTotal,text1);
};


function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVegie(runningTotal,text1);
};		
	
function getVegie(runningTotal,text1) {
	var vegieTotal = 0;
	var selectedVegie = [];
	var vegieArray = document.getElementsByClassName("vegies");
	for (var k = 0; k < vegieArray.length; k++) {
		if (vegieArray[k].checked) {
			selectedVegie.push(vegieArray[k].value);
			console.log("selected vegie item: ("+vegieArray[k].value+")");
			text1 = text1+vegieArray[k].value+"<br>";
		}
	}
	var vegieCount = selectedVegie.length;
	if (vegieCount > 1) {
		vegieTotal = (vegieCount - 1);
	} else {
		vegieTotal = 0;
	}
	runningTotal = (runningTotal + vegieTotal);

	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getSauce(runningTotal,text1);
	getCheese(runningTotal,text1);

};
	
function getSauce() {
	var text2 = "<h5> With: </h5>"
	var sauceArray = document.getElementsByClassName("sauce");
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSauce = sauceArray[i].value;
			text2 = text2+selectedSauce+"<br>";			
		}
	}
	document.getElementById("showText2").innerHTML=text2;

};

	

	
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var m = 0; m < cheeseArray.length; m++) {
		if (cheeseArray[m].checked) {
			var selectedCheese=(cheeseArray[m].value);
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		runningTotal = runningTotal + 3;
	} 
	else
	{ cheeseTotal = 0; 
}

	runningTotal = (runningTotal + cheeseTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCrust(runningTotal,text1);
};	

function getCrust(runningTotal,text1) {
	var crusTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var n = 0; n < crustArray.length; n++) {
		if (crustArray[n].checked) {
			var selectedCrust=(crustArray[n].value);
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed") {
		runningTotal = runningTotal + 3;
	} 
	else
	{ crustTotal = 0; 
}
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	
	
		

	
	
	
	
	
	
	
	