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
function addDie () {
    const newDie = document.createElement('div');
    const newDieValue = document.createTextNode(Math.floor(Math.random() * 20))
    newDie.appendChild(newDieValue)
    const currentDie = document.getElementById('die0')
    document.body.insertBefore(newDie, currentDie);

}