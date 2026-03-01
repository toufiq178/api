const person = {
    name : 'taj', 
    age : 21 ,
    hobby : 'web developer',
    skill : ['HTML', 'CSS', 'Tailwind css', 'Daisy ui' , 'javaScript'],
    isMarried : false,
}

console.log( person, typeof person);

// object to convert JSON 
const personJson = JSON.stringify(person);
console.log(personJson , typeof personJson);


// JSON to convert Object 
const parsePerson = JSON.parse(personJson);
console.log(parsePerson , typeof parsePerson);
