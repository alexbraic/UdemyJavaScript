//Access the README file to see challenge description

//mark test data
const markMassData = [ 78, 95 ];
const markHeightData = [ 1.69, 1.88 ];


//john test data
const johnMassData = [ 92, 85 ];
const johnHeightData = [ 1.95, 1.76 ]

//person function
const Person = function(mass, height) {
    this.mass = mass;
    this.height = height;
};

    //mark 1
let mark1 = new Person(markMassData[0], markHeightData[0]);
    //john 1
let john1 = new Person(johnMassData[0], johnHeightData[0]);

    //mark 2
let mark2 = new Person(markMassData[1], markHeightData[1]);
    //john 2
let john2 = new Person(johnMassData[1], johnHeightData[1]);



    //Body Mass Index formula
    //const BMI  = mass / height ** 2 
    //or const BMI = mass / (height * height);



function bmiCalc(mass, height) {
    const BMI  = (mass / height ** 2);

    return BMI;
}

const markBMI = bmiCalc(mark1.mass, mark1.height);
const johnBMI = bmiCalc(john1.mass, john1.height);

//print the BMI's
console.log('First test data')
console.log(`Mark's BMI: ${markBMI.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI.toFixed(2)}`);

//print the outcome of the comparison
if (markBMI > johnBMI) {
    console.log(`"So, Mark's BMI (${markBMI.toFixed(2)}) is higher than John's BMI (${johnBMI.toFixed(2)})!"`);
} else {
    console.log("So, John's BMI is higher than Mark's!");
}

//second test
const mark2BMI = bmiCalc(mark2.mass, mark2.height);
const john2BMI = bmiCalc(john2.mass, john2.height);

console.log();
console.log('Second test data');
console.log(`Mark's BMI: ${mark2BMI.toFixed(2)}`);
console.log(`John's BMI: ${john2BMI.toFixed(2)}`);

//print the second data aoutcome
if (mark2BMI > john2BMI) {
    console.log(`"Mark's BMI (${mark2BMI.toFixed(2)}) is higher than John's BMI (${john2BMI.toFixed(2)})!"`);
} else {
    console.log(`John's BMI (${john2BMI.toFixed(2)}) is higher than Mark's BMI (${mark2BMI.toFixed(2)} )!`);
}