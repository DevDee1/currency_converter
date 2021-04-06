function Converter(){
var num1= parseInt(document.querySelector(".naira").value);	
var operation = document.querySelector(".currency").value;
var compute;
if (operation == "pou"){
	compute = num1 / 494.70;
}	
else if (operation == "eur"){
	compute = num1 / 453.46;
}else if (operation == "dol"){
	compute = num1 / 383;
}else if (operation == "aud"){
	compute = num1 / 279.25;
}else if (operation == "nzd"){
	compute = num1 / 259.00;
}else if (operation == "cad"){
	compute = num1 / 290.03;
}else if (operation == "yen"){
	compute = num1 / 3.66;
}else if (operation == "rup"){
	compute = num1 / 5.20;
}else if (operation == "swi"){
	compute = num1 / 420.18;
}else if (operation == "dir"){
	compute = num1 / 104.28;
}else if (operation == "sar"){
	compute = num1 / 23.45;
}else if (operation == "rur"){
	compute = num1 / 5.06;
}

		
document.querySelector(".result").value = compute;
	
}