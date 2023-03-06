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
