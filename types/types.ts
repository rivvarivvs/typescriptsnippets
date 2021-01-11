const today = new Date();
today.getMonth();

const person = {
    age: 20
};
// now the person object only has the age property

class Color {

}
const red = new Color();
// now red is of type Color - it has access
// to all methods and props of Color, which are none atm

// if I try to use any methods, I'll get an error