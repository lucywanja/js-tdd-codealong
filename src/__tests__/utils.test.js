import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(38);
  });
});

// How the test loads your variables 
// import { currentAgeForBirthYear } from "../utils";
// The first line of the test ensures that we can access the variables and functions defined in the currentAgeForBirthYear file.

// describe is a function provided by Jest. It is a way of grouping related tests together so that when we run our tests, it's clear which tests describe the currentAgeForBirthYear function.

// After describing the subject of our test, the function currentAgeForBirthYear, we use the Jest function it to state an expectation of our function.
// The it function takes two arguments:

// a string where we describe what we're testing
// a callback function where we write the actual test code

// Jest also lets you use the test function in the same way as the it function, depending on what style you prefer.

// Testing our function
// The next three lines are our actual test code and the most important part of the test file. It is within this callback function passed to the it function that we test the functionality of our function.

// const birthYear = 1984;
// const ageOfPerson = currentAgeForBirthYear(birthYear);
// What we're doing here is calling a function, currentAgeForBirthYear(birthYear), the very function we're supposed to define and implement, passing it a known value, 1984, and assigning the return value of the function to a variable called ageOfPerson.

// What do you think the value of ageOfPerson should be if the function currentAgeForBirthYear is called with 1984 as the argument?

// The next line of code poses that exact question with an expected outcome. Using Jest, we say, quite colloquially:

// expect(ageOfPerson).toBe(38);
// What this line of code means is that we expect the value of the variable ageOfPerson to be 38.

// expect is another function that is provided by Jest. We pass it a value, and it returns an object that has a number of matchersLinks to an external site. like .toBe that let us check if the value is what we want it to be.

// Our test loads our code, uses our code in the manner desired, and compares the result of our code with a known outcome so that we know our code behaves as we expected.
