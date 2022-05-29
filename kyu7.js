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

// Descending Order

descendingOrder = (n) => {
    return Number(((String(n).split("")).sort((a, b) => b - a)).join(""));
};

console.log(descendingOrder(42145));

// Mumbling

accum = (s) => {
    let result = [];
    let slpitedString = s.toLowerCase().split("");
    for (let i = 0; i < slpitedString.length; i++) { // Best Practices return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
        result.push(slpitedString[i].repeat(i + 1));
    };
    return result.map(str => str.replace(/^\w/g, firstLetter => firstLetter.toUpperCase())).join("-");
}
console.log(accum("abcd"));
