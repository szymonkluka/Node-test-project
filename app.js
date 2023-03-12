const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Jacob', 'Marian', 'Andrew'];
const femaleNames = ['Anna', 'Veronica', 'Sussane'];
const lastNames = ['Costner', 'April', 'Strong'];
const minAge = 18;
const maxAge = 78;

function chooseRandomElement(arr) {
    const randomElement = Math.floor(Math.random() * arr.length);
    return arr[randomElement]
}

const people = [];

for (let i = 1; i <= 20; i++) {


    const gender = chooseRandomElement(genders);
    const firstName = chooseRandomElement(gender == 'M' ? maleNames : femaleNames);
    const lastName = chooseRandomElement(lastNames);
    const age = Math.floor(Math.random() * (maxAge - minAge - 1) + minAge);

    const person = {
        gender, firstName, lastName, age,
    };
    people.push(person);
}

const data = JSON.stringify(people)

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
