import { resolve } from "path";

interface person {
    name: string,
    age: number
}


let person1: person = {
    name: "zul",
    age: 17
}
let person2: person = {
    name: "kiki",
    age: 16
}

export default async function getPerson() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    let persons: person[] = [person1, person2];
    return persons;
}