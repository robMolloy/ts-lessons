"use strict";
const getFeatures = async () => {
    var _a, _b, _c, _d;
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const productData = await response.json();
    const features = {
        featureList: (_d = (_c = (_b = (_a = productData === null || productData === void 0 ? void 0 : productData.cms) === null || _a === void 0 ? void 0 : _a.headlessApiJson) === null || _b === void 0 ? void 0 : _b.product) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.featureList,
    };
    return features;
};
