// Lesson #9: Expand types
// Sometimes the type you are using is a good start but you need to make some additions to the type. Here’s how to do it...

// For unions;
type TSomeUnion = "mobile" | "broadband";
type TSomeUnionExtended = TSomeUnion | number; // "mobile" | "broadband" | number

// For objects;
type TSomeObj = { a: number; b: string };
type TSomeObjExtended = TSomeObj & { c: number }; // { a: number; b: string; c: number }

// For arrays;
type TSomeArray = number[];
type TSomeArray2 = string[];
type TSomeArrayExtended1 = [...TSomeArray, ...TSomeArray2]; //  number | string []

// For tuples;
type TSomeTuple = [number, string];
type TSomeTupleExtended = [...TSomeTuple, number]; // [ number, string, number ]

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
