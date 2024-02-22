// Lesson #8: Working with functions

// It's easy to create a function with TypeScript using the arrow syntax similar to describing a function in JavaScript

type TSomeFn1 = (p1: number, p2: number) => number;
const someFn1: TSomeFn1 = (p1, p2) => p1 + p2;

// But let’s say you wanted to access the parameters or the return type of this function type, how would you do this?

type TSomeFn1Params = Parameters<TSomeFn1>; // number
type TSomeFn1Return = ReturnType<TSomeFn1>; // [number, number]

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
