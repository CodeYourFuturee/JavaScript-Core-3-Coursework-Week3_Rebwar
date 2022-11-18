const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

function introduceYourself({ name, age, favouriteFood }) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
  return `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`;
}

introduceYourself(personOne);

test("should return a string with the name, age and favourite food", () => {
  expect(introduceYourself(personOne)).toEqual(
    "Hello, my name is Popeye. I am 34 years old and my favourite food is Spinach."
  );
});
