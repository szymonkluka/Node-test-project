const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Jacob', 'Marian', 'Andrew'];
const femaleNames = ['Anna', 'Veronica', 'Sussane'];
const lastNames = ['Costner', 'April', 'Strong'];
const minAge = 18;
const maxAge = 78;

function drawnPerson(arr) {
    const randomElement = Math.floor(Math.random() * arr.length);
    return arr[randomElement]
}

const people = [];

//user entered number will loop through while output will show multiples //
for (let i = 1; i <= 20; i++) {


    const gender = drawnPerson(genders);
    const firstName = drawnPerson(gender == 'M' ? maleNames : femaleNames);
    const lastName = drawnPerson(lastNames);
    const age = Math.floor(Math.random() * (maxAge - minAge - 1) + minAge);

    const pushPersons = {
        gender, firstName, lastName, age,
    };
    people.push(pushPersons);
}

const data = JSON.stringify(people)

fs.writeFile('outputfile.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
