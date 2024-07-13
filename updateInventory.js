const clothing = require("./clothing"); //for testing

const inventory = {};

inventory.item = createItem(clothing.upper); //assigning item to inventory object.

function createItem(objectAcquired) { //create item (what does the mean exactly?)
    let newItem = {
        name: objectAcquired.name,
        weight: objectAcquired.weight,
        description: objectAcquired.description,
        category: objectAcquired.category,
    }
    return newItem;
};

//? how to add item to current inventory? May need to create backend for storage of current inventory?

module.exports = inventory;

//----------Result should be like below---------
/*
    inventory: {
        item1: {
            name: "",
            weight: 0,
            description: "used for ....",
            category: "jewelry",
        },
        item2: {

        }
    }
*/