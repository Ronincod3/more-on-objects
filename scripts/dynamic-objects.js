const chosenValueOfKeyName = prompt("chose the value for the dynamic key name");
const chosenKeyNameValue = prompt("chose the key name value");
let userChosenKeyName = "level";

let person1 = {
  "the genre": ["male", "female"], //key values can have a string in their name
  name: "Christopher",
  age: 27,
  [userChosenKeyName]: "...",
  hobbies: ["football", "movies", "eating"],
  greet: () => {
    console.log(
      `Hi my name is ${person1.name}, I'm ${person1.age} and I like to ${person1.hobbies}`
    );
  },
  11.5: "Hello",
};


const allocateDynamic = () => {
  const key = chosenValueOfKeyName;
  const keyValue = chosenKeyNameValue;
  person1[key] = person1[userChosenKeyName];
  delete person1[userChosenKeyName];
  person1[key] = keyValue;
};

allocateDynamic();
console.log(person1);



// obj["key3"] = "value3";
// myArray[objIndex].name = "Laila"