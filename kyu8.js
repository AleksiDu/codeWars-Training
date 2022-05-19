//Even or Odd

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





