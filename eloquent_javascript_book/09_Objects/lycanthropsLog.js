let journal = []

function addEntry(events, squirrel){
    journal.push({events, squirrel})
}

addEntry(['work', 'touched tree', 'pizza', 'running', 'televison'], false)
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false)
addEntry(['weekend', 'cycling', 'pizza', 'break', 'peanuts','beer'], true)

console.log(journal[0])

