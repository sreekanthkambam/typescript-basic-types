// number, string, boolean, arrays, object, tuple, enum, type aliasing
function add(n1, n2) {
    return n1 + n2;
}
function printMessage(message, addPrefix) {
    var finalMessage = '';
    if (addPrefix) {
        finalMessage = 'Message: ';
    }
    finalMessage = finalMessage + message;
    console.log(finalMessage);
}
var n1 = 10;
var n2 = 20;
var houses = ['Varthur', 'Gattahalli'];
var person = {
    name: 'Sreekanth',
    age: 30,
    properties: houses
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
;
var tuple = [1, Role.ADMIN, 'User'];
var role = Role.ADMIN;
printMessage(add(n1, n2).toString(), false);
person.properties.forEach(function (property) {
    printMessage(property, true);
});
