//get the value put into the input
function getDieValue() {
    return(
        document.getElementById('dieValueInput').value
    )
}

function rollDie() {
    const rollValue = document.getElementById('test')
    const dievalue = getDieValue()
    rollValue.textContent = Math.ceil(Math.random() * dievalue);
    console.log(rollValue)
}
// add: if it rolls a nat 20, say "nat 20 let's go!"




//function taken from https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
function addDie () {
    const newDie = document.createElement('div');
    const newDieValue = document.createTextNode(Math.floor(Math.random() * 20))
    newDie.appendChild(newDieValue)
    const currentDie = document.getElementById('die0')
    document.body.insertBefore(newDie, currentDie);

}