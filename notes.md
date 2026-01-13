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