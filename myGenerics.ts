// myGenerics.ts
// Examples of TypeScript generics: functions, interfaces, classes, constraints, multiple parameters, and defaults.

// 1) Generic function
function identity<T>(value: T): T {
  return value;
}

const num = identity(123);      // inferred as number
const text = identity("hello"); // inferred as string
console.log('identity number:', num);
console.log('identity string:', text);

// 2) Generic interface/type
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "hi" };
console.log('numberBox:', numberBox);
console.log('stringBox:', stringBox);

// 3) Generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log('stack pop:', stack.pop());

// 4) Generic constraints
function logLength<T extends { length: number }>(value: T): T {
  console.log('length:', value.length);
  return value;
}

logLength([1, 2, 3]);
logLength('TypeScript');

// 5) Multiple type parameters
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const mixedPair = pair('hello', 10);
console.log('mixedPair:', mixedPair);

// 6) Default generic type
function makeArray<T = string>(value: T): T[] {
  return [value];
}

const strings = makeArray('default');
const numbers = makeArray<number>(100);
console.log('strings:', strings);
console.log('numbers:', numbers);

// 7) Generic utility example: map function with generic callback
function mapArray<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}

const uppercased = mapArray(['a', 'b', 'c'], (item) => item.toUpperCase());
console.log('uppercased:', uppercased);
