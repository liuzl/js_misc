import { add, Student } from "./hello";

console.log(add(10, 20));

type StringOrNumber = string | number;
let value: StringOrNumber = 10;
value = 'Hello';

function format(value: string | number): string {
    return value.toString();
}

console.log(format(10));
console.log(format('Hello'));

interface A {
    a: string;
}

interface B {
    b: string;
}

type AandB = A & B;

const ab: AandB = {
    a: 'Hello',
    b: 'World'
};

function isString(value: any): value is string {
    return typeof value === 'string';
}

function log(value: string | number) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

log('Hello');
log(10);

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>('Hello'));
console.log(identity<number>(10));

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}

type ReadonlyStudent = Readonly<Student>;

const student: ReadonlyStudent = {
    name: 'John',
    age: 20,
    greet: () => 'Hello'
};

//student.name = 'Jane';

student.greet();