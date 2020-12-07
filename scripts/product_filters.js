let checkdoxes = [];
let products = [];

function checkedChange(){
	if(!checkdoxes[0].checked && !checkdoxes[1].checked && !checkdoxes[2].checked && !checkdoxes[3].checked){
		for(let i = 0; i<products.length; i++){
			products[i].style.visibility = "visible";
			products[i].style.position = "relative";
		}
		return;
	}
	for(let i = 0; i<products.length; i++){
		if(products[i].classList.contains("milk")){
			if(checkdoxes[0].checked){
				products[i].style.visibility = "visible";
				products[i].style.position = "relative";
			}
			else{
				products[i].style.visibility = "hidden";
				products[i].style.position = "absolute";
			}
		}
		if(products[i].classList.contains("dark")){
			if(checkdoxes[1].checked){
				products[i].style.visibility = "visible";
				products[i].style.position = "relative";
			}
			else{
				products[i].style.visibility = "hidden";
				products[i].style.position = "absolute";
			}
		}
		if(products[i].classList.contains("white")){
			if(checkdoxes[2].checked){
				products[i].style.visibility = "visible";
				products[i].style.position = "relative";
			}
			else{
				products[i].style.visibility = "hidden";
				products[i].style.position = "absolute";
			}
		}
		if(products[i].classList.contains("mix")){
			if(checkdoxes[3].checked){
				products[i].style.visibility = "visible";
				products[i].style.position = "relative";
			}
			else{
				products[i].style.visibility = "hidden";
				products[i].style.position = "absolute";
			}
		}
	}
}


function checkboxLoad(){
	products = document.querySelectorAll(".product_item");
	checkdoxes.push(document.querySelector(".checkbox_type.milk"));
	checkdoxes.push(document.querySelector(".checkbox_type.dark"));
	checkdoxes.push(document.querySelector(".checkbox_type.white"));
	checkdoxes.push(document.querySelector(".checkbox_type.mix"));
}

window.addEventListener("load", checkboxLoad);