// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(){
  drivers.push("Ralph");
}
function destructivelyPrependDriver(){
  drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(){
 const copyOfdrivers = drivers.slice();
 copyOfdrivers.push("Broom");
 return copyOfdrivers;
}
function prependDriver(name){
  const copyOfdrivers = drivers.slice();
 copyOfdrivers.unshift("Arnold");
 return copyOfdrivers;
}
function removeLastDriver(){
 const copyOfdrivers = drivers.slice();
 copyOfdrivers.pop();
 return copyOfdrivers;
}
function removeFirstDriver(){
  const copyOfdrivers = drivers.slice();
 copyOfdrivers.shift();
 return copyOfdrivers;
}