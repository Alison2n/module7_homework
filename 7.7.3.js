const users = [
    {
        name: "Алексей",
        age: 18
    },
    {
        name: "Мария",
        age: 10
    },
    {
        name: "Иван",
        age: 22
    },
    {
        name: "Елена",
        age: 5
    },
    {
        name: "Сергей",
        age: 35
    }
];

const adults = users.filter((user) => {
    return user.age >= 18
});

const names = users.map((user) => {
    return user.name
});
console.log(adults);
console.log(names);