// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let clicker = document.getElementById("text");
clicker.style.marginLeft = "50vw";
let btn = document.getElementById("btn_1");
btn.style.marginLeft = "50vw";
btn.onclick = () => {
    clicker.style.display = "none";
    btn.style.display = "none";
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let clicker2 = document.getElementById("btn_2");
clicker2.onclick = () => {
    let limiter = document.getElementById("age").value;
    if (limiter >= 18) {
        alert('Greetings!');
    } else {
        alert("Sorry, next time :)");
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
let clicker3 = document.getElementById("btn_3");
let menu = document.getElementById("menu");
clicker3.onclick = () => {
    if (menu.style.display !== "block") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {name: "Buddy", body: "don't be sad"},
    {name: "My friend", body: "everything will be alright"},
    {name: "Bro", body: "don't panic"}
]

for (const comment of comments) {
    let divWrap = document.createElement('div');
    document.body.appendChild(divWrap)
    let h2 = document.createElement('h2');
    h2.innerText = comment.name
    let p = document.createElement("p");
    p.innerText = comment.body
    let btn_4 = document.createElement('button');
    btn_4.classList.add("margin_bt")
    btn_4.innerText = "close the body"
    divWrap.append(h2, p, btn_4);
    btn_4.onclick = () => {
        p.style.display = "none"
    }
}




