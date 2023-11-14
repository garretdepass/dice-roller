

function randomNum() {
    return(
        Math.floor(Math.random() * 50)
    )
}

var value = document.getElementById('randomNumber')

function changeNumber() {
    const oldNumber = document.getElementById('randomNumber');
    oldNumber.textContent = randomNum();
    console.log(randomNum());
}