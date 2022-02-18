// let user = {
//     id: 1,
//     name: 'kokos',
// };
//
// user.surname = 'abrikosov';
// user['age'] = 45;
// console.log(user);


// let obj = {};
// let fields = ['id', 'name', 'surname'];
// for (let field of fields) {
//     console.log(field);
//     obj[field] = 'xxx'
// }
// console.log(obj);

// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// task 1
   class User {

       constructor(id, name, surname, email, number) {
           this.id = id;
           this.name = name;
           this.surname = surname;
           this.email = email;
           this.number = number;
       }
   }


let someArray =
[
    new User(1, 'Alex', 'Pupkin', 'someEmail3@noemail.com', 380991499229),
    new User(2, 'Misha', 'Mishutkin', 'someEmail3@noemail.com', 380991499228),
    new User(3, 'Petya', 'Petrov', 'someEmail3@noemail.com', 380991499227),
    new User(8, 'Naxim', 'Maximov', 'someEmail3@noemail.com', 380991499226),
    new User(5, 'Andrej', 'Andrejev', 'someEmail3@noemail.com', 380991499225),
    new User(6, 'Anton', 'Antonov', 'someEmail3@noemail.com', 380991499224),
    new User(7,'Alexey','Alexeev','someEmail3@noemail.com',380991499223),
    new User(4,'Vasya','Vasiliev','someEmail3@noemail.com',380991499222),
    new User(9,'Mark','Markov','someEmail3@noemail.com',380991499221),
    new User(10,'Viktor','Viktorov','someEmail3@noemail.com',380991499220)
];
console.log(someArray);
// task 2

let filter = someArray.filter((something) => {
    if (something.id % 2 === 0){
    return something
    }});
console.log(filter);

// task 3

let sorter = someArray.sort((a, b) => a.id - b.id);
console.log(sorter);
// same as console.log(someArray);

// task 4

class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
};

// task 5

let someExtraArray = [
    new Client(54,'Alex','Pupkin','alexpupkin@noemail.com', 380999379999, ['milk','bread','water','juice']),
    new Client(43,'Gennadiy','Pukin', 'genabukin@noemail.com',380999379999, ['pineapple', 'carrot','beer']),
    new Client(65,'Anatoliy', 'Poleno','tolipoleno@noemail.com', 380999379999, ['beer', 'chips']),
    new Client(23, 'Baron', 'Bukin', 'baronchik@noemail.com', 380999379999, ['bones']),
    new Client(47, 'Svetlana', 'Bukina', 'krestik@noemail.com',380999379999, ['protein', 'creatin','gainer'] ),
    new Client(7, 'Lena', 'Poleno', 'lenok@noemail.com',380999379999, ['chicken', 'bread'] ),
    new Client(47, 'Dasha', 'Bukina', 'pestik@noemail.com',380999379999, ['TV', 'sweets','sone useless stuff','laptop' ] ),
    new Client(47, 'Roman', 'Bukin', 'Rom4ik@noemail.com',380999379999, ['whiskey', 'vodka','cola'] ),
    new Client(47, 'Zhenya', 'Stepanov', 'vastik@noemail.com',380999379999, ['rum', 'brick',] ),
    new Client(47, 'Sema', 'Bukin', 'semki@noemail.com',380999379999, ['pencil', 'pen','workbook'] )
];
console.log(someExtraArray);

// task 6


