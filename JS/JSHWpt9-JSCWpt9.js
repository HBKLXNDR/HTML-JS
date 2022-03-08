// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
document.body.appendChild(div);
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'hello guys';
div.style.background = "green";
div.style.color = 'white';
div.style.fontSize = '25px';
div.style.marginBottom = '2px';
let divClone = div.cloneNode(true);
document.body.appendChild(divClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let someArray = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementsByClassName('menu')[0];
for (const someArrayElement of someArray) {
    let li = document.createElement('li')
    li.innerText = someArrayElement
    menu.appendChild(li);
}
// let menu = document.getElementsByClassName('menu')[0]; - order is important

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesAndDurationArrayElemento of coursesAndDurationArray) {
    let divCreator = document.createElement('div')
    divCreator.innerText = `${coursesAndDurationArrayElemento.title} - ${coursesAndDurationArrayElemento.monthDuration}`
    document.body.appendChild(divCreator);
}
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divCreator = document.createElement('div')
    divCreator.classList.add('item')
    // why I can not make like that? => let divCreator = document.createElement('div').classList.add('item')
    let h1Creator = document.createElement('h1')
    h1Creator.classList.add('heading')
    h1Creator.innerText = `${coursesAndDurationArrayElement.title}`
    let pCreator = document.createElement('p')
    pCreator.classList.add('description')
    pCreator.innerText = `${coursesAndDurationArrayElement.monthDuration}`
    divCreator.append(h1Creator, pCreator)
    document.body.appendChild(divCreator)
}



