let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[arr.length - i - 1];
    }
    return newArr;
}

console.log(reverseArray(mas));
