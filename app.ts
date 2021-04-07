// number, string, boolean, arrays, object, tuple,
// enum, type aliasing, unknown, function type, never
function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printMessage(message: string, addPrefix: boolean) {
    let finalMessage = '';
    if (addPrefix) {
        finalMessage = 'Message: ';
    }
    finalMessage = finalMessage + message;
    console.log(finalMessage);
}

type Person = {
    name: string;
    age: number;
    properties: string[];
};

const n1 = 10;
const n2 = 20;
const houses = ['Varthur', 'Gattahalli', 'ATP'];
const person: Person = {
    name: 'Sreekanth',
    age: 30,
    properties: houses
};

enum Role {
    ADMIN,
    USER
};
const tuple: [number, Role, string] = [1, Role.ADMIN, 'User'];
const role = Role.ADMIN;

let userInput: unknown;
let userName: string;

userInput = 'Hello';
if (typeof userInput === 'string') {
    userName = userInput;
}

printMessage(add(n1, n2).toString(), false);

person.properties.forEach((property) => {
    printMessage(property, true);
});

let sampleFn: (n1: number, n2: number) => number;
sampleFn = add;

const throwError = (): never => {
    throw 10;
}

let a: 2.8;
a= 2.8; // can't assign 'a' to other literal

let b: number | string;
b = 10;
b = 'Sree';

let c: 2 | true | 'Sree';
c = 'Sree';
