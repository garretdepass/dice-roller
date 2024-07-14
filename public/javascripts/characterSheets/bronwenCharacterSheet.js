var player1 = {

    chipcount: {
        white: 6,
        red: 5,
        blue: 1,
        legendary: 1,
    },

    trait: [

        {
            name: "Cognition",
            dieCount: 4,
            dieSides: 12,
            type: "trait",
            attribute: [
                
                {
                    name: "Artillery",
                    dieCount: 0,
                    dieSides: 12,
                    type: "attribute",
                },
                {
                    name: "Arts",
                    dieCount: 0,
                    dieSides: 12,
                    type: "attribute",
                },
                {   
                    name: "Scrutinize",
                    dieCount: 1,
                    dieSides: 12,
                    type: "attribute",
                },
                {
                    name: "Search",
                    dieCount: 2,
                    dieSides: 12,
                    type: "attribute",
                },
                {
                    name: "Trackin'",
                    dieCount: 3,
                    dieSides: 12,
                    type: "attribute",
                }
            ]
        },
        {
            name: "Deftness",
            dieCount: 3,
            dieSides: 10,
            type: "trait",
            attribute: [
                {
                    name: "Bow",
                    dieCount: 4,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Filchin'",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Lockpickin'",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Shootin'",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Sleight of hand",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Speed load",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Throwin'",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Knowledge",
            dieCount: 1,
            dieSides: 4,
            type: "trait",
            attribute: [
                {
                    name: "Academia",
                    dieCount: 0,
                    dieSides: 4,
                    type: "attribute",
                },
                {
                    name: "Area knowledge",
                    dieCount: 2,
                    dieSides: 4,
                    type: "attribute",
                    concentration: [
                        {
                            name: "Home County",
                            dieCount: 2,
                            dieSides: 4,
                            type: "concentration",
                            location: "San Joaquin",
                        },  
                    ]
                },
                {
                    name: "Demolition",
                    dieCount: 0,
                    dieSides: 4,
                    type: "attribute",
                },
                {
                    name: "Disguise",
                    dieCount: 0,
                    dieSides: 4,
                    type: "attribute",
                },
                {
                    name: "Language",
                    dieCount: 2,
                    dieSides: 4,
                    type: "attribute",
                    concentration: [
                        {
                            name: "Pomo",
                            dieCount: 2,
                            dieSides: 4,
                            type: "concentration",
                        },  
                        {
                            name: "Indian Sign Language",
                            dieCount: 2,
                            dieSides: 4,
                            type: "concentration",
                        },  
                        {
                            name: "English",
                            dieCount: 1,
                            dieSides: 4,
                            type: "concentration",
                        },  
                    ]
                },
                {
                    name: "Mad Science",
                    dieCount: 0,
                    dieSides: 4,
                    type: "attribute",
                },
                {
                    name: "Medicine",
                    dieCount: 0,
                    dieSides: 4,
                    type: "attribute",
                },
                {
                    name: "Professional",
                    dieCount: 0,
                    dieSides: 4,
                    type: "attribute",
                },
                {
                    name: "Science",
                    dieCount: 0,
                    dieSides: 4,
                    type: "attribute",
                },
                {
                    name: "Trade",
                    dieCount: 0,
                    dieSides: 4,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Mien",
            dieCount: 4,
            dieSides: 6,
            type: "trait",
            attribute: [
                {
                    name: "Animal wranglin'",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
                {
                    name: "Leadership",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
                {
                    name: "Overawe",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
                {
                    name: "Performin'",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
                {
                    name: "Persuasion",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
                {
                    name: "Tale Tellin'",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Nimbleness",
            dieCount: 4,
            dieSides: 10,
            type: "trait",
            attribute: [
                {
                    name: "Climbin'",
                    dieCount: 2,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Dodge",
                    dieCount: 3,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Drivin'",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Fightin'",
                    dieCount: 1,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Horse ridin'",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Sneak",
                    dieCount: 3,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Swimmin'",
                    dieCount: 2,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Teamster",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Quickness",
            dieCount: 4,
            dieSides: 10,
            type: "trait",
            attribute: [
                {
                    name: "Quick Draw",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Smarts",
            dieCount: 3,
            dieSides: 10,
            type: "trait",
            attribute: [
                {
                    name: "Bluff",
                    dieCount: 1,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Gamblin'",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Ridicule",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Scroungin'",
                    dieCount: 3,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Streetwise",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Survival",
                    dieCount: 3,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Tinkerin'",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Spirit",
            dieCount: 2,
            dieSides: 12,
            type: "trait",
            attribute: [
                {
                    name: "Faith",
                    dieCount: 2,
                    dieSides: 12,
                    type: "attribute",
                },
                {
                    name: "Guts",
                    dieCount: 5,
                    dieSides: 12,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Strength",
            dieCount: 3,
            dieSides: 8,
            type: "trait",
        },
        {
            name: "Vigor",
            dieCount: 1,
            dieSides: 8,
            type: "trait",
        },
    ],

    wind: 0,
    
};

player1.wind = player1.trait[7].dieSides + player1.trait[9].dieSides;

addCharacter("Running Wolf", "javascript/characterSheets/bronwenCharacterSheet.js", "assets/images/runningWolf.png", player1);