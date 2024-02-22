// Lesson #5.2: Getting an item from an object with defined keys
// Just like in lesson #5.1 we can make a type from an item in a key-specific object

type TBagName = "rucksack" | "handbag" | "carrier bag";
type TBagData = {
  [key in TBagName]: {
    quantity: number;
    color: string;
  };
};

// Instead of passing a number into an array, we can pass in string?

type TBagItem = TBagData[TBagName]; // gives a type { quantity: number; color: string; }

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
