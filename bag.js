const updateInventory = require("./updateInventory.js") //use file to create a new item, add it to the inventory obejct and return the updated inventory object

const bag = {
    maxWeight: null,
    currentWeight: null,
    lifeSpan: "90 hours or 3 months", //date time calulation
    currentSpan: "", //time in use 
    inventory: updateInventory,
};

module.exports = bag;