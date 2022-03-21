// debugger
let time = +prompt("input number 0-59")
if (time <= 14) {
    document.write("1")
} else if (time => 15, time <= 29) {
    document.write("2")
} else if (time => 30, time <= 44) {
    document.write("3")
} else if (time => 45, time <= 59) {
    document.write("4")
}

// pt 2
else (document.write("it is not suitable"));

let day = +prompt("input number 1-31")
if (day => 1 && day <= 10) {
    document.write("First decade, my friend")
} else if (day => 11 && day <= 20) {
    document.write("Second decade, my friend")
} else if (day => 21 && day <= 31) {
    document.write("Third decade, my friend")
}


// task 3

// let test = "default"
// if (test === true) {
//     console.log("Вірно")
// }
// else {console.log("Неправильно")
// }

let test = confirm('true or not?') ? 'true' : 'false';
console.log(test);

//task 4
let x = +prompt("input your nubmer")
if (x !== 0) {
    document.write("Correct")
} else {
    document.write("Incorrect")
}
;

// last task
let y = prompt("What is 'official' name of Javascript ?")
if (y === "ECMAScript") {
    document.write("Correct!")
} else {
    document.write("Don't know? ECMAScript!")
}
;
// year task
let extra = +prompt("What year do you choose?")
if (extra % 4 === 0) {
    document.write("Congrats! It is a leap year!")
} else {
    document.write("It is just an usual year, huh")
}
;
// dayTask
let ChooseYourDay = +prompt("Input number 1-7 to choose your day")
switch (ChooseYourDay) {

    case 1:
        document.write(" Monday: come to work and cry");
        break;

    case 2:
        document.write("Tuesday: come to work and cry again");
        break;

    case 3:
        document.write("Wednesday: come to work and be sad");
        break;

    case 4:
        document.write("Thursday: come to work and be OK");
        break;

    case 5:
        document.write("Friday: come to work and be happy");
        break;

    case 6:
        document.write("Saturday : try to wake up");
        break;

    case 7:
        document.write("Sunday : closer to evening you cry again");
        break;
}


// if else
// switch
//     confirm
//         = ||
//     ternary
//     Math.random MathFloor
//     array.length