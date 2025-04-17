import { data } from "./data.js";

let getNamespace = []; 

data.map((element) => getNamespace.push(element.parameters.namespace));

export {getNamespace}