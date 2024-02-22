/* 
It's not possible to go through all the different tsconfig.json configurations it is worth playing aroud with some of the "compilerOptions" to give an idea of how making a change effects your project.

This covers "noUncheckedIndexedAccess" but I recommend reading https://www.typescriptlang.org/tsconfig if you want more info

//tsconfig.json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true,
    ...
  },
}

"noUncheckedIndexedAccess": true, changes ts behaviour as outlined below.
*/

const someStrings = ["a", "b", "c"];

/* using "noUncheckedIndexedAccess": false (default) */
const string1 = someStrings[0]; // we know this is "a" and ts infers as string
const string2 = someStrings[4]; // we know this is undefined but ts infers as string
string1.toLowerCase(); // this will work correctly
string2.toLowerCase(); // this will cause an error but ts will not show an error

/* using "noUncheckedIndexedAccess": true */
const string3 = someStrings[0]; // we know this is "a" and ts infers as string | undefined
const string4 = someStrings[4]; // we know this is undefined and ts infers as string | undefined

string3.toLowerCase(); // this should work correctly but ts will show an error
string4.toLowerCase(); // this will cause an error and ts will show an error
if (string4 !== undefined) string4.toLowerCase(); // this will no longer error

/* Something else to be aware of is if someStrings was created using the `as const assertion` like this;; */

const someStrings2 = ["a", "b", "c"] as const;

/* the typing will be correct. There are lots of advantages to using `as const` but we will cover that in a later lesson  */
