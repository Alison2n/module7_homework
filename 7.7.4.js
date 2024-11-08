const person = {
    name: "Eliza",
    age: 78
};

function setFullName(person, str) {
    return person.fullName = str;
};
const setPersonFullName = setFullName.bind(null, person);
setPersonFullName("John Smith");

console.log(person.fullName); 
