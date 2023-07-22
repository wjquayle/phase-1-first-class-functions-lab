// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
    let drivers = [...driversArray.slice(0,2)];
    return drivers
}
const returnLastTwoDrivers = function(driversArray) {
    let drivers = [...driversArray.slice(driversArray.length - 2)];
    return drivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare=5) {
        return fare * int;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
}