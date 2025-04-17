import { getDataValues } from "./elementValue.js";
import { finalNumber } from "./subtractionNumber.js";

let secretPropertiesFirstElement = [];
let secretPropertiesSecondtElement = [];
let secretPropertiesThirdElement = [];

let modifiedFirstElement = [];
let modifiedSecondtElement = [];
let modifiedThirdElement = [];

const secretPropertieElements = function (getDataValues) {

for (let element of  getDataValues){
  element.includes("1001")
      ? secretPropertiesFirstElement.push(element)
      : secretPropertiesFirstElement;
  element.includes("1002")
      ? secretPropertiesSecondtElement.push(element)
      : secretPropertiesSecondtElement;
  element.includes("1003")
      ? secretPropertiesThirdElement.push(element)
      : secretPropertiesThirdElement;
}

return [secretPropertiesFirstElement, secretPropertiesSecondtElement, secretPropertiesThirdElement]; 
};

const secretValuesConverter = function (secretPropertiesFirstElement, secretPropertiesSecondtElement, secretPropertiesThirdElement, modifiedNumber1, modifiedNumber2, modifiedNumber3){

secretPropertiesFirstElement.map((element) => modifiedFirstElement.push(element.replace("1001", modifiedNumber1))); 
secretPropertiesSecondtElement.map((element) => modifiedSecondtElement.push(element.replace("1002", modifiedNumber2))); 
secretPropertiesThirdElement.map((element) => modifiedThirdElement.push(element.replace("1003", modifiedNumber3))); 

return [modifiedFirstElement, modifiedSecondtElement,  modifiedThirdElement]
}


const separateSecretProperties = secretPropertieElements(getDataValues);
const convertedSecretValues = secretValuesConverter(secretPropertiesFirstElement, secretPropertiesSecondtElement, secretPropertiesThirdElement, ...finalNumber); 


export {modifiedFirstElement, modifiedSecondtElement,  modifiedThirdElement };
