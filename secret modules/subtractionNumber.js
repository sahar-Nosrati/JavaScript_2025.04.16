import {stringNumbers} from "./convertStringToNumber.js";

const unitNumber = 1000;
let finalNumber; 
const convert_subtractionNumber = function (stringNumbers){
  finalNumber = stringNumbers.map((element) => element - unitNumber);
  return finalNumber;
} 

const favoriteNumber = convert_subtractionNumber(stringNumbers);

export{finalNumber}