// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers(arr) {
  const twoDrivers = [arr[0], arr[1]];
  return twoDrivers;
}

function returnLastTwoDrivers(arr) {
  const twoDrivers = [arr[arr.length - 2], arr[arr.length - 1]];
  return twoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(value) {
  return function (fare) {
    return fare * value;
  };
}

function fareDoubler(fare) {
  const x = createFareMultiplier(2)(fare);
  return x;
}

function fareTripler(fare) {
  const x = createFareMultiplier(3)(fare);
  return x;
}

function selectDifferentDrivers(arr, Function) {
  return Function(arr);
}

const x = fareDoubler(5);
console.log(x);
//console.log(x(3));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
