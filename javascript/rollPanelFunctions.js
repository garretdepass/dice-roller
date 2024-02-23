// function that adds a dice roll row to the roll panel
function setMainRollRow(numberOfDice, numberOfSides) {

    // remove any existing rollRows
    const existingRollRow = document.getElementById("mainRollRow");
    if (existingRollRow) {
        existingRollRow.remove();
    } 
    else {
        console.log("working")
    }

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
        text.setAttribute("id",`die${i}Text`);
        var dieContent = document.createTextNode(`d${numberOfSides}`);
        
        // attach it all to the SVG
        text.appendChild(dieContent);
        svg.appendChild(dieShape);
        svg.appendChild(text);
    }
}

// function to roll all dice in main row and find the highest roll result
function rollDice(numberOfDice, numberOfSides) {

}