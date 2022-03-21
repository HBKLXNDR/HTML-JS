//task 1

let S = (a, b) => a * b;
console.log(S(20, 30));

// task2

let CircleS = (a, b) => {
    c = a ** b;
    return 3.14 * c;
};
console.log(CircleS(10, 2));

// task 3

let CilinderS = (r, H) => 2 * 3.14 * r * H;
console.log(CilinderS(10, 20));


// task 4

let someArray = [2, 3, 60, 34, true, 'or', false]
let Array1 = (someArray) => {
    for (let i = 0; i < someArray.length; i++) {
        console.log(someArray[i]);
    }
}

Array1(someArray);

// task 5

let paragraphWriter = (someText) => document.write(`<p>${someText}</p>`);
paragraphWriter('Hi Dude');

// task 6

let ulWriter = (someText, someMoreText) => {
    document.write(`<ul>`);
    document.write(`<li>${someText}</li>`);
    document.write(`<li>${someMoreText}</li>`);
    document.write(`<li>${someText}</li>`);
    document.write(`</ul>`);
}
ulWriter('Hi, man', 'Hi, lady');

// task 7

let ulSomeTextWriter = (someText, b) => {
    document.write(`<ul>`);
    {
        for (let i = 1; i < b; i++) {
            document.write(`<li>${someText}</li>`);
        }
    }
    document.write(`</ul>`);
};

ulSomeTextWriter('Hello, guys', 4);

// task 8

let someArray2 = ['Hi', 'Wazzup', 'xD', 2, 45, false, NaN]
let someArray2Writer = (ExArray) => {
    document.write(`<ol>`)
    for (let i = 0; i < ExArray.length; i++) {
        document.write(`<li>${ExArray[i]}</li>`)
    }
    document.write(`</ol>`)
};
someArray2Writer(someArray2);

// task 9

let someArray3 = [{id: 1, name: 'Alex ', age: 20}, {id: 2, name: 'Masha ', age: 14}, {id: 3, name: 'Prison ', age: 9}];
let objArray = (ExArray) => {
    for (let exArrayElement of ExArray) {
        document.write(`<div>${exArrayElement.id}: ${exArrayElement.name}- ${exArrayElement.age}`);
    };
};

objArray(someArray3);




