console.log('Hello world, you are great');

function reversedString(value) {
    let reversedValue = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    })

    return reversedValue;
}




console.log(reversedString("Reverse me"));