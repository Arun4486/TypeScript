# Typescript Flow:-
        TS code --> Lexer --> Parser --> Binder --> Checker --> Emitter
        1. TS code : normal ts code
        2. Lexer :- used in almost all languages, it check for syntactical correctness of any statement, and tokens
        3. Parser :- reads TypeScript source code and converts it into a structured representation (usually an Abstract Syntax Tree – AST)
        4. Binder :- connects names to symbols and builds scopes.
        5. Checker :-  for type checking
        6. Emitter :- strips off all the types when executing statements, simply converting to plain js

            Source Code
                ↓
            Parser              → AST
                ↓
            Binder              → Symbols + Scopes
                ↓
            Type Checker  → Type validation
                ↓
            Emitter             → JavaScript

# Type annotation :-
    when you explicitly tell the compiler what the type is, instead of letting it infer it.  
# Type Inferencing :- 
    TypeScript looks at the value or usage and decides the type for you.