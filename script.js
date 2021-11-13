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

