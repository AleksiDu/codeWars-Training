//Even or Odd

export function even_or_odd(n: number): string {
  // ...
  if (n % 2) {
    return "Odd";
  } else {
    return "Even";
  }
}

console.log(even_or_odd(2));

// Multiply
console.log("Multiply");
export function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(1, 1));

// Multiples of 3 or 5
console.log("Multiples of 3 or 5");

export class Challenge {
  static solution(number: number) {
    let sum = 0;
    if (number < 0) {
      return 0;
    }
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

console.log(Challenge.solution(10));
