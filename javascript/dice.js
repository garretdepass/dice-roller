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




//function used to add a new die to a column based on the dieType argument. Taken from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function addDie (dieType) {
    //set string that passes integer from dieType to new variable
    const columnNameString = "d" + dieType + "-column";
    //sets value of variable to create a div element for a new die
    const newDie = document.createElement('div');
    //sets variable to create a div element to contain the die value within newDie
    const newDieTypeContainer = document.createElement('div');
    //sets variable to create a div element to contain the die roll result within newDie
    const dieRollResultContainer = document.createElement('div');
    //sets value of variable to create a line of text for the die type with the die type
    const newDieType = document.createTextNode("d" + dieType);
    //creates a variable that will contain a line of text with the value of the die when rolled.
    const dieRollResult = document.createTextNode("some text for now");
    // adds new child element declared earlier to element gotten by ID
    document.getElementById(columnNameString).appendChild(newDie);
    // adds the container for the die type applied earlier
    newDie.appendChild(newDieTypeContainer);
    // adds the die type applied earlier
    newDieTypeContainer.appendChild(newDieType);
    // adds the conntainer for the (for now empty) roll result applied earlier
    newDie.appendChild(dieRollResultContainer);
    // adds the (for now empty) roll result applied earlier
    dieRollResultContainer.appendChild(dieRollResult);
    // applies a class based on the die type
    newDie.classList.add('d' + dieType);
    newDie.classList.add('die');
}

// function that rolls all dice in a single column
function rollDieColumn(sides) {
    const columnRollOutput = document.getElementById("d" + sides + "-total");
    let diceCount = document.getElementById("d" + sides + "-column").childElementCount;
    console.log(diceCount);
    var rollResult = [];
    for(let i = 0; i < diceCount; i++) {
        rollResult[i] = Math.ceil(Math.random() * sides);
    }
    let columnSum = rollResult.reduce(function (a, b) {
        return a + b;
      }, 0);
    columnRollOutput.textContent = columnSum; 
}

// function that loops through all columns, rolling each one in turn and returns the total
function rollAllDice() {
    const d4Count = document.getElementById("d" + 4 + "-column").childElementCount;

}



// function to summon a series of presets (4 d10 and 1 d6)
// "quickness check"
// on the fly, add whatever type of die to any given template


// cheat sheet (random tip loaded per session?)
// - how to use fate chips to soak wounds
// - raising the pot is a thing, and how it works



// result is not the sum of all dice, but the highest result of all dice rolled (e.g. a 3, a 3, and a 5 would result in a 5)



// "Bust" = when you roll more 1's than anything else
// - be able to answer "did I go bust" for any roll



//Fate chips always happen after a roll:
// - white: roll one additional die (not rerolling anything else). All dice rolled can explode
// - red/blue: can roll another die of the same type as the set and add it to the current result's running total
// - keep track of how many fate chips used in a session (white, red, and blue)


// "Explode" = each time a die roll results in the highest number (an ace), the result is recorded and the die is rerolled. That result is added to the running total for the roll. Exploding could go on for ever. All dice rolled can explode.