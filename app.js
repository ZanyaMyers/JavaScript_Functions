console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count) {
    for(let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds(15);
printOdds(23); 

// Exercise 2 Section

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you are able to drive!`;
    let underSixteen = `I am sorry, ${userName}, you have to wait until you are 16 to be able to legally drive.`;

    if (age < 16) {
        console.log(underSixteen); 
        } else {
        console.log(aboveSixteen); 
        }
}

checkAge("Kim",15); 
checkAge("Nya",22);
checkAge("Byran", 16);


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

quadrantFinder(0,7);
quadrantFinder(-1, 7);

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

typeTriangle(1,1,2);
typeTriangle(1,2,2);
