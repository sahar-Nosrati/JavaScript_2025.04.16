import {
  modifiedFirstElement,
  modifiedSecondtElement,
  modifiedThirdElement,
} from "./replacementNumber.js";
import { data } from "./data.js";

const beauty = "beauty";
let modifiedData;

const dataConverter = function (
  data,
  modifiedFirstElement,
  modifiedSecondtElement,
  modifiedThirdElement
) {
  console.log(
    modifiedFirstElement,
    modifiedSecondtElement,
    modifiedThirdElement
  );

  for (let i = 0; i < data.lenght; i++) {
    console.log(data[i].parameters.secrets.lenght);
  }
};

const temporaryResult = dataConverter(
  modifiedFirstElement,
  modifiedSecondtElement,
  modifiedThirdElement
);

export {
  beauty,
  modifiedFirstElement,
  modifiedSecondtElement,
  modifiedThirdElement,
  temporaryResult,
};
