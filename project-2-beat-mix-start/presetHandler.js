// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsIndex, newPresetArray) => {
    let returnArray
    if (requestType !== 'GET' && requestType !== 'PUT') {
        returnArray = [400];
    }
    else if (presetsIndex >= presets.length || presetsIndex < 0 || typeof presetsIndex != 'number') {
        returnArray = [404];
    }
    else if (requestType === 'GET') {
        returnArray = [200, presets[presetsIndex]];
    }
    else if (requestType === 'PUT') {
        presets.splice(presetsIndex, 1, newPresetArray);
        returnArray = [200, newPresetArray];
    }
    return returnArray;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
