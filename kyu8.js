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
    for(const element of arr) {
        if (element > 0) result += element;
    }
    return result;
}

console.log(positiveSum([1,2,3,4,5]));

// Return Negative

let makeNegative = (num) => {
    return -Math.abs(num);
};

console.log(makeNegative(1));



