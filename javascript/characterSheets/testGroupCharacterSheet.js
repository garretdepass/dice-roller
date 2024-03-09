// define each player as its own object
const player1 = {
}
const player2 = {
}
const player3 = {
}
const player4 = {
}

// define a prototype that contains all properties of a trait, attribute, or concentration
const templateRow = {
    dieCount: 0,
    dieSides: 0,
    type: "",
    subTraits: [],
    name: "",
    printProperty: function () {
        console.log(this.subTraits[0].name);
    },
}

// declare a function that creates a templateRow (trait, attribute, or function) for a specific player

function createTemplateRow (playerName, templateRowObject, templateRowName, templateRowType, templateRowDieCount, templateRowDieSides) {
    
    // create and describe the object
    const templateRowObject = Object.create(templateRow)
    templateRowObject.name = templateRowName;
    templateRowObject.type = templateRowType;
    templateRowObject.dieCount = templateRowDieCount;
    templateRowObject.dieSides = templateRowDieSides;
    
    // if templateRow is a trait, add it as a property to a specific player
    if (templateRowObject.type == "trait") {
        playerName[templateRowObject] = templateRowObject;
    }
    //
    
}

createTemplateRow(player1, shootin, "shootin\'", "trait", 4, 12);
console.log(player1);











// // declare a function to create a row from the template, populate it, and then add the object as a property to the named player
// function createTemplateRow (playerName, traitName, traitType, numberOfDice, sidesOfDice, parentTrait, parentAttribute) {
    
//     switch (traitType) {
//         case "trait":
//             // add to player object
//             playerName.traitName = Object.create(templateRow)
//             playerName.traitName.name = `${traitName}`;
//             playerName.traitName.type = `${traitType}`;
//             playerName.traitName.dieCount = numberOfDice;
//             playerName.traitName.dieSides = sidesOfDice;
//             break;
//         case "attribute":
//             // add to parent trait
//             playerName.parentTrait.traitName = Object.create(templateRow)
//             playerName.parentTrait.traitName.name = `${traitName}`;
//             playerName.parentTrait.traitName.type = `${traitType}`;
//             playerName.parentTrait.traitName.dieCount = numberOfDice;
//             playerName.parentTrait.traitName.dieSides = sidesOfDice;
//             break;
//         case "concentration":
//             // add to attribute object
//             playerName.parentTrait.parentAttribute.traitName = Object.create(templateRow)
//             playerName.parentTrait.parentAttribute.traitName.name = `${traitName}`;
//             playerName.parentTrait.parentAttribute.traitName.type = `${traitType}`;
//             playerName.parentTrait.parentAttribute.traitName.dieCount = numberOfDice;
//             playerName.parentTrait.parentAttribute.traitName.dieSides = sidesOfDice;
//             break;
//         default:
//             console.log(`unknown trait type detected. Wasn't expecting ${traitType}`);
//     }
// }
