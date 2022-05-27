//Vowel Count
// My solution
let getCount = (str) => {
    let vowelsCount = 0;
    let splitStr = str.split("") // Best Practices (str.match(/[aeiou]/ig)||[]).length;
    let regex = /[aeiou]/gi;
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] == splitStr[i].match(regex)) {
            vowelsCount++;
        };
    };
    return vowelsCount;
};

console.log(getCount("pear tree"));