// Lesson #1.2: Assert Object.values

// The return of `Object.values(someObject)` will usually be type string[] which can be misleading or cause errors. You can be more specific by asserting the exact keys by doing the following;
const someObject2 = { av: "ak", bv: "bk" } as const; // as we're not going to change this object again, use the `as const` to improve our hinting

type TSomeObject2 = typeof someObject2;
type TSomeObjectKey2 = keyof TSomeObject2;
type TSomeObjectValue2 = TSomeObject2[TSomeObjectKey2];
// Due to the `as const` when we defined `someObject2`, now when we hover over `TSomeObjectValue2` type we will get the exact values `"av" | "bv"`from the object instead of just `string`

const specificValues1 = Object.values(someObject2) as TSomeObjectValue2[];

// EUREKA!!! Whilst writing this I've just discovered something - due to the as const assertion we don't even need to make another assertion here
const specificValues2 = Object.values(someObject2);

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
