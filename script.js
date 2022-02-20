// //string template literals

// const firstname = "Alex";
// const lastname = "Braic";
// const birthYear = 1986;
// const year = 2021;

// const alex = "I'm " + firstname + ", a " + (year - birthYear) + " year old man.";

// const alexNew = `I'm ${firstname}, a ${(year - birthYear)} year old man.`
// console.log(alex);
// console.log(alexNew);

// // multi-line strings

// console.log("String on \n\
// multiple \n\
// lines");

// //string with template literals

// console.log(`String on
// multple
// lines`);

// // if..eles statements

// const age = 17;

// if(age >= 18) {
//     console.log(`You are old enough to drive 😊`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Please wait ${yearsLeft} years. 😉`)
// };

// if(birthYear <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }


//Episode 20 - type conversion and type coersion
// type conversion
// explicitly converting a type

// const inputYear = '1991';
// console.log(inputYear + 18); //results in string concatenation

// const year = Number(inputYear); //change the string to int
// console.log(year + 18); //integer sum
// console.log(Number('John')); //NaN (Not a number, so invalid number result)
// console.log(String(23), 23); //converted string, number
// console.log(typeof(String(23)), typeof(23));
// // type coersion
// // automatic type conversion
// console.log('I am ' + 23 + ' years old.');

// // the '+' transforms numbers into strings
// // all the other operators, logical included, keep numbers
// console.log('23' + '10' + 3); // the '+' concatenates the items
// console.log('23' - '10' - 3); //the '-' transformes them to numbers

// let n = '1' + 1;
// n -= 1;
// console.log(n); //result == 10


// falsy values : 0, '', undefined, null, NaN
//      else truthy values
// converted to false when converted to a boolean


// logical operators
// const hasDriversLicence = true;
// const hasGoodVision = true;

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (hasDriversLicence && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive!')
// }

// const isTired = false;

// if (hasDriversLicence && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive!');
// }


// switch stateements

// const day = "monday";

// switch(day) {
//     case "monday":  //day === monday
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day');
// }

// ternary operator

// const age = 15;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('No wine for me 😒');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(`I like to drink ${drink}`);

// functions

// function logger() {
//     console.log("My name is Alex");
// }
// //calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// };

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//DRY Don't Repeat Yourself

// //function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// };

// const myAge = calcAge1(1986);

// //function expression
// //annonimous function
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1986);

// console.log(myAge, age2);

// //arrow functions - still a function expression
// //implicit return. Good for 1 liner functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1986);
// console.log(age3);

// const yearsUntilRetire = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetire(1986, 'Alex'));
// console.log(yearsUntilRetire(1991, 'Bob'));

// //Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//         const applePieces = cutFruitPieces(apples);
//         const orangePieces = cutFruitPieces(oranges);
//         const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} orange pieces.`;
//         return juice;
//     };

// console.log(fruitProcessor(2, 3)); 

// // 37. Review
// const calcAge = function (birthYear) {
//     return age = 2037 - birthYear;
// }
// function yearsUntilRetire (birthYear, firstName) {
//         const age = calcAge(birthYear);
//         const retirement = 65 - age;
        
//         if(retirement > 0) {
//             console.log(`${firstName} retires in ${retirement} years.`);
//             return retirement;
//         }
//         else {
//             result = console.log(`${firstName} has already retired.`);
//             return result;
//         }
//     }
// console.log(yearsUntilRetire(1950, 'Alex'));


