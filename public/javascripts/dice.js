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


const newDieObject = {
    sides: 4,
    rollResult: 1,
    isAce: false,
    isBonus: false,
    rollDie: function(sides) {
        this.rollResult = Math.ceil(Math.random() * sides);
        console.log("sides on this die are " + sides)
        console.log("object-level roll result is " + this.rollResult)
    }
}

let d4Column = []
let d4Count = 0
let d6Count = 0
let d8Count = 0
let d10Count = 0
let d12Count = 0
let d20Count = 0







//CURRENTLY TRYING TO FIGURE OUT HOW TO ADD THE ROLL RESULT TO AN INDIVIDUAL 
//DIE. INVESTIGATING HOW TO ADD A DIE OBJECT TO THE D4COLUMN ARRAY, 
//AND THEN INCREMENT THE ARRAY'S INDEX EACH TIME THE FUNCTION IS CALLED.






//function used to add a new die to a column based on the dieType argument. Taken from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function addDie (dieType) {

    // Creates a new object from newDieObject prototype
    const die = Object.create(newDieObject);
    d4Column[0] = die
    die.sides = dieType;
    die.rollDie(dieType);
    console.log(d4Column[0] + "is the die, and it has " + d4Column[0].sides + " sides.")
    console.log("the type of die I'm _trying_ to roll is a d" + die.sides)
    

    // Increments the correct die count based on dieType
    switch (dieType) {
        case 4:
            d4Count = d4Count + 1;
            console.log(d4Count)
            break;
        case 6:
            d6Count = d6Count + 1;
            console.log(d6Count)
            break;
        case 8:
            d8Count = d8Count + 1;
            console.log(d8Count)
            break;
        case 10:
            d10Count = d10Count + 1;
            console.log(d10Count)
            break;
        case 12:
            d12Count = d12Count + 1;
            console.log(d12Count)
            break;
        case 20:
            d20Count = d20Count + 1;
            console.log(d20Count)
            break;
      }


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
    //creates a variable that will represent a roll result
    let rollResult = "placeholder text to be replaced by later roll result"
    //creates a variable that will contain a line of text with the value of the die when rolled.
    const dieRollResultText = document.createTextNode(rollResult);
    // adds new child element declared earlier to element gotten by ID
    document.getElementById(columnNameString).appendChild(newDie);
    // adds the container for the die type applied earlier
    newDie.appendChild(newDieTypeContainer);
    // adds the die type applied earlier
    newDieTypeContainer.appendChild(newDieType);
    // adds the conntainer for the (for now empty) roll result applied earlier
    newDie.appendChild(dieRollResultContainer);
    // adds the (for now empty) roll result applied earlier
    dieRollResultContainer.appendChild(dieRollResultText);
    // applies a class based on the die type
    newDie.classList.add('d' + dieType);
    newDie.classList.add('die');
}


// function that rolls all dice in a single column and returns the highest value
function rollDieColumnHighestValue(sides) {
    const columnRollOutput = document.getElementById("d" + sides + "-runningTotal");
    var rollResult = [];
    let diceCount = d4Count // change this to something like a switch later to make it play with all counters
    for(let i = 0; i < diceCount; i++) {
        rollResult[i] = Math.ceil(Math.random() * sides);
    }
    let highestResult
    for(let i = 0; i < diceCount; i++) {
        if(rollResult[i] === sides) {
            addDie(sides);
            highestResult = sides;
            columnRollOutput.textContent = "the highest number is " + highestResult;
            console.log(rollResult[i])

        }
        else {
            columnRollOutput.textContent = "the highest number is " + rollResult[i];
            console.log(rollResult[i]) 
            console.log("function working, but no d" + sides + "s")
        }
    }
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