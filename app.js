console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count) {
    for(let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

// Exercise 2 Section
let userName = prompt("Please input your name");
let age = prompt("Please enter your age"); 

if (age < 16) {
    console.log(underSixteen); 
} else {
    console.log(aboveSixteen); 
}

function checkAge(userName, age) {
    let aboveSixteen = 'Congrats ${username}, you are able to drive!';
    let underSixteen = 'I am sorry, ${username}, you have to wait until you are 16 to be able to legally drive.'
}
// Exercise 3 Section 

function quadrantFinder(x,y) {
    
    if ( x > 0 && y > 0) {
        console.log("Quadrant 1"); 
    }
    else if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    }
    else if (x < 0 && y < 0 ) {
        console.log("Quadrant 3");
    }
    else if(x > 0 && y < 0) {
        console.log("Quadrant 4");
    }
    else if (x == 0 && y > 0 ) {
        console.log("You are on the y axis");
    }
    else if(x > 0 && y == 0) {
        console.log("You are on the x axis ")
    }

}
// Exercise 4 Section 
function typeTriangle(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "Invalid triangle"; }
    
    if (side1 == side2 && side1 == side3) {
        console.log("Equilateral triangle"); 
    }
    else if(side1 == side2 || side1 == side3 || side2 == side3) {
        console.log("Isosceles triangle"); 
    }
    else {
        console.log("Scalene triangle"); 
    }
}
