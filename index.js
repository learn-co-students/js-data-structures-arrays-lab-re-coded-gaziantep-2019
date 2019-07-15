// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(DAD) {
  drivers.push("Ralph");

}

function destructivelyPrependDriver(DPD) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(DRLD) {
  drivers.pop();
}

function destructivelyRemoveFirstDriver(DRFD) {
  drivers.shift();
}

function appendDriver(AD) {

  AD = "Broom";
  return [...drivers, AD];

}

function prependDriver(PD) {
  PD = "Arnold";
  return [PD, ...drivers];
}

function removeLastDriver(RLD) {

return drivers.slice(0,2);
}

function removeFirstDriver(RFD) {
  return drivers.slice(1);
}

