// Compare Two json objects
let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let stringify1 = JSON.stringify(obj1);
let stringify2 = JSON.stringify(obj2);

let parseObj1 = JSON.parse(stringify1);
let parseObj2 = JSON.parse(stringify2);

let objectKeys1 = Object.keys(parseObj1);
let objectKeys2 = Object.keys(parseObj2);

let objectCompare = (obj1, obj2) => {
  if (obj1.length !== obj2.length) {
    console.log("Not same properties");
    return;
  }
  for (let key of obj1) {
    console.log(key);
    if (!obj2.includes(key) || obj1[key] !== obj2[key]) {
      console.log("is not same properties");
      return;
    }
  }
  console.log("same properties");
};
objectCompare(objectKeys1, objectKeys2);
