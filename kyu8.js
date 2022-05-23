// Even or Odd

let evenOrODdd = (int) => {
    if (isNaN(int) || int === null || int === "" || int === undefined) {
        return int;
    } else if (int % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log(evenOrODdd(2));

// Sum of positive
let positiveSum = (arr) => {
    let result = 0;
    for (const element of arr) {
        if (element > 0) result += element;
    }
    return result;
}

console.log(positiveSum([1, 2, 3, 4, 5]));

// Return Negative

let makeNegative = (num) => {
    return -Math.abs(num);
};

console.log(makeNegative(1));

//Opposite number

let opposite = (number) => {
    return -number;
};

console.log(opposite(-3));

//Convert bollean values to strings "Yes" or "No"

let boolToWord = (bool) => {
    if (bool === true) return "Yes";
    if (bool === false) return "No";
};

console.log(boolToWord(true));

//String repeat
//My solution
let repeatStr = (n, s) => {
    let r = s;
    for (let i = 0; i < n - 1; i++) { //Best Practice return s.repeat(n);
        r = r + s;
    }
    return r;
};

console.log(repeatStr(5, '*'));

//Grasshopper-Summation
// My solution and Best Practice
let summation = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
};

console.log( summation(8));
