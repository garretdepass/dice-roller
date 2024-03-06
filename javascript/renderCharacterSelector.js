// create an empty array of characters
var characterList = [];
var characterListIterator = 0;

// create a template object for a character
const character = {
    name: "",
    sheetSrc: "",
    imgSrc: "",
    // property to add a character to the characterList array
    appendArray: function () {
        characterList.push(this);
    },

    //property to add an avatar to the characterSelector div
    addAvatar: function (characterImgSrc) {
        const parentLocation = document.getElementById("characterSelector");
    
        const avatarImage = document.createElement("img");
        avatarImage.id = `avatar${characterListIterator}`;
        avatarImage.classList.add("avatar");
        avatarImage.src = characterImgSrc;
        parentLocation.appendChild(avatarImage);
    },
    
    // property to add an onClick event to the avatar
    addClickListener: function (characterSheetSrc) {
        const avatarImage = document.getElementById(`avatar${characterListIterator}`);
        console.log("working at this point. Character list number is " + characterListIterator);
        avatarImage.addEventListener(
            "mousedown",
            (event) => {
                var avatarList = [];
                avatarList = document.getElementsByClassName("avatar");
                for (i in avatarList.length) {
                    avatarList.classList.remove("selected");
                };
                avatarImage.classList.add("selected");
                addAllTraitSections();
                console.log("mousedown working!");
            }
            )
        },
    }
    
    // define a function that adds a character with arguments
    function addCharacter (characterName, characterSheetSrc, characterImgSrc) {
        const newCharacter = Object.create(character);
        newCharacter.name = characterName;
        newCharacter.sheetSrc = characterSheetSrc;
        newCharacter.imgSrc = characterImgSrc;
        newCharacter.appendArray();
        newCharacter.addAvatar(characterImgSrc);
        newCharacter.addClickListener(characterSheetSrc);
        characterListIterator++;
}

addCharacter("Petey Barnum", "javascript/characterSheets/garretCharacterSheet.js", "assets/images/peteyBarnum.png");
addCharacter("Running Wolf", "javascript/characterSheets/bronwenCharacterSheet.js", "assets/images/runningWolf.png");
addCharacter("Petey Barnum", "javascript/characterSheets/garretCharacterSheet.js", "assets/images/peteyBarnum.png");
addCharacter("Running Wolf", "javascript/characterSheets/bronwenCharacterSheet.js", "assets/images/runningWolf.png");
addCharacter("Petey Barnum", "javascript/characterSheets/garretCharacterSheet.js", "assets/images/peteyBarnum.png");
addCharacter("Running Wolf", "javascript/characterSheets/bronwenCharacterSheet.js", "assets/images/runningWolf.png");
addCharacter("Petey Barnum", "javascript/characterSheets/garretCharacterSheet.js", "assets/images/peteyBarnum.png");
addCharacter("Running Wolf", "javascript/characterSheets/bronwenCharacterSheet.js", "assets/images/runningWolf.png");