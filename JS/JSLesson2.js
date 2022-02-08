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
debugger

// task 3

// let test = "default"
// if (test === true) {
//     console.log("Вірно")
// }
// else {console.log("Неправильно")
// }

let test = confirm('true or not?') ? 'true' : 'false';
    console.log(test);


// if else
// switch
//     confirm
//         = ||
//     ternary
//     Math.random MathFloor
//     array.length