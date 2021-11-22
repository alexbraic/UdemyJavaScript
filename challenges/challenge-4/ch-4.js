// For the challenge description, please read the README file

const billData = [ 275, 40, 430 ];

var tip = 0;

for (let i = 0; i < billData.length; i++) {
    tip = billData[i] > 50 && billData[i] < 300 ? billData[i] * 0.15 : billData[i] * 0.2;
    console.log(`The bill was ${billData[i]}, the tip was ${tip} and the total value ${ billData[i] + tip }.`)
};
