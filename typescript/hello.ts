function greet(name: string): string {
    return `Hello, ${name}!`;
}

const yourName = 'World';
console.log(greet(yourName));

let age: number = 20;
let xname: string = 'John';
let isStudent: boolean = true;

let scores: number[] = [10, 20, 30];
let student: [string, number] = ['John', 20];

enum Colors {
    Red,
    Green,
    Blue
}

let favoriteColor: Colors = Colors.Green;

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: 'John',
    age: 20
};

export function add(a: number, b: number): number {
    return a + b;
}

let add2 = (a: number, b: number): number => a + b;

export class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, ${this.name}!`;
    }
}