const prime_numbers = 20;
const max = 1000;
let _number = prompt("Schreiben Sie eine Zahl, die gleich 20 oder größer ist",20);
let number = Number(_number);
let numC = [];


if (number>1000) {
	alert("Es ist viele, besser 1000.");
	number=1000;
} else {
	if (number<20){
		alert("Es ist reicht nicht, es werden 20.");
		number=20;
	}
	else{
		let number = Number(_number);
	}
}

function prime_nums(){
		console.log('Hola')
	}

window.onload = function createBtn(){
	var sieve = document.getElementById("sieve");
	for (var i = 1; i <= number; i++) {
		var btn = document.createElement("button");
		btn.textContent=(i);
		btn.value="p"+i;
		btn.className="mult";
		sieve.appendChild(btn);
		}
	}
	
function prime(nummer) {
	for(i=1; i <= number; i++){
		if(i % nummer == 0 && numC.includes(i) == false){
			document.getElementById("p"+i).className="mult"+i;
			numC.push(i);
		}
	}
}



	