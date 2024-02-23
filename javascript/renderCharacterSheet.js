// function that adds a row to a template section, including trait name, die count, and die sides. Takes 2 
// arguments - the current trait (or attribute/concentration) and the name of the parent location to append with this row
function addTemplateRow(currentTrait, parentLocation) {
    
    // set variable that contains character sheet ID
    const templateRowLocation = document.getElementById(parentLocation)
    
    // create new div elements with attributes
    const newTemplateRow = document.createElement("li");
    newTemplateRow.setAttribute("id", `${currentTrait.name}-row`);
    newTemplateRow.setAttribute("class", `${currentTrait.type}-row`)
    const nameContainer = document.createElement("div");
    nameContainer.setAttribute("class", "traitNameContainer")
    const dieInfoContainer = document.createElement("div");
    dieInfoContainer.setAttribute("class", "dieInfoContainer")
    const dieCountContainer = document.createElement("div");
    dieCountContainer.setAttribute("class", "dieCountContainer");
    const dieSidesContainer = document.createElement("div");
    dieSidesContainer.setAttribute("class", "dieSidesContainer");
    
    const rowIconContainer = document.createElement("div")
    rowIconContainer.setAttribute("class", "transparent material-symbols-outlined")
    rowIconContainer.innerHTML ='<span class="material-symbols-outlined">ifl</span>';
    
    
    
    // and give it some content
    const traitName = document.createTextNode(currentTrait.name);
    const traitDieCount = document.createTextNode(currentTrait.dieCount);
    const plainTextD = document.createTextNode("d")
    const traitDieSides = document.createTextNode(currentTrait.dieSides);
    
    // add conditional styling based on row data
    if (currentTrait.type === "trait") {
        newTemplateRow.classList.add("h2");
        
    } else {
        newTemplateRow.classList.add("body");
    }
    
    if (currentTrait.dieCount === 0) {
        dieInfoContainer.classList.add("untrained");
    } else {
        console.log(currentTrait.dieCount)
    }
    
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
            
    // Add an onclick attribute        
    newTemplateRow.setAttribute("onclick", `setTemplateFor(${currentTrait.dieCount})`);
            
            
    // add the text node to the newly created div
    nameContainer.appendChild(rowIconContainer);
    nameContainer.appendChild(traitName);
    dieCountContainer.appendChild(traitDieCount);
    dieSidesContainer.appendChild(traitDieSides);
    dieInfoContainer.appendChild(dieCountContainer);
    dieInfoContainer.appendChild(plainTextD);
    dieInfoContainer.appendChild(dieSidesContainer);
    newTemplateRow.appendChild(nameContainer);
    newTemplateRow.appendChild(dieInfoContainer);
    templateRowLocation.appendChild(newTemplateRow);
};

// function that adds trait and all child attributes for a trait section.
function addTraitSection(characterTraitIndex) {

    // set variable that contains character sheet ID
    const characterSheetID = document.getElementById("characterSheet")
    
    // create a new div element
    const traitSection = document.createElement("ul");
    traitSection.setAttribute("id", `${characterTraits[characterTraitIndex].name}-section`);
    
    // add the text node to the newly created div
    characterSheetID.appendChild(traitSection);
    
    addTemplateRow(characterTraits[characterTraitIndex], traitSection.id)

    // create div to contain trait name
    for (i in characterTraits[characterTraitIndex].subTraits) {
        addTemplateRow(characterTraits[characterTraitIndex].subTraits[i], traitSection.id)        
    }
    
};

// function that cycles through all traits and adds a section for each
function addAllTraitSections() {

    // create div to contain trait name
    for (i in characterTraits) {
        addTraitSection(i)
    }

;}


document.body.onload = addAllTraitSections;