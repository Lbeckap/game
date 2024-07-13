const clothing = require("./clothing.js");
const jewelry = require("./jewelry.js");
const bag = require("./bag.js");

const mainCharacter = {
    healthStats: {
        maxCarryWeight: 0, //can be increased with hard work
        currentWeight: 0, //can only be increased at bonus enviornment
        hunger: 0,
        social: 0, //stays at 50% until first wander found
        comfort: 0, //bad weather and improper clothing and shelter can effect this
        cleanliness: 0, //at 50% unless very hard work or get a bonus with a bath
    },
    clothing: clothing,
    jewelry: jewelry,
    bag: bag,
    skills: {
        building: 0,
        foraging: 0,
        fishing: 0,
        crafting: 0,
        hunting: 0,
        communication: 0,
        organization: 0,
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