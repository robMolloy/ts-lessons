type TAemAPIResponse_item = {
  value: string;
};

type TAemAPIResponseSingleKeys = Omit<PropertyKey, "b" | "c">;
// type TAemAPIResponseSingle = {
//   [key in TAemAPIResponseSingleKeys]: TAemAPIResponse_item;
// };
type TAemAPIResponseSingle = {
  a: TAemAPIResponse_item;
};
type TAemAPIResponseArray = {
  b: number[];
};
// type TAemAPIResponse = TAemAPIResponseSingle;
// type TAemAPIResponse = TAemAPIResponseArray;
// type TAemAPIResponse = TAemAPIResponseSingle & TAemAPIResponseArray;
// type TAemAPIResponse = TAemAPIResponseArray & TAemAPIResponseSingle;
type TAemAPIResponse = {
  a: TAemAPIResponse_item;
  b: number[];
};

const aemAPIResponse: TAemAPIResponse = {
  a: {
    value: "123",
  },
  b: [1],
};
