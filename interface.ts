interface Person {
    name: string;
    age: number;
    email: string;
}

const person1:Person = {
    name: "gela",
    age: 20,
    email: "cotne.sxvitaridze@gmail.com"
}

function printPersonDetails(person:Person) {
    console.log(
        `Name: ${person.name},
        Age: ${person.age},
        Email: ${person.email}`
    )
}

const gela = printPersonDetails(person1)