// Lesson #1.3: Assert Object.entries

// The return of `Object.entries(someObject)` will usually be type string[] which can be misleading or cause errors. You can be more specific by asserting the exact keys by doing the following;
const someObject3 = { a: "av", b: "bv" } as const; // as we're not going to change this object again, use the `as const` to improve our hinting

type TSomeObject3 = typeof someObject3;
type TSomeObjectKey3 = keyof TSomeObject3;
type TSomeObjectValue3 = TSomeObject3[TSomeObjectKey3];
type TSomeObjectEntry3 = [TSomeObjectKey3, TSomeObjectValue3];

const specificEntries1 = Object.entries(someObject3) as TSomeObjectEntry3[];

// Just like in leesson #1.2 we can leave TS to infer the type, but unfortunately it's not as specific as asserting the type, as above
const lessSpecificEntries2 = Object.entries(someObject3);

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
