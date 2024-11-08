const person = {
    name: "Max",
    age: "27"
};

function printInfo(name, age) {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
printInfo.call(person);