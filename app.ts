// number, string, boolean, arrays, object, tuple, enum, type aliasing
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
const houses = ['Varthur', 'Gattahalli'];
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

printMessage(add(n1, n2).toString(), false);

person.properties.forEach((property) => {
    printMessage(property, true);
});

