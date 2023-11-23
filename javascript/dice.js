//get the value put into the input
function getDieSides() {
    return(
        document.getElementById('dieSidesInput').value
    )
}

function rollDie() {
    const rollOutput = document.getElementById('test')
    const dieSides = getDieSides()
    const rollValue = Math.ceil(Math.random() * dieSides);
    
    if (rollValue == 20) {
        rollOutput.textContent = "Nat 20 let's go!";
    }
    else {
        rollOutput.textContent = rollValue;
    }
}




//function taken from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function addDie (dieType) {
    //set string that passes integer from dieType to new variable
    const columnNameString = "d" + dieType + "-column";
    //sets value of variable to create a div element
    const newDie = document.createElement('div');
    //sets value of variable to create a line of text with the die type
    const newDieValue = document.createTextNode("d" + dieType);
    // adds new child element declared earlier to element gotten by ID
    document.getElementById(columnNameString).appendChild(newDie);
    // adds the value applied earlier
    newDie.appendChild(newDieValue);
    // applies a class based on the die type
    newDie.classList.add('d' + dieType);
    newDie.classList.add('die');
}