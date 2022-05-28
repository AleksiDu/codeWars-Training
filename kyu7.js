// Vowel Count
// My solution
let getCount = (str) => {
    let vowelsCount = 0;
    let splitStr = str.split("") // Best Practices return (str.match(/[aeiou]/ig)||[]).length;
    let regex = /[aeiou]/gi;
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] == splitStr[i].match(regex)) {
            vowelsCount++;
        };
    };
    return vowelsCount;
};

console.log(getCount("pear tree"));

// Square Every Digit
// My Solution
let squareDigits = (num) => {
    resultArr = [];
    numToString = String(num); // Best Practices return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    for (let i = 0; i < numToString.length; i++) {
        resultArr.push(numToString[i] ** 2);
    }
    return Number(resultArr.join(""));
}

console.log(squareDigits(9119));

// Dismvowel Trolls

let dismvowel = (str) => {
    return str.replace(/[aeiou]/gi, "");
}

console.log(dismvowel("This website is for losers LOL!"));

// Highest and Lowest 
// My Solution
highAndLow = (numbers) => {
    let result = numbers.split(" ").sort((a, b) => a - b); // Best Practices numbers = numbers.split(' ').map(Number);
    return (result[result.length - 1] + " " + result[0]);  // return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
};

console.log(highAndLow("1 2 31 4 -5"));