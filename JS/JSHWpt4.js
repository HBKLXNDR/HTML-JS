// task 1

function calc(a,b) {
    let res = a * b ;
    return res;
}

let c = calc(10 , 20);
console.log(c);

// task 2


function CircleSquare(p,r){
    let CircleSquareR = r ** 2;
    CircleSquareS = p * CircleSquareR ;
    return CircleSquareS

}

console.log(CircleSquare(3.14,4))

// task 3

function CilinderScquare(z,x,c){
    let CilinderScquare = 2 * z *x *(x+c)
    return CilinderScquare;
}

console.log(CilinderScquare(3.14,5,20));

// task 4

let someArray = ['kek' , 23, 34,232, true, false];
function ArrayF(someArray){
    for (let n = 0; n<someArray.length; n++){
        console.log(someArray[n]);
    }
}
ArrayF(someArray)

// task 5



function someP(text){
    for(let i=0; i< 5; i++){
        document.write(`<p>${text}</p>`)
    }
}

someP('xD')

// task 6
function someUl(text){

    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');

}

someUl('lalala')


// task 7


function ThreeUl(text){
    document.write('<ul>');
    for (let i=0; i<3; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

ThreeUl('olololo');

// task 8

let newArray = [null,"azaza ", true, ' either ', false, NaN];
function ArrayFunct(newArray){
    document.write('<ul>')
    for (let i=0; i<3; i++){
        document.write(`<li>${newArray}</li>`);
    }
    document.write('</ul>');
}

ArrayFunct(newArray);


//task 9

