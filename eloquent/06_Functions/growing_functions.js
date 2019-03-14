function printFarmInventory (cows){
    let cowString = String(cows);
    while (cowString.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
}

function Second(cow, chicken, pig){
    console.log(printFarmInventory(cow))
    console.log(printFarmInventory(chicken))
    console.log(printFarmInventory(pig))
}
Second(3,5,6)
   