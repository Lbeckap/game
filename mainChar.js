const clothing = require("./clothing.js");
const jewelry = require("./jewelry.js");
const bag = require("./bag.js");

const mainCharacter = {
    healthStats: {
        maxCarryWeight: null, //can be increased with hard work
        currentWeight: null, //can only be increased at bonus enviornment
        hunger: null,
        social: null, //stays at 50% until first wander found
        comfort: null, //bad weather and improper clothing and shelter can effect this
        cleanliness: null, //at 50% unless very hard work or get a bonus with a bath
    },
    clothing: clothing,
    jewelry: jewelry,
    bag: bag,
    skills: {
        building: null,
        foraging: null,
        fishing: null,
        crafting: null,
        hunting: null,
        communication: null,
        organization: null,
    },
    profile: {
        name: "",
        age: "", //gag quality, game doesn't actually show age progression
        currentResidence: "",
    },
    physicalCharacteristics: {
        skinTone: "",
        height: "",
        hairStyle: "",
        hairColor: "",
        eyeColor: "",
        gender: "", //two different body types available for M/F
    }
};

// console.log(mainCharacter.jewelry); //for testing

module.exports = mainCharacter;