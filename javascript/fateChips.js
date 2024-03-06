const blueChip = {
    count: 0,
    name: "blueChip",
}

const redChip = {
    count: 0,
    name: "redChip",
}

const whiteChip = {
    count: 0,
    name: "whiteChip",
}

blueChip.htmlElement = document.getElementById("blueChip"),
redChip.htmlElement = document.getElementById("redChip"),
whiteChip.htmlElement = document.getElementById("whiteChip"),

blueChip.text = document.createTextNode(blueChip.count)
redChip.text = document.createTextNode(redChip.count)
whiteChip.text = document.createTextNode(whiteChip.count)

blueChip.htmlElement.appendChild(blueChip.text)
redChip.htmlElement.appendChild(redChip.text)
whiteChip.htmlElement.appendChild(whiteChip.text)


function spendChip (chipColor) {
    switch (chipColor) {
        case 1:
            addExplodingRow(1, 1, adjustedTraitDieSides)
            blueChip.count = blueChip.count - 1;
            blueChip.htmlElement.textContent = blueChip.count;
            break;
            case 2:
                addExplodingRow(1, 1, adjustedTraitDieSides)
                redChip.count = redChip.count - 1;
                redChip.htmlElement.textContent = redChip.count;
                break;
// this stuff is getting funky!!! got the others working (I think) but still need a lot of work on this bad boi.
        case 3:
            adjustedTraitDieCount = adjustedTraitDieCount + 1;
            let chipDieIndex = adjustedTraitDieCount - 1;
            console.log(adjustedTraitDieCount + " is the new adjusted die count");
            whiteChip.count = whiteChip.count - 1;
            whiteChip.htmlElement.textContent = whiteChip.count;
            const rollRow = document.getElementById("mainRollRow")
            addDice(1, adjustedTraitDieSides, rollRow);
            var chipDie = document.getElementById(`row0die${chipDieIndex}Text`)
            whiteChipHighestRoll = Math.ceil(Math.random() * chipDieIndex);
            chipDie.textContent = whiteChipHighestRoll

            if (newRoll > runningRollTotal) {
                const rollResultText = document.getElementById("rollResultInteger");
                rollResultText.textContent = newRoll;
            }

            break;
        default:
            console.log("chip color not red, white, or blue");
    }
}

function addChipCount (chipColor) {
    switch (chipColor) {
        case 1:
            blueChip.count = blueChip.count + 1;
            blueChip.htmlElement.textContent = blueChip.count;
            break;
        case 2:
            redChip.count = redChip.count + 1;
            redChip.htmlElement.textContent = redChip.count;
            break;
        case 3:
            whiteChip.count = whiteChip.count + 1;
            whiteChip.htmlElement.textContent = whiteChip.count;
            console.log("it's using the right switch");
            break;
        default:
            console.log("chip color not red, white, or blue");
    }
}

function subtractChipCount (chipColor) {
    switch (chipColor) {
        case 1:
            blueChip.count = blueChip.count - 1;
            blueChip.htmlElement.textContent = blueChip.count;
            break;
        case 2:
            redChip.count = redChip.count - 1;
            redChip.htmlElement.textContent = redChip.count;
            break;
        case 3:
            whiteChip.count = whiteChip.count - 1;
            whiteChip.htmlElement.textContent = whiteChip.count;
            console.log("turns out the quotes need to be after case");
            break;
        default:
            console.log("chip color not red, white, or blue");
    }
}