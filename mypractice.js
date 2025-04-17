const repeatedFruts = [
  ["apple", 500],
  ["cherrry", 400],
  ["peach", 400],
  ["pear", 200],
  ["cherrry", 100],
  ["peach", 40],
  ["pear", 86],
];

const countNumberFruit = new Map(repeatedFruts);
console.log(countNumberFruit);

console.log(countNumberFruit.get("peach"));


const addedFruit = countNumberFruit.set("pineapple", 64);
console.log(addedFruit);

console.log(addedFruit.size); 

const removedFruit = addedFruit.delete("pinapple");
console.log(removedFruit); 
console.log(addedFruit.size); 
console.log(removedFruit); 

addedFruit.forEach((fruit) => console.log(fruit)); 
const keyValuPairobject = addedFruit.entries();
console.log(keyValuPairobject); 

for (let key of keyValuPairobject){
  console.log(key)
}


const keyFruits = addedFruit.keys();
for (let key of keyFruits){
  console.log(key)
}
