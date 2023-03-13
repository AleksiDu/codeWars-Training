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
