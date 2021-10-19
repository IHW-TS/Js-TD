Animals = [{
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Minou',
        age: 10,
        type: 'cat'
    },

];


let isDog = (animal) => {
    return animal.type === 'dog';
}
let dogYears = (animal) => {
    return animal.age * 7;
}
let sum = (sum, animal) => {
    return sum + animal;
}
let agesDogs = Animals
    .filter(isDog)
    .map(dogYears)
    .reduce(sum);


let agesCats = Animals
    .filter(animal => animal.type === 'cat')
    .map(animal => animal.age * 7)
    .reduce((sum, age) => sum + age)

console.log('AgesDogs =', agesDogs);
console.log('AgesCats =', agesCats);