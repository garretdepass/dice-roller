
// set global variable to indicate the current player name
var currentPlayerName = player0


// function that adds a row to a template section, including trait name, die count, and die sides. Takes 2 
// arguments - the current trait (or attribute/concentration) and the name of the parent location to append with this row
function addTemplateRow(currentTrait, parentLocation) {
    
    // set variable that contains character sheet ID
    const templateRowLocation = document.getElementById(parentLocation)
    
    // create new div elements with attributes
    const newTemplateRow = document.createElement("li");
    newTemplateRow.setAttribute("id", `${currentTrait.name}-row`);
    newTemplateRow.setAttribute("class", `${currentTrait.type}-row`);
    const nameContainer = document.createElement("div");
    nameContainer.setAttribute("class", "traitNameContainer");
    const dieInfoContainer = document.createElement("div");
    dieInfoContainer.setAttribute("class", "dieInfoContainer")
    const dieCountContainer = document.createElement("div");
    dieCountContainer.setAttribute("class", "dieCountContainer");
    const dieSidesContainer = document.createElement("div");
    dieSidesContainer.setAttribute("class", "dieSidesContainer");
    
    const rowIconContainer = document.createElement("div");
    rowIconContainer.setAttribute("class", "transparent material-symbols-outlined");
    rowIconContainer.innerHTML ='<span class="material-symbols-outlined">ifl</span>';
    
    
    
    // and give it some content
    const traitName = document.createTextNode(currentTrait.name);
    const traitDieCount = document.createTextNode(currentTrait.dieCount);
    const plainTextD = document.createTextNode("d");
    const traitDieSides = document.createTextNode(currentTrait.dieSides);
    
    // add conditional styling based on row data
    if (currentTrait.type === "trait") {
        newTemplateRow.classList.add("h2");
        
    } else {
        newTemplateRow.classList.add("body");
    }
    
    if (currentTrait.dieCount === 0) {
        dieInfoContainer.classList.add("untrained");
    };
    
    // add a mouseenter
    newTemplateRow.addEventListener(
        "mouseenter",
        (event) => {
            // highlight the mouseover target with hover class
            newTemplateRow.classList.add("templateRowHover");
            rowIconContainer.classList.remove("transparent");
            rowIconContainer.classList.add("opaque");
        }
        );
    
    // add a mouseleave
    newTemplateRow.addEventListener(
        "mouseleave", 
        (event) => {
            // remove hover class
            newTemplateRow.classList.remove("templateRowHover");
            rowIconContainer.classList.remove("opaque");
            rowIconContainer.classList.add("transparent");
        });
    // when clicking on a templateRow, give it active styling until the next templateRow is clicked
    newTemplateRow.addEventListener(
        "mousedown",
        (event) => {
            var traitRow = [];
            traitRow = document.getElementsByClassName("trait-row")
            for (let i = 0; i < traitRow.length; i++) {
                traitRow[i].classList.remove("templateRowActive")
            }
            var attributeRow = [];
            attributeRow = document.getElementsByClassName("attribute-row")
            for (let i = 0; i < attributeRow.length; i++) {
                attributeRow[i].classList.remove("templateRowActive")
            }
            var concentrationRow = [];
            concentrationRow = document.getElementsByClassName("concentration-row")
            for (let i = 0; i < concentrationRow.length; i++) {
                concentrationRow[i].classList.remove("templateRowActive")
            }
            newTemplateRow.classList.add("templateRowActive")

            
            // const attributeRow = [];
            // document.getElementsByClassName("trait-row")
            // newTemplateRow.classList.add("h1")
        }
    )
            
    // Add an onclick attribute        
    newTemplateRow.setAttribute("onclick", `addMainRollRow(${currentTrait.dieCount}, ${currentTrait.dieSides})`);
    
            
            
    // add the text node to the newly created div
    nameContainer.appendChild(traitName);
    dieCountContainer.appendChild(traitDieCount);
    dieSidesContainer.appendChild(traitDieSides);
    dieInfoContainer.appendChild(dieCountContainer);
    dieInfoContainer.appendChild(plainTextD);
    dieInfoContainer.appendChild(dieSidesContainer);
    newTemplateRow.appendChild(rowIconContainer);
    newTemplateRow.appendChild(nameContainer);
    newTemplateRow.appendChild(dieInfoContainer);
    templateRowLocation.appendChild(newTemplateRow);
};

// function that adds trait and all child attributes for a trait section.
function addTraitSection(traitCount) {

    // set variable that contains character sheet ID
    const characterSheetID = document.getElementById("characterSheet")
    
    // create a new div element
    const traitSection = document.createElement("ul");
    traitSection.setAttribute("id", `${currentPlayerName.trait[traitCount].name}-section`);
    
    // add the text node to the newly created div
    characterSheetID.appendChild(traitSection);
    
    addTemplateRow(currentPlayerName.trait[traitCount], traitSection.id)

    // create div to contain trait name
    for (attributeCount in currentPlayerName.trait[traitCount].attribute) {
        addTemplateRow(currentPlayerName.trait[traitCount].attribute[attributeCount], traitSection.id);
        
        // if a character trait's attribute has at least one concentration, go through and create rows for each
        if (currentPlayerName.trait[traitCount].attribute[attributeCount].concentration) {
            for (let concentrationCount = 0; concentrationCount < currentPlayerName.trait[traitCount].attribute[attributeCount].concentration.length; concentrationCount++) {
                addTemplateRow(currentPlayerName.trait[traitCount].attribute[attributeCount].concentration[concentrationCount], traitSection.id);
            }
        }
    }
    
};


// function that cycles through all traits and adds a section for each. Exploring adding all chips in this function, but split out to abstract from higher level function
function addAllTraitSectionsForCharacter(playerNumber) {

    currentPlayerName = playerNumber;
    // create div to contain trait name
    for (traitCount in playerNumber.trait) {
        addTraitSection(traitCount)
    }
;}


// function that adds the current chip count for player - very experimental... 
// not hooked up to anything. Intention to have this happen whenever all character traits
// are loaded, as called in renderCharachterSelector.


function addAllChips(playerNumber) {
    currentPlayerName = playerNumber;
    blueChip.count = currentPlayerName.chipcount.blue;
    blueChip.htmlElement.textContent = blueChip.count;
    redChip.count = currentPlayerName.chipcount.red;
    redChip.htmlElement.textContent = redChip.count;
    whiteChip.count = currentPlayerName.chipcount.white;
    whiteChip.htmlElement.textContent = whiteChip.count;
}

// function that adds the current wind for player. Currently just takes wind from character sheet and console.logs it.

function addWind(playerNumber) {
    currentPlayerName = playerNumber;
    console.log(currentPlayerName.wind);  
}

// function that adds the current equipment list for player

// document.body.onload = addAllTraitSections;

document.body.onload = addAllTraitSectionsForCharacter(currentPlayerName), addAllChips(currentPlayerName), addWind(currentPlayerName);