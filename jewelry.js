let enhancementType = ["happiness", "communication", "organization", "crafting"];

const jewelry = {
    name: "",
    weight: 0,
    description: "",
    category: "jewelry",
    position: "",
    isGift: true,
    relationShipBonus: 0, //better quality builds relationships faster when given as gift
    isEnhancer: true,
    enhancementType: enhancementType[0], //happiness - from enhancing looks
    enhancementScore: 0,
    weatherRating: { //jewelry doesn't help against weather always all zeros. Would empty object or no weatherRating object be better?
        sun: 0,
        rain: 0,
        cold: 0,
    }
};

module.exports = jewelry;