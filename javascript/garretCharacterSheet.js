const templateRow = {
    dieCount: 0,
    dieSides: 0,
    type: "",
    subTraits: [],
    name: "",
    printProperty: function () {
        console.log(this.subTraits[0].name);
    },

    // seeing if I can set up a function to automatically append parent array and add an object name string. 
    //might be an issue with not turning the variable into a string? Look at how to convert variable name 
    //into string and then store string in variable

    appendParentArray: function (parentTrait) {
        this.objName = this
        parentTrait.subTraits.push(this);
    },
}



const cognition = Object.create(templateRow)
cognition.name = "Cognition";
cognition.dieCount = 4;
cognition.dieSides = 8;
cognition.type = "trait";

    const artillery = Object.create(templateRow)
    artillery.name = "Artillery";
    artillery.dieCount = 0;
    artillery.dieSides = cognition.dieSides;
    artillery.type = "attribute";
    artillery.appendParentArray(cognition);

    const arts = Object.create(templateRow)
    arts.name = "Arts";
    arts.dieCount = 0;
    arts.dieSides = cognition.dieSides;
    arts.type = "attribute";

    const scrutinize = Object.create(templateRow)
    scrutinize.name = "Scrutinize";
    scrutinize.dieCount = 2;
    scrutinize.dieSides = cognition.dieSides;
    scrutinize.type = "attribute";

    const search = Object.create(templateRow)
    search.name = "Search";
    search.dieCount = 2;
    search.dieSides = cognition.dieSides;
    search.type = "attribute";

    const trackin = Object.create(templateRow)
    trackin.name = "Trackin'";
    trackin.dieCount = 0;
    trackin.dieSides = cognition.dieSides;
    trackin.type = "attribute";

const deftness = Object.create(templateRow)
deftness.name = "Deftness";
deftness.dieCount = 1;
deftness.dieSides= 10;
deftness.type = "trait";

    const bow = Object.create(templateRow)
    bow.name = "Bow";
    bow.dieCount = 0;
    bow.dieSides = deftness.dieSides;
    bow.type = "attribute";

    const filchin = Object.create(templateRow)
    filchin.name = "Filchin'"
    filchin.dieCount = 1;
    filchin.dieSides = deftness.dieSides;
    filchin.type = "attribute";

    const lockpickin = Object.create(templateRow)
    lockpickin.name = "Lockpickin'"
    lockpickin.dieCount = 1;
    lockpickin.dieSides = deftness.dieSides;
    lockpickin.type = "attribute";

    const shootin = Object.create(templateRow)
    shootin.name = "Shootin'";
    shootin.dieCount = 4;
    shootin.dieSides = deftness.dieSides;
    shootin.type = "attribute";

        const pistol = Object.create(templateRow)
        pistol.name = "Pistol";
        pistol.dieCount = 4;
        pistol.dieSides = shootin.dieSides;
        pistol.type = "concentration";

    const sleightOfHand = Object.create(templateRow)
    sleightOfHand.name = "Sleight of hand";
    sleightOfHand.dieCount = 1;
    sleightOfHand.dieSides = deftness.dieSides;
    sleightOfHand.type = "attribute";

    const speedLoad = Object.create(templateRow)
    speedLoad.name = "Speed load";
    speedLoad.dieCount = 1;
    speedLoad.dieSides = deftness.dieSides;
    speedLoad.type = "attribute";

    const throwin = Object.create(templateRow)
    throwin.name = "Throwin'";
    throwin.dieCount = 0;
    throwin.dieSides = deftness.dieSides;
    throwin.type = "attribute";

const knowledge = Object.create(templateRow)
knowledge.name = "Knowledge"
knowledge.dieCount = 3;
knowledge.dieSides= 6;
knowledge.type = "trait";

    const academia = Object.create(templateRow)
    academia.name = "Academia";
    academia.dieCount = 1;
    academia.dieSides = knowledge.dieSides;
    academia.type = "attribute";

        const occult = Object.create(templateRow)
        occult.name = "Occult";
        occult.dieCount = 1;
        occult.dieSides = academia.dieSides;
        occult.type = "concentration";

    const areaKnowledge = Object.create(templateRow)
    areaKnowledge.name = "Area knowledge";
    areaKnowledge.dieCount = 2;
    areaKnowledge.dieSides = knowledge.dieSides;
    areaKnowledge.type = "attribute";
    
        const homeCounty = Object.create(templateRow)
        homeCounty.name = "Home County";
        homeCounty.dieCount = 2;
        homeCounty.dieSides = areaKnowledge.dieSides;
        homeCounty.type = "concentration";
        homeCounty.location = "Boston";

    const demolition = Object.create(templateRow)
    demolition.name = "Demolition";
    demolition.dieCount = 0;
    demolition.dieSides = knowledge.dieSides;
    demolition.type = "attribute";

    const disguise = Object.create(templateRow)
    disguise.name = "Disguise";
    disguise.dieCount = 1;
    disguise.dieSides = knowledge.dieSides;
    disguise.type = "attribute";

    const language = Object.create(templateRow)
    language.name = "Language";
    language.dieCount = 2;
    language.dieSides = knowledge.dieSides;
    language.type = "attribute";

        const english = Object.create(templateRow)
        english.name = "English";
        english.dieCount = 2;
        english.dieSides = language.dieSides;
        english.type = "concentration";

    const madScience = Object.create(templateRow)
    madScience.name = "Mad Science";
    madScience.dieCount = 0;
    madScience.dieSides = knowledge.dieSides;
    madScience.type = "attribute";

    const medicine = Object.create(templateRow)
    medicine.name = "Medicine";
    medicine.dieCount = 0;
    medicine.dieSides = knowledge.dieSides;
    medicine.type = "attribute";

    const professional = Object.create(templateRow)
    professional.name = "Professional";
    professional.dieCount = 1;
    professional.dieSides = knowledge.dieSides;
    professional.type = "attribute";

        const law = Object.create(templateRow)
        law.name = "Law";
        law.dieCount = 1;
        law.dieSides = professional.dieSides;
        law.type = "concentration";

    const science = Object.create(templateRow)
    science.name = "Science";
    science.dieCount = 1;
    science.dieSides = knowledge.dieSides;
    science.type = "attribute";

        const biology = Object.create(templateRow)
        biology.name = "Biology";
        biology.dieCount = 1;
        biology.dieSides = science.dieSides;
        biology.type = "concentration";

    const trade = Object.create(templateRow)
    trade.name = "Trade";
    trade.dieCount = 0;
    trade.dieSides = knowledge.dieSides;
    trade.type = "attribute";


const mien = Object.create(templateRow)
mien.name = "Mien";
mien.dieCount = 4;
mien.dieSides= 12;
mien.type = "trait";

    const animalWranglin  = Object.create(templateRow)
    animalWranglin.name = "Animal wranglin'"
    animalWranglin.dieCount = 0;
    animalWranglin.dieSides = mien.dieSides;
    animalWranglin.type = "attribute";

    const leadership= Object.create(templateRow)
    leadership.name = "Leadership";
    leadership.dieCount = 1;
    leadership.dieSides = mien.dieSides;
    leadership.type = "attribute";

    const overawe = Object.create(templateRow)
    overawe.name = "Overawe";
    overawe.dieCount = 0;
    overawe.dieSides = mien.dieSides;
    overawe.type = "attribute";

    const performin = Object.create(templateRow)
    performin.name = "Performin'";
    performin.dieCount = 2;
    performin.dieSides = mien.dieSides;
    performin.type = "attribute";

        const acting = Object.create(templateRow)
        acting.name = "Acting";
        acting.dieCount = 2;
        acting.dieSides = performin.dieSides;
        acting.type = "concentration";

    const persuasion = Object.create(templateRow)
    persuasion.name = "Persuasion";
    persuasion.dieCount = 3;
    persuasion.dieSides = mien.dieSides;
    persuasion.type = "attribute";

    const taleTellin = Object.create(templateRow)
    taleTellin.name = "Tale tellin'";
    taleTellin.dieCount = 2;
    taleTellin.dieSides = mien.dieSides;
    taleTellin.type = "attribute";


const nimbleness = Object.create(templateRow)
nimbleness.name = "Nimbleness";
nimbleness.dieCount = 2;
nimbleness.dieSides= 8;
nimbleness.type = "trait";

    const climbin = Object.create(templateRow)
    climbin.name = "Climbin'";
    climbin.dieCount = 1;
    climbin.dieSides = nimbleness.dieSides;
    climbin.type = "attribute";

    const dodge = Object.create(templateRow)
    dodge.name = "Dodge";
    dodge.dieCount = 2;
    dodge.dieSides = nimbleness.dieSides;
    dodge.type = "attribute";

    const drivin = Object.create(templateRow)
    drivin.name = "Drivin'";
    drivin.dieCount = 1;
    drivin.dieSides = nimbleness.dieSides;
    drivin.type = "attribute";

        const steamWagon = Object.create(templateRow)
        steamWagon.name = "Steam Wagon";
        steamWagon.dieCount = 1;
        steamWagon.dieSides = drivin.dieSides;
        steamWagon.type = "concentration";

    const fightin = Object.create(templateRow)
    fightin.name = "Fightin'";
    fightin.dieCount = 0;
    fightin.dieSides = nimbleness.dieSides;
    fightin.type = "attribute";

    const horseRidin = Object.create(templateRow)
    horseRidin.name = "Horse ridin'";
    horseRidin.dieCount = 0;
    horseRidin.dieSides = nimbleness.dieSides;
    horseRidin.type = "attribute";

    const sneak = Object.create(templateRow)
    sneak.name = "Sneak";
    sneak.dieCount = 3;
    sneak.dieSides = nimbleness.dieSides;
    sneak.type = "attribute";

    const swimmin = Object.create(templateRow)
    swimmin.name = "Swimmin'";
    swimmin.dieCount = 0;
    swimmin.dieSides = nimbleness.dieSides;
    swimmin.type = "attribute";

    const teamster = Object.create(templateRow)
    teamster.name = "Teamster";
    teamster.dieCount = 1;
    teamster.dieSides = nimbleness.dieSides;
    teamster.type = "attribute";


const quickness = Object.create(templateRow)
quickness.name = "Quickness";
quickness.dieCount = 4;
quickness.dieSides= 10;
quickness.type = "trait";

    const quickDraw = Object.create(templateRow)
    quickDraw.name = "Quick Draw";
    quickDraw.dieCount = 2;
    quickDraw.dieSides = quickness.dieSides;
    quickDraw.type = "attribute";

        const quickDrawPistol = Object.create(templateRow)
        quickDrawPistol.name = "Pistol";
        quickDrawPistol.dieCount = 2;
        quickDrawPistol.dieSides = quickDraw.dieSides;
        quickDrawPistol.type = "concentration";

const smarts = Object.create(templateRow)
smarts.name = "Smarts";
smarts.dieCount = 3;
smarts.dieSides= 10;
smarts.type = "trait";

    const bluff = Object.create(templateRow)
    bluff.name = "Bluff";
    bluff.dieCount = 2;
    bluff.dieSides = smarts.dieSides;
    bluff.type = "attribute";

    const gamblin = Object.create(templateRow)
    gamblin.name = "Gamblin'";
    gamblin.dieCount = 0;
    gamblin.dieSides = smarts.dieSides;
    gamblin.type = "attribute";

    const ridicule = Object.create(templateRow)
    ridicule.name = "Ridicule";
    ridicule.dieCount = 1;
    ridicule.dieSides = smarts.dieSides;
    ridicule.type = "attribute";

    const scroungin = Object.create(templateRow)
    scroungin.name = "Scroungin'";
    scroungin.dieCount = 0;
    scroungin.dieSides = smarts.dieSides;
    scroungin.type = "attribute";

    const streetwise = Object.create(templateRow)
    streetwise.name = "Streetwise";
    streetwise.dieCount = 1;
    streetwise.dieSides = smarts.dieSides;
    streetwise.type = "attribute";

    const survival = Object.create(templateRow)
    survival.name = "Survival";
    survival.dieCount = 0;
    survival.dieSides = smarts.dieSides;
    survival.type = "attribute";

    const tinkerin = Object.create(templateRow)
    tinkerin.name = "Tinkerin'";
    tinkerin.dieCount = 0;
    tinkerin.dieSides = smarts.dieSides;
    tinkerin.type = "attribute";

const spirit = Object.create(templateRow)
spirit.name = "Spirit";
spirit.dieCount = 3;
spirit.dieSides= 8;
spirit.type = "trait";

    const faith = Object.create(templateRow)
    faith.name = "Faith";
    faith.dieCount = 0;
    faith.dieSides = spirit.dieSides;
    faith.type = "attribute";

    const guts = Object.create(templateRow)
    guts.name = "Guts";
    guts.dieCount = 5;
    guts.dieSides = spirit.dieSides;
    guts.type = "attribute";

const strength = Object.create(templateRow)
strength.name = "Strength";
strength.dieCount = 2;
strength.dieSides= 4;
strength.type = "trait";

const vigor = Object.create(templateRow)
vigor.name = "Vigor";
vigor.dieCount = 4;
vigor.dieSides= 6;
vigor.type = "trait";


cognition.subTraits = [artillery, arts, scrutinize, search, trackin];
deftness.subTraits = [bow, filchin, lockpickin, shootin, sleightOfHand, speedLoad, throwin];
shootin.subTraits = [pistol];
knowledge.subTraits = [academia, areaKnowledge, demolition, disguise, language, madScience, medicine, professional, science, trade];
academia.subTraits = [occult];
areaKnowledge.subTraits = [homeCounty];
language.subTraits = [english];
professional.subTraits = [law];
science.subTraits = [biology];
mien.subTraits = [animalWranglin, leadership, overawe, performin, persuasion, taleTellin];
performin.subTraits = [acting];
nimbleness.subTraits = [climbin, dodge, drivin, fightin, horseRidin, sneak, swimmin, teamster];
drivin.subTraits = [steamWagon];
quickness.subTraits = [quickDraw];
quickDraw.subTraits = [quickDrawPistol];
smarts.subTraits = [bluff, gamblin, ridicule, scroungin, streetwise, survival, tinkerin];
spirit.subTraits = [faith, guts];
const characterTraits = [cognition, deftness, knowledge, mien, nimbleness, quickness, smarts, spirit, strength, vigor];
