console.log('Hello world, you are great');


// a function that reverses a value
function reversedString(value) {
    let reversedValue = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    })

    return reversedValue;
}

console.log(reversedString(1353));

