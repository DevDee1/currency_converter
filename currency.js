function Converter(){
var num1= parseInt(document.querySelector(".naira").value);	
var operation = document.querySelector(".currency").value;
var compute;
if (operation == "pou"){
	compute = num1 /1893.96;
}	
else if (operation == "eur"){
	compute = num1 / 1598.10;
}else if (operation == "dol"){
	compute = num1 /1558.13;
}else if (operation == "aud"){
	compute = num1 / 957.31;
}else if (operation == "nzd"){
	compute = num1 /866.48;
}else if (operation == "cad"){
	compute = num1 /1080.09;
}else if (operation == "yen"){
	compute = num1 / 9.84;
}else if (operation == "rup"){
	compute = num1 / 18.08;
}else if (operation == "swi"){
	compute = num1 / 1700.11;
}else if (operation == "dir"){
	compute = num1 /424.21;
}else if (operation == "sar"){
	compute = num1 / 81.17;
}else if (operation == "rur"){
	compute = num1 / 15.33;
}

		
document.querySelector(".result").value = compute;
	
}
