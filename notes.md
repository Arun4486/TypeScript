# Typescript Flow:-

    TS code --> Lexer --> Parser --> Binder --> Checker --> Emitter
    1. TS code : normal ts code
    2. Lexer :- used in almost all languages, it check for syntactical correctness of any statement, and tokens
    3. Parser :- reads TypeScript source code and converts it into a structured representation (usually an Abstract Syntax Tree – AST)
    4. Binder :- connects names to symbols and builds scopes.
    5. Checker :-  for type checking


    Source Code
    ↓
    Parser        → AST
    ↓
    Binder        → Symbols + Scopes
    ↓
    Type Checker  → Type validation
    ↓
    Emitter       → JavaScript

# Type annotation :-

    when you explicitly tell the compiler what the type is, instead of letting it infer it.

# Type Inferencing :-

    TypeScript looks at the value or usage and decides the type for you.

# Union :-

    a union type lets a variable (or parameter, return value, etc.) be one of several types.

```ts
let id: number | string;
const fruits: "banana" | "apple" | "papaya" = "apple"; // there can be no other value for this variable
```

    This means:
        id can be either a number or a string.
    Valid:
    id = 101
     id = "A101"

# Any and Unknown :-

    1. any (unsafe, escape hatch) - “Disable TypeScript’s type checking for this value.”

```ts
let value: any;
value = 10;
value = "hello";
value = true;
// You can do anything with it:
value.toUpperCase(); // ✅ no error (even if value is number)
value(); // ✅ no error
```

    2. unknown (safe alternative) - “This value could be anything, but you must check before using it.”

```ts
let value: unknown;
// You can assign any value to it:
value = 10;
value = "hello";
value = true;
// But you cannot use it directly:
value.toUpperCase(); // ❌ Error
value(); // ❌ Error
```

        You must narrow it first.
        "Type narrowing" with unknown , so that we can get and use type specific suggestions

```ts
if (typeof value === "string") {
  value.toUpperCase(); // ✅ OK
}
// Or:
function handle(input: unknown) {
  if (Array.isArray(input)) {
    input.length; // ✅ OK
  }
}
```

        unknown vs any (key differences)
        Feature	                any	        unknown
        Assign any value	    ✅	        ✅
        Access properties	    ✅	        ❌
        Call as function	    ✅	        ❌
        Type safety	            ❌ None	    ✅ Strong
        Requires narrowing	    ❌	        ✅
        Recommended	            ❌ Rarely	✅ Yes

# Type guard :-

    technique that lets you narrow a variable’s type at runtime
    using instanceof() for type guard

```ts
        class MasalaChai{
            serve(){
                return `Masala chai is served`
            }
        }

        class GingerChai {
            serve(){
                return `Serving Ginger Chai`
            }
        }

        function Order (chai : MasalaChai | GingerChai){
            if(chai instanceOf MasalaChai){
                return chai.serve() // using spacial type according to condition
            }

        }
```

# Type keyword :-

    used to create a type alias — a name for a type. It lets you define, reuse, and compose types clearly.

```ts
type User = {
  id: number;
  name: string;
};
```

        type → keyword
        User → alias (name of the type)
        { ... } → actual type definition
        You can now use User anywhere as a type.

```ts
const u: User = {
  id: 1,
  name: "Arun",
};
```

# Forcefull type assertion :-

    telling the compiler to treat a value as a specific type even when it cannot prove it’s safe.

```ts
let response: any = "43";
let resLength: number = response.length; // you won't get any suggestions
//so
let resLength: number = (response as string).length;

// another example, after parsing the data we don't know what is it's type
type Book = {
  name: "string";
};
let bookString = '{"name" : "The Elephant in the mind"}';
let bookObject = JSON.parse(bookString) as Book; // it's done to forcefully tell that this data is off a certain type
```

# Never :-

    never is a special type that represents values that never happen.

```ts
type Role = "admin" | "user"; //? litral types, literally assigning vlaues

function roleBasedLogin(role: Role): void {
  if (role === "admin") {
    console.log("redirtect to admin");
    return;
  }
  if (role === "user") {
    console.log("redirecting to user");
    return;
  }
  role; // now on hovering over it , it shows never, it means it can never be accessed anymore except the two value, if there was a third value then it would show the third one
}
```

# Duck typing :-

```ts
    type chai = {
    name: string;
    suger: numbver;
    };

    type coffe = {
    name: "Black";
    suger: 2;
    };

    const order: chai = coffee; // this is fine if the struncture is same
```

# Type Splitting :-
```ts
    type Item = {name : stirng, quantity: number}
    type Address = {street : string, pin:number}

    type Order = {
        id: string,
        items : Item[],
        address : Address // defining type separatly is a cleen way to write types
    }
```

# Functions :-
```ts
    function One(name : string ): void { //in () type is from argumnets, outside is for return type. 
        colsole.log(`hello ${name}`)
    }
```