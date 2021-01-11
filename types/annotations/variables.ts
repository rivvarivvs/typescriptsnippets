let apples: number = 5;
// the colon and the type after
// is the type annotation

apples = true;
// it gives us an error because the apples var
// is not assignable to a type of boolean, only number

apples = 10; // this is okay, though

let speed: string = 'fast';
// again if we assign it to something that's
// not a string, we'd have an error

let nothing: null = null;
// the first time where the type has a name
// identical to its type

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
// we're not creating an array
// we're saying that we'll assign an array that
// contains strings

// array of nmbs
let myNumbers: number[] = [1, 2, 3, 4];

// array of booleans
let truths: boolean[] = [ true, false, false, true ];

// Classes
// the variable car is an instance of the class Car
// its type is the Car class
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}