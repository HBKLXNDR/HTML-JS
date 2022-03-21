let arr = [2, 3, 5, 6, 7];
console.log(arr);

let arr2 = ["xd", "kek", "lol", "alalala", "fwsfsdf"];
console.log(arr2);

let arr3 = ["lala", "opopop", 2, true, false];
console.log(arr3);

let arr4 = [];
arr4[0] = 1;
arr4[1] = 9;
arr4[2] = 4;
arr4[3] = 5;
console.log(arr4);

for (let i = 0; i < 10; i++) {
    document.write('<div>some text</div>');
}

for (let i = 0; i < 10; i++) {
    document.write(`<div>some text ${i}</div>`);
}

let a = 0
while (a < 20) {
    document.write('<h1>it is a text</h1>');
    a++;
}

let b = 0
while (b < 20) {
    document.write(`<h1>it is a text ${b}</h1>`);
    b++;
}

let someArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i < someArray.length; i++) {
    let someArrayElement = someArray[i];
    console.log(someArrayElement);
}

let someArray2 = ['dsad', 'sdada', 'asda', 'asdasdad', 'asdasda', 'a2a2dad', 'adad', 'adsad', 'ad33sad', 'ad21ad'];
for (let i = 0; i < someArray2.length; i++) {
    let someArray2Element = someArray2[i];
    console.log(someArray2Element);
}
let someArray3 = ['wow', true, NaN, null, false, 23, 33, 44, 55, "woooow"];
for (let i = 0; i < someArray3.length; i++) {
    let someArray3Element = someArray3[i];
    console.log(someArray3Element);
}
let someArray4 = ['wow', true, NaN, null, false, 23, 33, 44, 55, "woooow"];
for (let i = 0; i < someArray4.length; i++) {
    if (typeof someArray4[i] === 'boolean') {
        console.log(someArray4[i])
    }
}
let someArray5 = ['wow', true, NaN, null, false, 23, 33, 44, 55, "woooow"];
for (let i = 0; i < someArray5.length; i++) {
    if (typeof someArray5[i] === 'string') {
        console.log(someArray5[i])
    }
}
let someArray6 = ['wow', true, NaN, null, false, 23, 33, 44, 55, "woooow"];
for (let i = 0; i < someArray6.length; i++) {
    if (typeof someArray6[i] === 'number') {
        console.log(someArray6[i])
    }
}

let emptyArr = [];
emptyArr[0] = 'Hello'
emptyArr[1] = 'My friend'
emptyArr[2] = 'do you believe'
emptyArr[3] = 'in hot?'
emptyArr[4] = 'I mean, hot chilli peppers, my friend'
emptyArr[5] = 'Is it'
emptyArr [6] = true
emptyArr [7] = 'or'
emptyArr [8] = false
emptyArr [9] = 7777
for (let i = 0; i < emptyArr.length; i++) {
    let emptyArrElement = emptyArr[i];
    console.log(emptyArrElement);
}


let someCycle;
for (let i = 0; i < 10; i++) {
    console.log('someCycle : ' + i + ' ');
    document.write('someCycle : ' + i + ' ');
}
let someCycle1;
for (let i = 0; i < 100; i++) {
    console.log('someCycle1 : ' + i + ' ');
    document.write('someCycle1 : ' + i + ' ');
}
let someCycle2;
for (let i = 0; i < 100; i += 2) {
    console.log('someCycle2 : ' + i + ' ');
    document.write('someCycle2 : ' + i + ' ');
}

let someCycle3;
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log('someCycle3 : ' + i + ' ');
        document.write('someCycle3 : ' + i + ' ');
    }
}

let someCycle4;
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log('someCycle4 : ' + i + ' ');
        document.write('someCycle4 : ' + i + ' ');
    }
}








