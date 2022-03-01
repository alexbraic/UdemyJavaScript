// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmiIndex =  this.weight / this.height ** 2;
        return this.bmiIndex;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmiIndex =  this.weight / this.height ** 2;
        return this.bmiIndex;
    }
}

console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI().toFixed(2)}) is higher than ${john.firstName} ${john.lastName}'s (${john.calcBMI().toFixed(2)})!`);
