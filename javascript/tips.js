const tip = {
    title: "placeholder string",
    body: "placeholder string",
}


const tip0 = Object.create(tip);
tip0.title = "Unskilled Checks";
tip0.body = "Sometimes you have to make an Aptitude check, when lo and behold, you discover you don’t actually have the Aptitude. In these cases, you get to roll one die just as if your character had 1 level in that skill. The downside is that he has to subtract –4, the unskilled penalty, from his final result";

const tip1 = Object.create(tip);
tip1.title = "Women in the wastes";
tip1.body = "In the world of Deadlands, the Civil War has dragged on for more than 16 years—from 1860 to the present date of 1877. Manpower in both the North and the South is at an all-time low. This is good news for women because now many of them are able to fill roles they could only dream about before.";

const tip2 = Object.create(tip);
tip2.title = "Unskilled Checks";
tip2.body = "Sometimes you have to make an Aptitude check, when lo and behold, you discover you don’t actually have the Aptitude. In these cases, you get to roll one die just as if your character had 1 level in that skill. The downside is that he has to subtract –4, the unskilled penalty, from his final result";

const tip3 = Object.create(tip);
tip3.title = "tip3 title";
tip3.body = "this is tip3";

const tip4 = Object.create(tip);
tip4.title = "tip4 title";
tip4.body = "this is tip4";

const tip5 = Object.create(tip);
tip5.title = "tip5 title";
tip5.body = "this is tip5";

const tip6 = Object.create(tip);
tip6.title = "tip6 title";
tip6.body = "this is tip6";


const tiplist = [tip0, tip1, tip2, tip3, tip4, tip5, tip6]



function serveRandomTip() {
    let randomNumber = Math.floor(Math.random() * tiplist.length)

    let currentTipTitle = document.getElementById('tipTitle');
    currentTipTitle.textContent = tiplist[randomNumber].title;
    let currentTipBody = document.getElementById('tipBody');
    currentTipBody.textContent = tiplist[randomNumber].body;
    console.log(tiplist[randomNumber].title);
}

window.setInterval(serveRandomTip, 20000)
window.serveRandomTip()