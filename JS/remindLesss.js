//Closures - function which returns data of functions which can be already processed

//0

let a = 'global';
function outer() {
    let b = 'outer';
    function inner() {
        let c = 'inner'
        console.log(c);   // 'inner'
        console.log(b);   // 'outer'
        console.log(a);   // 'global'
    }
    console.log(a);     // 'global'
    console.log(b);     // 'outer'
    inner();
}
outer();
console.log(a);

// 1
let person =()=> {
    let name = 'Peter';

    let displayName;
    return () => {
        console.log(name);
    }
}
let peter = person();
peter(); // 'Peter'



// 2

let getCounter =() =>{
    let counter = 0
    return ()=>{
        return counter++
    }
}
let count = getCounter()
console.log(count());
console.log(count());
console.log(count());

// splice - returns new massive of deleted items

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
let removed = myFish.splice(2, 0, 'drum');

// myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed = []

let removed1 = myFish.splice(3,2,"duck","puck")
console.log(removed1);
let removed2 = myFish.splice(1, 2,"hi",'hello', "goodbye","bye bye");


console.log(myFish);

// slice - return same cut massive of cut items
//1
let fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
let citrus = fruits.slice(1, 3);
console.log(citrus);


//2
let fruitello = fruits.slice(0,3);
console.log(fruitello);
//         0   1  2  3  4  5  6  7   8
let arr = [20,30,45,40,88,92,34,100,23];
let newArr = arr.slice(5,8);
console.log(newArr); // [92, 34, 100]

// 3
//                0         1         2       3      4      5         6
let stringer = ['lala', 'bla-bla', 'ho-ho', 'xxx', 'yyy', 'kokos','abrikos']
let newStringer = stringer.slice(0,5);
console.log(newStringer); // ['lala', 'bla-bla', 'ho-ho', 'xxx', 'yyy']








// how to make a palindrome

let palindrome = (str) => {
    str = str.toLowerCase().replace(/\s/g, '')
    return str === str.split('').reverse().join('');
}


console.log(palindrome('racecar')); //true
console.log(palindrome('table')); //false
console.log(palindrome('А роза упала на лапу Азора')); //true
console.log(palindrome('Anna')); // true

// how to check if num /2,/5

let fizzbuzz = (num) => {
    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i)
        }

    }
}
//
//
// fizzbuzz(22);