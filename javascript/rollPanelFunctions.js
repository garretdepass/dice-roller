let aceCount = 0;
var naturalTraitDieCount;
var naturalTraitDieSides;
var adjustedTraitDieCount;
var adjustedTraitDieSides;
let rollRowCount = 0;
var runningRollTotal = 0;
var currentPenalty = 0;
var bustCount = 0;
var isBust = false;




function reportBust () {
    const bustContainer = document.getElementById("bustContainer");

    if (bustCount > adjustedTraitDieCount / 2) {
        isBust = true;
    } else {
        isBust = false;
    };

    if (isBust) {
        bustContainer.hidden = false;
    } else {
        bustContainer.hidden = true;
    };
}

// function that adds a new row to the roll panel
function addRollRow(numberOfDice, numberOfSides) {

    // set the location that rollRow will be added
    const rollRowContainer = document.getElementById("rollRowContainer");

    // create new div elements with attributes
    const newRollRow = document.createElement("div");
    newRollRow.setAttribute("id", "mainRollRow");
    newRollRow.setAttribute("class", "rollRow")    


    
    // put the div elements onto the page
    rollRowContainer.appendChild(newRollRow)
    
    // add dice to rollRow
    for (let i = 0; i < numberOfDice; i++) {
        
        // add an SVG canvas to rollRow, full width of parent
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns","http://www.w3.org/2000/svg")
        svg.setAttribute('width',56);
        svg.setAttribute('height',86);
        svg.setAttribute("overflow","visible")
        newRollRow.appendChild(svg);

        // generate shape based on number of sides of die
        switch (numberOfSides) {
            case 4:
                var dieShape = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path",
                  );
                dieShape.setAttribute('width',64);
                dieShape.setAttribute('height',56);
                dieShape.setAttribute("transform","translate(-14,-10)");
                dieShape.setAttribute("viewBox","0 0 64 56")
                dieShape.setAttribute("d","M28.5359 2C30.0755 -0.666665 33.9245 -0.666667 35.4641 2L63.1769 50C64.7165 52.6667 62.792 56 59.7128 56H4.28719C1.20799 56 -0.716517 52.6667 0.823084 50L28.5359 2Z")
                dieShape.classList.add("die", `dieType-d${numberOfSides}`);
                break;
            case 6:
                var dieShape = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                  );
                dieShape.setAttribute('width',56);
                dieShape.setAttribute('height',56);
                dieShape.setAttribute("rx",4);
                dieShape.setAttribute("transform","translate(0,13)");
                dieShape.classList.add("die", `dieType-d${numberOfSides}`);
                break;
            case 8:
                var dieShape = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path",
                  );
                dieShape.setAttribute('width',66);
                dieShape.setAttribute('height',86);
                dieShape.setAttribute("transform","translate(-4,0)");
                dieShape.setAttribute("d","M29.7744 2.39857C31.3726 0.219177 34.6274 0.219179 36.2256 2.39857L64.2653 40.6345C65.2978 42.0425 65.2978 43.9575 64.2653 45.3655L36.2256 83.6014C34.6274 85.7808 31.3726 85.7808 29.7744 83.6014L1.73467 45.3655C0.702161 43.9575 0.70216 42.0425 1.73467 40.6345L29.7744 2.39857Z")
                dieShape.classList.add("die", `dieType-d${numberOfSides}`);
                break;
            case 10:
                var dieShape = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                  );
                dieShape.setAttribute('width',56);
                dieShape.setAttribute('height',56);
                dieShape.setAttribute('fill','purple');
                dieShape.classList.add("die", `dieType-d${numberOfSides}`);
                break;
            case 12:
                var dieShape = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                  );
                dieShape.setAttribute('width',56);
                dieShape.setAttribute('height',56);
                dieShape.setAttribute('fill','purple');
                dieShape.classList.add("die", `dieType-d${numberOfSides}`);
                break;
            case 20:
                var dieShape = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect",
                  );
                dieShape.setAttribute('width',56);
                dieShape.setAttribute('height',56);
                dieShape.setAttribute('fill','purple');
                dieShape.classList.add("die", `dieType-d${numberOfSides}`);
                break;
            default:
                console.log("Die not covered");
        }
        
        // generate text to put in die
        var text = document.createElementNS("http://www.w3.org/2000/svg", "text")
        text.setAttribute("x",28);
        text.setAttribute("y",49);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("class","dieText");
        text.setAttribute("id",`row${rollRowCount}die${i}Text`);
        var dieContent = document.createTextNode(`d${numberOfSides}`);
        
        // attach it all to the SVG
        text.appendChild(dieContent);
        svg.appendChild(dieShape);
        svg.appendChild(text);
    }
}


// may need to pull this out into a separate penalties.js if there's anything else besides untrained.
function setPenalty () {
    
    // define variables for the penalty text and count
    const penaltyText = document.getElementById("penaltyText");
    const penaltyCount = document.getElementById("penaltyCount");

    // if the row is in an untrained skill, apply a penalty and display penalty message
    if (naturalTraitDieCount == 0) {
        adjustedTraitDieCount = 1;
        currentPenalty = currentPenalty - 4;
        document.getElementById("penaltyText").hidden = false;
        penaltyCount.textContent = currentPenalty;
        console.log(`adjusted trait die count is ${adjustedTraitDieCount} and current penalty (${currentPenalty}) was adjusted successfully`)
    } else {
        currentPenalty = 0;
        console.log("no penalty added")
        document.getElementById("penaltyText").hidden = true;
    }


}

// Called when adding a new main roll row (clicking on a template row)
function addMainRollRow(numberOfDice, numberOfSides) {

    // set global variable for die count and die sides equal to scoped variable
    naturalTraitDieCount = numberOfDice;
    naturalTraitDieSides = numberOfSides;
    adjustedTraitDieCount = numberOfDice;
    adjustedTraitDieSides = numberOfSides;

    // remove any existing rollRows and penalties
    const rollRowContainer = document.getElementById("rollRowContainer");
    rollRowContainer.replaceChildren();
    rollRowCount = 0;
    currentPenalty = 0
    
    // reset any roll result text
    document.getElementById("rollResult").hidden = true;
    const rollButton = document.getElementById("rollButton");
    rollButton.textContent = "Roll";
    document.getElementById("rollButton").disabled = false;
    document.getElementById("penaltyText").hidden = true;
    
    //hide helper text
    document.getElementById("helperText").hidden = true;
    

    // deal with any penalties
    setPenalty();
    
    //add a row with the adjusted (in case of penalty) number of dice
    addRollRow(adjustedTraitDieCount, adjustedTraitDieSides)

}

// function to add a roll row when dice explode
function addExplodingRow(numberOfExplosions, numberOfDice, numberOfSides) {
    rollRowCount = rollRowCount + 1;
    addRollRow(numberOfExplosions, numberOfSides);
    rollDice(numberOfExplosions, numberOfSides);
}


function clickRoll(naturalTraitDieCount, numberOfSides) {
    runningRollTotal = 0;
    bustCount = 0;
    isBust = false;
    bustContainer.hidden = true;
    console.log(`just hid bust container. for the record, isBust is ${isBust} and bustContainer hidden is ${bustContainer.hidden}`)
    rollDice(adjustedTraitDieCount, numberOfSides);
    console.log("just hit clickRoll. adjusted trait die count is " + adjustedTraitDieCount);
    console.log("just hit clickRoll. Current running total is " + runningRollTotal)
    const rollButton = document.getElementById("rollButton")
    rollButton.setAttribute("onClick", "reRoll(naturalTraitDieCount, naturalTraitDieSides)")
    reportResult();
}

function reRoll() {
    runningRollTotal = 0;
    bustCount = 0;
    isBust = false;
    bustContainer.hidden = true;
    console.log(`just hid bust container. for the record, isBust is ${isBust} and bustContainer hidden is ${bustContainer.hidden}`)
    addMainRollRow(naturalTraitDieCount, naturalTraitDieSides);
    rollDice(adjustedTraitDieCount, adjustedTraitDieSides);
    reportResult();
}

// function to roll all dice in main row and find the highest roll result
function rollDice(numberOfDice, numberOfSides) {
    aceCount = 0;
    const rollResult = [];
    for (let i = 0; i < numberOfDice; i++) {
        let singleDieResult = Math.ceil(Math.random() * numberOfSides);
        rollResult.push(singleDieResult);
        let currentDieText = document.getElementById(`row${rollRowCount}die${i}Text`);
        currentDieText.textContent = singleDieResult;
        
        // if the die roll is the highest possible, incrememnt the ace count
        if (singleDieResult == numberOfSides) {
            aceCount = aceCount + 1;
        };

        // if the die roll is a 1, incrememnt the bust count
        if (singleDieResult == 1) {
            bustCount = bustCount + 1;
        }
        
    }
    
    if (aceCount !== 0) {
        addExplodingRow(aceCount, numberOfDice, numberOfSides)
    } 
    else {
        const rollButton = document.getElementById("rollButton");
        rollButton.textContent = "Roll Again";
    }
    
    // define variables for the penalty text and count
    const penaltyText = document.getElementById("penaltyText");
    const penaltyCount = document.getElementById("penaltyCount");
    
    
    
    // find the highest value in the roll and display in DOM
    const highestRoll = rollResult.reduce((a, b) => Math.max(a, b), -Infinity);
    runningRollTotal = runningRollTotal + highestRoll;
}

function reportResult () {
    const adjustedRollResult = runningRollTotal + currentPenalty;
    document.getElementById("rollResult").hidden = false;
    const rollResultText = document.getElementById("rollResultInteger");
    rollResultText.textContent = adjustedRollResult;
    reportBust();

}


