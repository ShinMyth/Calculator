var n1 = "":
var n2 = "";
var AO = "";

//Operations
function erase(){
	document.getElementById("screen").value = "";
	}
function add(){
	n2 = document.getElementById("screen").value;
	document.getElementById("screen").value = "";
	AO = "+";	
	}
function subtract(){
	n2 = document.getElementById("screen").value;
	document.getElementById("screen").value = "";
	AO = "-";		
	}
function multiply(){
	n2 = document.getElementById("screen").value;
	document.getElementById("screen").value = "";
	AO = "*";		
	}
function divide(){
	n2 = document.getElementById("screen").value;
	document.getElementById("screen").value = "";
	AO = "/";		
	}


//Result
function equals(){
	n1 = document.getElementById("display").value;
	if (AO == "+"){
		document.getElementById("display").value = parseInt(n1) + parseInt(n2);
		AO = "";
		}
	if (AO == "-"){
		document.getElementById("display").value = parseInt(n2) - parseInt(n1);
		AO = "";
		}
	if (AO == "*"){
		document.getElementById("display").value = parseInt(n2) * parseInt(n1);
		AO = "";
		}
	if (AO == "/"){
		document.getElementById("display").value = parseInt(n2) / parseInt(n1);
		AO = "";		
		}
	}

//Numbers
function one(){
	document.getElementById("display").value += "1";
	}
function two(){
	document.getElementById("display").value += "2";
	}
function three(){
	document.getElementById("display").value += "3";
	}
function four(){
	document.getElementById("display").value += "4";
	}
function five(){
	document.getElementById("display").value += "5";
	}
function six(){
	document.getElementById("display").value += "6";
	}
function seven(){
	document.getElementById("display").value += "7";
	}
function eight(){
	document.getElementById("display").value += "8";
	}
function nine(){
	document.getElementById("display").value += "9";
	}
function zero(){
	document.getElementById("display").value += "0";
	}
function dot(){
	document.getElementById("display").value += ".";
	}