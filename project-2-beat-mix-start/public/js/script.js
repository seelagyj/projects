// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
const toggleDrum = (drumType, index) => {
    if (drumType==='kicks') {
        if (kicks[index]===false) {kicks.splice(index, 1, true);}
        else if(kicks[index]===true) {kicks.splice(index, 1, false);}
    }
    else if (drumType==='snares') { 
        if (snares[index]===false) {snares.splice(index, 1, true)}
        else if (snares[index]===true) {snares.splice(index, 1, true)}
    }
    else if (drumType==='hiHats') {
        if (hiHats[index]===false) {hiHats.splice(index, 1, true)}
        else if (hiHats[index]===true) {hiHats.splice(index, 1, false)}
    }
    else if (drumType==='rideCymbals') {
        if (rideCymbals[index]===false) {rideCymbals.splice(index, 1, true)}
        else if (rideCymbals[index]===true) {rideCymbals.splice(index, 1, false)}
    }
}
const clear = (drumType) => {
    if (drumType==='kicks') {
        kicks.fill(false, 0, 16);
    }
    else if (drumType==='snares') {
        snares.fill(false,0,16);
    }
    else if (drumType==='hiHats') {
        hiHats.fill(false, 0, 16);
    }
    else if (drumType==='rideCymbals') {
        rideCymbals.fill(false, 0, 16);
    }
}
const invert = (drumType) => {
    if (drumType==='kicks') {
        let flipKicks = kicks.map(element => !element);
        kicks = flipKicks;
    }
    if (drumType==='snares') {
        let flipSnares = snares.map(element => !element);
        snares = flipSnares;
    }
    if (drumType==='hiHats') {
        let flipHiHats = hiHats.map(element => !element);
        hiHats = flipHiHats;
    }
    if (drumType==='rideCymbals') {
        let flipRideCymbals = rideCymbals.map(element => !element)
        rideCymbals = flipRideCymbals;
    }
}
const getNeighborPads = (x, y, size) => {
    let neighborArray = [];
    let above = [x, y+1];
    let below = [x, y-1];
    let left = [x-1, y];
    let right = [x+1, y];
    if (y<(size-1) && y>=0 && x>=0 && x<size) {neighborArray.push(above)}
    if (y>0 && y<size && x>=0 && x<size) {neighborArray.push(below)}
    if (x>0 && x<size && y>=0 && y<size) {neighborArray.push(left)}
    if (x<(size-1) && x>=0 && y>=0 && y<size) {neighborArray.push(right)}
    return neighborArray;
}