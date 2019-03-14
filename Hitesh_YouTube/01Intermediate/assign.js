
let myGrade = function(myPoints,classPoints){
    numGrade = (myPoints/classPoints)*100

    if (numGrade >= 90){
        return 'A'
    }else if (numGrade >= 80){
        return 'B'
    }else if (numGrade >= 70){
        return 'C'
    }else if (numGrade >= 60){
        return 'D'
    }else{
        return 'F'
    }
}

const classPoints = 100
let myPoints = 55
console.log(myGrade(myPoints,classPoints))

