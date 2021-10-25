//string template literals

const firstname = "Alex";
const lastname = "Braic";
const birthYear = 1986;
const year = 2021;

const alex = "I'm " + firstname + ", a " + (year - birthYear) + " year old man.";

const alexNew = `I'm ${firstname}, a ${(year - birthYear)} year old man.`
console.log(alex);
console.log(alexNew);

// multi-line strings

console.log("String on \n\
multiple \n\
lines");

//string with template literals

console.log(`String on
multple
lines`);

// if..eles statements
const age = 17;

if(age >= 18) {
    console.log(`You are old enough to drive 😊`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Please wait ${yearsLeft} years. 😉`)
};

if(birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}