function myRegularFunction() {
    const myArrowFunction = (...args) => {
        console.log(args, arguments);
    }
    myArrowFunction('c', 'd');
}
myRegularFunction('a', 'b'); // logs ['c', 'd']