let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

let age = 11;

console.log(age)

/* Notice the lack of let - we don’t need it since the variable has already been declared and we are just re-assigning */
age = 54

console.log(age)

// Re-assigning is cool and all, but what if we don’t want it to happen?
// For example we might have a constant pi which will never need to be re-assigned.
// We can accomplish this using the const keyword.

const pi = 3.14
console.log(pi);

// let, which we can re-assign.
// const which we can’t re-assign and will throw an error if we try.
//
//
// There is also a third way, var, which was the original way variables were declared in JavaScript.
// var is similar to let in that variables assigned this way can be reassigned,
// but it has other quirks that were cleared up when the language introduced let and const.
// By and large, it is not used anymore.
// However, you will likely come across code which uses var at some point, so it is useful to know that it exists.

console.log((3 + 2) - 76 * (1 + 1))
