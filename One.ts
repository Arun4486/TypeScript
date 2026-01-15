function greet(person: string): string {
  return `hello ${person}`;
}

console.log(greet("Arun"));

try {
  const result = "any operation";
} catch (error) {
  // console.log(error.message); //? error is a type of unknown , for no types
  if (error instanceof Error) {
    console.log(error.message);
  }
}

//! Never

type Role = "admin" | "user"; 

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
