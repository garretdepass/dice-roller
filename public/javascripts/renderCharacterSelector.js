// create an empty array of characters
var playerList = [];
var playerListIterator = 0;

// create a template object for a character
const character = {
    name: "",
    sheetSrc: "",
    imgSrc: "",
    // property to add a character to the playerList array
    appendArray: function () {
        playerList.push(this);
    },

    //property to add an avatar to the characterSelector div
    addAvatar: function (characterImgSrc) {
        const parentLocation = document.getElementById("characterSelector");
    
        const avatarImage = document.createElement("img");
        avatarImage.id = `avatar${playerListIterator}`;
        avatarImage.classList.add("avatar");
        avatarImage.src = characterImgSrc;
        parentLocation.appendChild(avatarImage);
    },
    
    // property to add an onClick event to the avatar
    addClickListener: function (characterSheetSrc, playerNumber) {
        const avatarImage = document.getElementById(`avatar${playerListIterator}`);
        avatarImage.addEventListener(
            "mousedown",
            (event) => {

                var avatarList = [];
                avatarList = document.getElementsByClassName("avatar");
                for (let i = 0; i < avatarList.length; i++) {
                    avatarList[i].classList.remove("selectedAvatar");
                };
                avatarImage.classList.add("selectedAvatar");
                // if you are selecting an avatar different than the currently selected one
                if (currentPlayerName !== playerNumber) {
                    const characterSheetID = document.getElementById("characterSheet")
                    clearRollConditions ();
                    document.getElementById("helperText").hidden = false;
                    document.getElementById("rollButton").disabled = true;
                    currentPlayerName = playerNumber;
                    characterSheetID.replaceChildren();
                    addAllTraitSectionsForCharacter(playerNumber);
                    addAllChips(playerNumber);
                    addWind(playerNumber)
                }
            }
            )
        },
    }
    
    // define a function that adds a character with arguments
    function addCharacter (characterName, characterSheetSrc, characterImgSrc, playerNumber) {
        const newCharacter = Object.create(character);
        newCharacter.name = characterName;
        newCharacter.sheetSrc = characterSheetSrc;
        newCharacter.imgSrc = characterImgSrc;
        newCharacter.player = playerNumber
        newCharacter.appendArray();
        newCharacter.addAvatar(characterImgSrc);
        newCharacter.addClickListener(characterSheetSrc, playerNumber);
        if (playerNumber == player0) {
            const avatarImage = document.getElementById(`avatar${playerListIterator}`);
            avatarImage.classList.add("selectedAvatar");
        }
        playerListIterator++;
}

// addCharacter("Petey Barnum", "javascript/characterSheets/garretCharacterSheet.js", "assets/images/peteyBarnum.png", player1);
// addCharacter("Running Wolf", "javascript/characterSheets/bronwenCharacterSheet.js", "assets/images/runningWolf.png", player2);
// addCharacter("Petey Barnum", "javascript/characterSheets/garretCharacterSheet.js", "assets/images/peteyBarnum.png", player3);
// addCharacter("Running Wolf", "javascript/characterSheets/bronwenCharacterSheet.js", "assets/images/runningWolf.png", player4);
// addCharacter("Petey Barnum", "javascript/characterSheets/garretCharacterSheet.js", "assets/images/peteyBarnum.png", player5);
// addCharacter("Running Wolf", "javascript/characterSheets/bronwenCharacterSheet.js", "assets/images/runningWolf.png", player6);
// addCharacter("Petey Barnum", "javascript/characterSheets/garretCharacterSheet.js", "assets/images/peteyBarnum.png", player7);
// addCharacter("Running Wolf", "javascript/characterSheets/bronwenCharacterSheet.js", "assets/images/runningWolf.png", player8);