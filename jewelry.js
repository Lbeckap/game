let enhancementType = ["happiness", "communication", "organization", "crafting"];

const jewelry = {
    name: "",
    weight: null,
    description: "",
    category: "jewelry",
    position: "",
    isGift: true,
    relationShipBonus: null, //better quality builds relationships faster when given as gift
    isEnhancer: true,
    enhancementType: enhancementType[0], //happiness - from enhancing looks
    enhancementScore: null,
    weatherRating: { //jewelry doesn't help against weather always all zeros. Would empty object or no weatherRating object be better?
        sun: null,
        rain: null,
        cold: null,
    }
};

module.exports = jewelry;