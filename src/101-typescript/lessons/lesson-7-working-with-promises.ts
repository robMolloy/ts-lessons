// Lesson #7 Working with promises

// Let’s say you are using an API helper-package. You may be able to import { TFetchReturn } from 'api-helper-package' which is the type that is returned when some data is fetched from the API.

// Generally speaking this is not going to be very helpful as all the important data will be wrapped in a promise.

// We can “unwrap” the promise using the Awaited keyword, but first we will just set up a dummy fetchReturn - hopefully you are familiar with promise syntax.

const fetchReturn = new Promise((res) => res(true));
type TFetchReturn = typeof fetchReturn;

type TFetchResponse = Awaited<TFetchReturn>;

// To revert it back, we can “wrap” it with TypeScript’s Promise keyword. Note: this looks identical to the JavaScript Promise, but can be used in a type declaration.

type TFetchResponse2 = Promise<TFetchResponse>;

// Please feel free to ask any typescript question, discuss this or any other typescript topic and invite anyone that wants to be a part of the channel - everyone’s welcome!
