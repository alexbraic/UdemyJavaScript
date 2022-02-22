// test data
// const dolphinsScore = [44, 23, 71];
// const koalasScore = [65, 54, 49];

const dolphinsScore = [85, 54, 41];
const koalasScore = [23, 34, 27];


const calcAverage = (scoreArray) => {
    return scoreArray.reduce((a,b) => a + b) / scoreArray.length;
};

const avgDolphins = calcAverage(dolphinsScore);
const avgKoalas = calcAverage(koalasScore);

function checkWinner (Dolphins ,Koalas) {

    if(Dolphins >= (Koalas * 2)) {
        return console.log(`Dolphins win ${Dolphins} to ${Koalas}!`)
    }
    else if (Koalas >= (Dolphins * 2)) {
       return console.log(`Dolphins win ${Koalas} to ${Dolphins}!`)
    }
    return 'No winner!';
}

checkWinner(avgDolphins, avgKoalas);
