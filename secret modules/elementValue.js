import { data } from "./data.js";

let getDataValues =[];
const getValues = function (data) {
  for(let i = 0; i< data.length; i++){
    data[i].parameters.secrets.map((element) => getDataValues.push(element));
  }
    return getDataValues; 
};

let extractedValu = getValues(data); 

export { getDataValues };
