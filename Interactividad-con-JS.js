const prime_numbers = 20;
const max = 1000;
let _number = prompt("Schreiben Sie eine Zahl, die gleich 20 oder größer ist", 20);
let number = Number(_number);
let numC = [];
var btnNup = document.getElementById("btnNp");
var btnCl = document.getElementById("btnC");

if (number > 1000) {
	alert("Es ist viele, besser 1000.");
	number = 1000;
} else {
	if (number < 20) {
		alert("Es ist reicht nicht, es werden 20.");
		number = 20;
	} else {
		let number = Number(_number);
	}
}

window.onload = function createBtn() {
	var sieve = document.getElementById("sieve");
	for (i = 1; i <= number; i++) {
		var btn = document.createElement("button");
		btn.textContent = (i);
		btn.id = "p" + i;
		btn.className = "mult";
		sieve.appendChild(btn);
	}
	for (i = 31; i > Math.sqrt(number); i--) {
		btnu = document.getElementById("btn"+i);
		remove = btnu.parentNode;
		remove.removeChild(btnu);
	}
}

function prime(nummer) {
	for (i = 1; i <= number; i++) {
		if (i % nummer == 0 && numC.includes(i) == false) {
			document.getElementById("p" + i).className = "mult" + nummer+ " mult";
			numC.push(i);
		}
	}
}

let count = 0;
let primeNumbs = [];
let currentN = 0;

btnNup.onclick = function () {
	for (currentN = 2; currentN <= number; currentN++) {
		for (j = 1; j <= currentN; j++) {
			if (currentN % j == 0) {
				count++;
			}
		}
		if (count == 2 && primeNumbs.includes(currentN) == false) {
			document.getElementById("p" + currentN).className = "mult multP";
			primeNumbs.push(currentN);
			numC.push(currentN);
			count = 0;
		} else if (count > 2) {
			count = 0;
		}
	}
}
btnCl.onclick = function () {
	for (i = 1; i <= number; i++) {
		document.getElementById("p" + i).className = "mult";
		primeNumbs.splice(0, number);
		numC.splice(0, number);
	}
}
