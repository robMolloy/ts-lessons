// Lesson #1.1: Assert Object.keys

// Hey all, as we get better together it might make sense for me to rewrite some of these lessons so let's go...

// The return of Object.keys(someObject) will usually be type string[] which can be misleading or cause errors. You can be more specific by asserting the exact keys by doing the following;

const someObject = { av: "ak", bv: "bk" } as const; // as we're not going to change this object again, use the `as const` to improve our hinting

// Now let's name our types clearly so another developer can understand what's going on
type TSomeObject = typeof someObject;
type TSomeObjectKey = keyof TSomeObject;

const keys = Object.keys(someObject) as TSomeObjectKey[];

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
