// task 1
let someArray = 'hello world';
let someArray2 = 'lorem ipsum';
let someArray3 = 'javascript is cool';
console.log(someArray.length);
console.log(someArray2.length);
console.log(someArray3.length);

// task 2

let toUpperCase = someArray.toUpperCase();
let toUpperCase2 = someArray2.toUpperCase();
let toUpperCase3 = someArray3.toUpperCase();
console.log(toUpperCase);
console.log(toUpperCase2);
console.log(toUpperCase3);

// task 3

let toLowerCase = toUpperCase.toLowerCase();
let toLowerCase2 = toUpperCase2.toLowerCase();
let toLowerCase3 = toUpperCase3.toLowerCase();
console.log(toLowerCase);
console.log(toLowerCase2);
console.log(toLowerCase3);

// task 4

let str0 = ' dirty string   ';
let trim = str0.trim();
console.log(trim);

// task 5

let str = 'Каждый охотник желает знать';
let stringToarray = (str) => {
    return str.split(' ');
}
let someArray4 = stringToarray(str);
console.log(someArray4);
let add = someArray4.concat('где', 'сидит', 'фазан');
console.log(add);

// task 6

let delete_characters = (n1, n2) => {
    return str.substr(n1, n2)
};
console.log(delete_characters(0, 7));

// task 7

let str3 = 'HTML JavaScript PHP';
let insert_dash = (n1) => {
    return str3.toUpperCase().replaceAll(n1, '-')
};
console.log(insert_dash(' '));

// task 8

let FletterUpper = (someStr) => {
    return someStr[0].toUpperCase() + someStr.slice(1);
};
console.log(FletterUpper("good bye, my friend"));

// task 9

let capitalize = (strStr) => {
    return strStr.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
// I still do not understand this
