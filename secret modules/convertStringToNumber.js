import {getNamespace} from "./separateNameAndNumber.js"; 

let stringNumbers; 
const SeparationNumber = function (getNamespace){
  stringNumbers = getNamespace.map((element) => element.substring(7));
  return stringNumbers;
}

const convertedStringToNumber = SeparationNumber(getNamespace)

export{stringNumbers}; 