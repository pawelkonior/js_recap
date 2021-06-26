// const names = ['pawel', 'ala', 'ela'];
// names.push('ula')

// console.log(names)

// ["10", "10", "10"].map(parseInt)

// ["10", "10", "10"].map((item, idx, arr) => parseInt(item, idx))


const data = [
    {
        name: "pawel",
        age: 36,
        city: "krakow",
        hobbies: ["python", "javascript", "drugs"]
    },
    {
        name: "lukasz",
        age: 37,
        city: "wroclaw",
        hobbies: ["motobike", "drones", "travelling"]
    },
    {
        name:"wojtek",
        age: 36,
        city:"poznan",
        hobbies:["python", "js", "rockandroll"]
    },
    {
        name: 'imie',
        age: 3,
        city: "miasto",
        hobbies: ['music', 'festivals', 'alcohol']
    },
    {
        name: "delfa",
        age: 29,
        city: "ruda",
        hobbies: ["books", "music", "travels"]
    },
    {
        name: "piotr",
        age: 31,
        city: "poznan",
        hobbies: ["cycling","motorsport"]
    },
    {
        name: 'niko',
        age: 33,
        city: 'soko',
        hobbies: ['sex', 'drugs', 'rockin']
    }
]


// średnia wieku

let sumAge = 0;

for (let i = 0; i < data.length; i++){
    sumAge += data[i].age;
}

// console.log(sumAge/data.length)

let sumAge2 = data
    .map(element => element.age)
    .reduce((acc, cur) => acc + cur) / data.length

// console.log(sumAge2)

let sumAge3 = 0

data.forEach(item => {
    sumAge3 += item.age;
})

// console.log(sumAge3 / data.length)

let sumAge4 = 0;
let counter4 = 0;

for (let i = 0; i < data.length; i++){
    if (data[i].name.length >= 5){
        sumAge4 += data[i].age
        counter4++
    }
}

// console.log(sumAge4 / counter4)

let sumAge5 = 0;
let counter5 = 0;

data.forEach(element => {
    if (element.name.length >= 5){
        sumAge5 += element.age
        counter5++
    }
})

// console.log(sumAge5 / counter5)


const people = data.filter(item => item.name.length >= 6)
const sumAge6 = people
    .map(item => item.age)
    .reduce((acc, curr) => acc + curr) / people.length
// console.log(sumAge6)


const poznanPeople = data.filter(element => element.city === 'poznan');
const result = poznanPeople
    .map(person => person.hobbies)
    .flat()

// console.log(result)


const hobbies = new Set(data.map(item => item.hobbies).flat())

// console.log(hobbies.size)