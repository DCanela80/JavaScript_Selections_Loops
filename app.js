console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 1; i <=100; i++) {
    if (i % 2 !=0) {
        console.log(i + " is odd");
    }
}

// Exercise 2 Section
for (let i = 1; i <=100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " FIZZBUZZ");
    }
    else if (i % 3 == 0) {
        console.log(i + " FIZZ");
    }
    else if (i % 5 == 0) {
        console.log(i + " BUZZ");
    }
}

// Exercise 3
let i = 0;
while (i < 100) {
    if (i % 2 != 0) {
        console.log("while", i);
    }
    i++;
}

i = 0
do {
    if (i % 2 != 0) {
        console.log("do", i);
    }
    i++;    
} while (i < 100);

i = 1
while (i < 101) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " FIZZBUZZ");
    }
    else if (i % 3 == 0) {
        console.log(i + " FIZZ");
    }
    else if (i % 5 == 0) {
        console.log(i + " BUZZ");
    }
    i++;
}

i = 1;
do {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " FIZZBUZZ");
    }
    else if (i % 3 == 0) {
        console.log(i + " FIZZ");
    }
    else if (i % 5 == 0) {
        console.log(i + " BUZZ");
    }
    i++;
} while (i < 101);

//Exercise 4
// creates a random number between 0 and 500
let value = Math.round((Math.random() * 500)); 
// creates a random number between 100 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); 

let isFound = false;
for (let i = 0; i < n; i++) {
    if (i == value) {
        console.log("Found value!");
        isFound = true;
        break;
    }
}

if (!isFound) {
    console.log("Did not find value");
}

//Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); 
// creates a random number between 100 and 1000

for (let i = start; i <= end; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(i + " FIZZBUZZ");
    }
    else if (i % fizzDivisor == 0) {
        console.log(i + " FIZZ");
    }
    else if (i % buzzDivisor == 0) {
        console.log(i + " BUZZ");
    }
}