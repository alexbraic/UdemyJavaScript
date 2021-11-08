// Please read the README file to see what the challenge is.
// Uncomment different data sets to reveal different outcomes

// Teams data
// const dolphinsScores = [ 96, 108, 89 ];
// const koalasScores = [ 88, 91, 110 ];

// const dolphinsScores = [ 97, 112, 101 ];
// const koalasScores = [ 109, 95, 123 ];

const dolphinsScores = [  97, 112, 101 ];
const koalasScores = [ 109, 95, 106 ];

// 1. calculate averages
let total = 0;
for (let i=0; i < dolphinsScores.length; i++) {
    total += dolphinsScores[i];
};

const avgDolPoints = total / dolphinsScores.length;

total = 0;
for (let i=0; i < koalasScores.length; i++) {
    total += koalasScores[i];
};

const avgKoaPoints = total / koalasScores.length;

console.log("Main");
console.log(`The Dolphins have a ${avgDolPoints} point average.`)
console.log(`The Koalas have a ${avgKoaPoints} point average.`)


// 2. Comapre scores and declare winner
if (avgDolPoints > avgKoaPoints) {
    console.log('And the Dolphins win the trophy!!');
} else  if (avgDolPoints < avgKoaPoints) {
    console.log('And the Koalas win the trophy!!');
} else {
    console.log('It\'s a draw ladies and gentlemen!');
};


// Bonus 1 - min. win score is over 100 and score is higher than opponent team

console.log();
console.log("Bonus 1");
console.log(`The Dolphins have a ${avgDolPoints} point average.`)
console.log(`The Koalas have a ${avgKoaPoints} point average.`)

if((avgDolPoints > avgKoaPoints) && (avgDolPoints, avgKoaPoints >= 100)) {
    console.log('And the Dolphins win the trophy!!');
} else if ( ( avgKoaPoints > avgDolPoints ) && ( avgDolPoints, avgKoaPoints >= 100 ) ) {
    console.log('And the Koalas win the trophy!!');
} else if ( ( avgDolPoints === avgKoaPoints ) && ( avgDolPoints, avgKoaPoints >= 100 ) ) {
    console.log("It's a draw!")
} else {
    console.log("No one scored over 100 points! No winners!");
};

// Bonus 2 - draw applies if both teams score over 100 points in that match

console.log();
console.log("Bonus 2");
console.log(`The Dolphins have a ${avgDolPoints} point average.`)
console.log(`The Koalas have a ${avgKoaPoints} point average.`)

if( (avgDolPoints > avgKoaPoints) ) {
    console.log('And the Dolphins win the trophy!!');
} else if ( (avgKoaPoints > avgDolPoints) ) {
    console.log('And the Koalas win the trophy!!');
} else if ( ( avgDolPoints === avgKoaPoints ) && (avgDolPoints, avgKoaPoints < 100 ) ) {
    console.log("No one scored over 100 points! No winners!")
} else {
    console.log("It's a draw!")
};