// My current age in human years
var myAge = 37;

// multiple accounting for early years of a dog's life
var earlyYears = 2;

// Reassign earlyYears
earlyYears = earlyYears * 10.5;

// Subtract 2 from myAge to account for dog years after age 2

laterYears = myAge - 2;

// Calculate dog years accounted for by later years

laterYears = laterYears * 4;

// Add early & later years to store my dog age

myAgeInDogYears = earlyYears + laterYears;

// my name as a string in lower case

let myName = "Phil".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
