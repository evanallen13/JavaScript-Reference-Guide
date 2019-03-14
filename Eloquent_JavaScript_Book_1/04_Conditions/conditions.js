
function gr (grade) {
	if (grade === 'A'){
		return 4
	}else if (grade === 'B'){
		return 3
	}else if (grade === 'C'){
		return 2
	}else if (grade === 'D'){
		return 1
	}else {
		return 0
	}
}

let grade = prompt("Enter Letter Grade: ")

alert("Your Number grade is: " + gr(grade))