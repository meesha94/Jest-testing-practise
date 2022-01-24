const add = (num1, num2) => {
    return num1 + num2

}

let myArray =['Dan', 'Stuart', 'Ben'];

const randFunc = () => {
    return null
}

let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false; // changes the value of coffeeIsgrinding
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans();

let myArraySix = ["random", "words", "timings", "difference"];

const sixOrMore = () => {
    for (i=0; i <myArraySix.length; i++) {
        if (myArraySix[i].length >= 6) {
            console.log(myArraySix[i]);
        } 
    }
}
sixOrMore();

let num = 15;
let text = num.toString();



let planets = [null, 'Mercury', 'Venus','Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus','Neptune'];
console.log(planets[2]);

const attending = [true, true, true,false, true, false];
const count = attending.filter(Boolean).length;

console.log(count);

let nums = [3,6,7,10];
const map = nums.map(x => Math.pow (x,2));
const newNums = map.join('');
console.log(newNums);

let year = "1704";
const century = year.substring(0,2);

console.log(century);

const arr = [1, 0, 0, 1];
const parseArray = (arr) => {
   const binaryString = arr.join("");
   return parseInt(binaryString, 2);
};
console.log(parseArray(arr));


module.exports = {
    add,
    myArray,
    randFunc,
    pressGrindBeans,
    sixOrMore,
    text, 
    planets,
    count,
    newNums,
    century,
    parseArray

}