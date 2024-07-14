// create an array of tips
var tiplist = [];

// create a template object for a tip
const tip = {
    title: "placeholder string",
    body: "placeholder string",
    
    // PROPERTY TO ADD A TIP TO THE ARRAY, SO I DON'T HAVE TO MAINTAIN THE ARRAY SEPARATELY
    appendArray: function () {
        tiplist.push(this);
    },
}

// define a function to add a new tip and add it to the tip list
function addTip(tipTitle, tipBody) {
    const newTip = Object.create(tip);
    newTip.title = tipTitle;
    newTip.body = tipBody;
    newTip.appendArray();
}

// Add tips. Argument 1 is the title, argument 2 is the body. They will automatically get added to the tip list
addTip("Unskilled Checks", "Sometimes you have to make an Aptitude check, when lo and behold, you discover you don\'t actually have the Aptitude. In these cases, you get to roll one die just as if your character had 1 level in that skill. The downside is that he has to subtract 4, the unskilled penalty, from his final result.");
addTip("Women in the wastes", "In the world of Deadlands, the Civil War has dragged on for more than 16 years—from 1860 to the present date of 1877. Manpower in both the North and the South is at an all-time low. This is good news for women because now many of them are able to fill roles they could only dream about before.");
addTip("Ghost Rock", "Immediately after its discovery, a great number of hopeful inventors headed to the Maze. In months, they had perfected devices powered by steam and fueled by ghost rock. Reports of horseless carriages, ghost-rock powered ships, and even weapons capable of spewing a torrent of bullets or spewing great gouts of flame became common.");
addTip("A Nation Sundered", "What used to be the United States of America is now six separate nations. Had it not been for the war, there is little doubt there would be no Sioux Nation, no Coyote Confederation, no Republic of Deseret, and certainly no City of Lost Angels.");
addTip("Raising the Pot", "Every time you beat your Target Number by 5 points, you get an extra success level. This is called a “raise.” Raises are sometimes used to show your character has done exceedingly well at whatever it was she was trying to accomplish.");
addTip("Opposed Rolls", "Occasionally, someone your character is bamboozling, wrestling, or staring down might have the audacity to try to resist. If this is the case, both characters roll against a Fair (5) difficulty. The character who beats the TN and his opponent wins. Raises are always used in opposed rolls, though they are counted from the opponent\'s total.");
addTip("Ammo", "Ammunition is plentiful in the West, but any given store might not have the caliber a cowpoke needs. Forty-five and .38 ammo is most common. Ammo for a gun like the Evans Old Model Sporter probably has to be special ordered.");
addTip("Rounds", "When a firefight or a brawl erupts, the Marshal breaks the game down into \"rounds\" of 5 seconds each. Each round is further broken down into \"segments.\" Each Action Card (from Ace down to Deuce) represents these segments. The King is a segment, the Queen is a segment, and so on, all the way down to a Deuce.");
addTip("The Red Joker", "The red Joker allows your character to go at any time during the round. He can even interrupt another character\'s action without having to make a second Quickness check. In a nutshell, your hero can go whenever he wants this round. \nThe downside is that since you can\'t put a Joker up your sleeve, you only get this advantage for one round. If you don\'t use it before the round is over, you have to discard it. You can still have a normal card up your sleeve, however, and you can even use them both at the same time if you like.");
addTip("The Black Joker", "The black Joker is bad news all around. It means your character hesitates for some reason. Maybe he\'s starting to feel his wounds or he\'s distracted by the bad guys. Or his gun suffers a minor jam that takes him a moment to clear. Whatever the reason, you must discard the Joker and any card up your sleeve as well.");
// addTip("tip title", "tip Body");
// addTip("tip title", "tip Body");
// addTip("tip title", "tip Body");
// addTip("tip title", "tip Body");


// define a function to display a random tip
function serveRandomTip() {
    let randomNumber = Math.floor(Math.random() * tiplist.length)
    let currentTipTitle = document.getElementById('tipTitle');
    currentTipTitle.textContent = tiplist[randomNumber].title;
    let currentTipBody = document.getElementById('tipBody');
    currentTipBody.textContent = tiplist[randomNumber].body;
}

// set the interval for updating the random tip
window.setInterval(serveRandomTip, 20000)

// display the first random tip in the DOM
window.serveRandomTip()