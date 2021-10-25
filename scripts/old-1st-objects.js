//string handling inside of a DOM call
const movieList = document.getElementById('movie-list');
movieList.style['background-color'] = 'red'; // movieList.style.backgroundColor = 'blue'; 
movieList.style.display = 'block';

const person = {
  "the genre": ["male", "female"],  //key values can have a string in their name
  name: "Christopher",
  age: 27,
  hobbies: ["football", "movies", "eating"],
  greet: () => {
    console.log(
      `Hi my name is ${person.name}, I'm ${person.age} and I like to ${person.hobbies}`
    );
  },
  11.5: 'Hello',
};



// 1 -> adding a new value to the person's Object
person.isAdmin = true; 
// 2 -> delete a value in the person's object
delete person.age; 
// 3 -> getting a object key passed as 'string' (keys can be string)
console.log(`my genre is: ${person['the genre'][0]}`);
console.log(person[11.5]);
console.log(person);


// how to enter a value inside of an array inside of an object
