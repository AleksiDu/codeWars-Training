//Even or Odd

export function even_or_odd(n: number): string {
  // ...
  if (n % 2 != 0) {
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

// Valid Braces
console.log("Valid Braces");

export function validBraces(braces: string): boolean | undefined {
  const stack: string[] = [];
  for (const brace of braces) {
    if (brace === "(" || brace === "{" || brace === "[") {
      stack.push(brace);
    } else if (brace === ")" || brace === "}" || brace === "]") {
      if (stack.length === 0) {
        return false;
      }
      const lastBrace = stack.pop();
      if (
        (lastBrace === "(" && brace !== ")") ||
        (lastBrace === "{" && brace !== "}") ||
        (lastBrace === "[" && brace !== "]")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validBraces("()"));

// Stop gninnipS My sdroW!
console.log("Stop gninnipS My sdroW!");

export function spinWords(words: string): string {
  const reverseWordAr = words
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    );

  return reverseWordAr.join(" ");
}

console.log(spinWords("Hey fellow warriors"));

// Find the odd int
console.log("Find the odd int");

export const findOdd = (xs: number[]): number => {
  let result = 0;
  for (let num of xs) {
    result ^= num;
  }
  return result;
};

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// Sum of Digits / Digital Root
// Math length = Math.ceil(Math.log10(num + 1))
// digit of number from right = Math.floor((number / Math.pow(10, location - 1)) % 10)

/*
Best Practice:
export function digitalRoot(n: number): number {
  return (n - 1) % 9 + 1;
}
*/

console.log("Sum of Digits / Digital Root");

export const digitalRoot = (n: number): number => {
  let result = 0;
  do {
    for (let i = 0; i <= Math.ceil(Math.log10(n + 1)); i++) {
      result += Math.floor((n / Math.pow(10, i - 1)) % 10);
    }
    if (result > 9) {
      n = result;
      result = 0;
    } else {
      break;
    }
  } while (n > 9);

  return result;
};

console.log(digitalRoot(456));

// Who likes it?
console.log("Who likes it?");

/*
Best Practice:
export function likes(names: string[]): string {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
*/

export const likes = (a: string[]): string => {
  let result = "";

  switch (true) {
    case a.length < 1:
      result = "no one likes this";
      break;
    case a.length === 1:
      result = a[0] + " likes this";
      break;
    case a.length === 2:
      result = a[0] + " and " + a[1] + " like this";
      break;
    case a.length === 3:
      result = a[0] + ", " + a[1] + " and " + a[2] + " like this";
      break;
    case a.length > 3:
      result =
        a[0] + ", " + a[1] + " and " + (a.length - 2) + " others like this";
      break;
  }

  return result;
};

console.log(likes(["Max", "John"]));

// Arr.diff
console.log("Arr.dif");

/*
Best Practice
export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(e => !b.includes(e));
}
*/

export function arrayDiff(a: number[], b: number[]): number[] {
  const result: number[] = [];

  for (const value of a) {
    if (!b.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

console.log(arrayDiff([1], [4, 5]));
