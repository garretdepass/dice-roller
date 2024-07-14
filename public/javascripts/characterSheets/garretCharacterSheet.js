var player0 = {
   
    chipcount: {
        white: 2,
        red: 3,
        blue: 4,
        legendary: 1,
    },

    trait: [

        {
            name: "Cognition",
            dieCount: 4,
            dieSides: 8,
            type: "trait",
            attribute: [
                
                {
                    name: "Artillery",
                    dieCount: 0,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Arts",
                    dieCount: 0,
                    dieSides: 8,
                    type: "attribute",
                },
                {   
                    name: "Scrutinize",
                    dieCount: 2,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Search",
                    dieCount: 2,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Trackin'",
                    dieCount: 0,
                    dieSides: 8,
                    type: "attribute",
                }
            ]
        },
        {
            name: "Deftness",
            dieCount: 1,
            dieSides: 10,
            type: "trait",
            attribute: [
                {
                    name: "Bow",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Filchin'",
                    dieCount: 1,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Lockpickin'",
                    dieCount: 1,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Shootin'",
                    dieCount: 5,
                    dieSides: 10,
                    type: "attribute",
                    concentration: [
                        
                        {
                            name: "Pistol'",
                            dieCount: 5,
                            dieSides: 10,
                            type: "concentration",
                        },  
                        
                    ]
                },
                {
                    name: "Sleight of hand",
                    dieCount: 1,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Speed load",
                    dieCount: 1,
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
            dieCount: 3,
            dieSides: 6,
            type: "trait",
            attribute: [
                {
                    name: "Academia",
                    dieCount: 1,
                    dieSides: 6,
                    type: "attribute",
                    concentration: [
                        {
                            name: "Occult",
                            dieCount: 1,
                            dieSides: 6,
                            type: "concentration",
                        },  
                    ]
                },
                {
                    name: "Area knowledge",
                    dieCount: 2,
                    dieSides: 6,
                    type: "attribute",
                    concentration: [
                        {
                            name: "Home County",
                            dieCount: 2,
                            dieSides: 6,
                            type: "concentration",
                            location: "Boston",
                        },  
                    ]
                },
                {
                    name: "Demolition",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
                {
                    name: "Disguise",
                    dieCount: 1,
                    dieSides: 6,
                    type: "attribute",
                },
                {
                    name: "Language",
                    dieCount: 2,
                    dieSides: 6,
                    type: "attribute",
                    concentration: [
                        {
                            name: "English",
                            dieCount: 2,
                            dieSides: 6,
                            type: "concentration",
                        },  
                    ]
                },
                {
                    name: "Mad Science",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
                {
                    name: "Medicine",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
                {
                    name: "Professional",
                    dieCount: 1,
                    dieSides: 6,
                    type: "attribute",
                    concentration: [
                        {
                            name: "Law",
                            dieCount: 1,
                            dieSides: 6,
                            type: "concentration",
                        },  
                    ]
                },
                {
                    name: "Science",
                    dieCount: 1,
                    dieSides: 6,
                    type: "attribute",
                    concentration: [
                        {
                            name: "Biology",
                            dieCount: 1,
                            dieSides: 6,
                            type: "concentration",
                        },  
                    ]
                },
                {
                    name: "Trade",
                    dieCount: 0,
                    dieSides: 6,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Mien",
            dieCount: 4,
            dieSides: 12,
            type: "trait",
            attribute: [
                {
                    name: "Animal wranglin'",
                    dieCount: 0,
                    dieSides: 12,
                    type: "attribute",
                },
                {
                    name: "Leadership",
                    dieCount: 1,
                    dieSides: 12,
                    type: "attribute",
                },
                {
                    name: "Overawe",
                    dieCount: 0,
                    dieSides: 12,
                    type: "attribute",
                },
                {
                    name: "Performin'",
                    dieCount: 2,
                    dieSides: 12,
                    type: "attribute",
                    concentration: [
                        {
                            name: "Acting",
                            dieCount: 2,
                            dieSides: 12,
                            type: "concentration",
                        },  
                    ]
                },
                {
                    name: "Persuasion",
                    dieCount: 3,
                    dieSides: 12,
                    type: "attribute",
                },
                {
                    name: "Tale Tellin'",
                    dieCount: 2,
                    dieSides: 12,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Nimbleness",
            dieCount: 2,
            dieSides: 8,
            type: "trait",
            attribute: [
                {
                    name: "Climbin'",
                    dieCount: 1,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Dodge",
                    dieCount: 2,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Drivin'",
                    dieCount: 1,
                    dieSides: 8,
                    type: "attribute",
                    concentration: [
                        {
                            name: "Steam Wagon",
                            dieCount: 1,
                            dieSides: 8,
                            type: "concentration",
                        },  
                    ]
                },
                {
                    name: "Fightin'",
                    dieCount: 0,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Horse ridin'",
                    dieCount: 0,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Sneak",
                    dieCount: 3,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Swimmin'",
                    dieCount: 0,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Teamster",
                    dieCount: 0,
                    dieSides: 8,
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
                    dieCount: 2,
                    dieSides: 10,
                    type: "attribute",
                    concentration: [
                        {
                            name: "Pistol",
                            dieCount: 2,
                            dieSides: 10,
                            type: "concentration",
                        },  
                    ]
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
                    dieCount: 2,
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
                    dieCount: 1,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Scroungin'",
                    dieCount: 0,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Streetwise",
                    dieCount: 1,
                    dieSides: 10,
                    type: "attribute",
                },
                {
                    name: "Survival",
                    dieCount: 0,
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
            dieCount: 3,
            dieSides: 8,
            type: "trait",
            attribute: [
                {
                    name: "Faith",
                    dieCount: 0,
                    dieSides: 8,
                    type: "attribute",
                },
                {
                    name: "Guts",
                    dieCount: 5,
                    dieSides: 8,
                    type: "attribute",
                },
            ]
        },
        {
            name: "Strength",
            dieCount: 2,
            dieSides: 4,
            type: "trait",
        },
        {
            name: "Vigor",
            dieCount: 4,
            dieSides: 6,
            type: "trait",
        },
    ],
    
    wind: 0,
    
};

player0.wind = player0.trait[7].dieSides + player0.trait[9].dieSides;

addCharacter("Petey Barnum", "javascript/characterSheets/garretCharacterSheet.js", "assets/images/peteyBarnum.png", player0);