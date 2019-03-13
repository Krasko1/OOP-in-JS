let person = {name: 'Vlada'};

// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
// console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

person.name = 'John';
// console.log(person);
// console.log(Object.keys(person));
delete(person.name);
console.log(person);
