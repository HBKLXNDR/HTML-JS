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

//CW

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: "10 years",
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: "40 years",
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: "38 years",
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: "9 years",
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: "1 year",
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
for (const simpson of simpsons) {
    let divMaker = document.createElement("div")
    divMaker.innerHTML = `${simpson.name} ${simpson.surname} ${simpson.age} - ${simpson.info} `
    divMaker.classList.add("member")
    document.body.appendChild(divMaker);
}

for (const simpson of simpsons) {
    let divCreator = document.createElement('div');
    let divNamer = document.createElement('div');
    divNamer.innerText = simpson.name
    let divSurnamer = document.createElement("div");
    divSurnamer.innerText = simpson.surname
    let divAger = document.createElement("div");
    divAger.innerText = simpson.age
    let infoMaker = document.createElement('h3');
    infoMaker.innerText = simpson.info
    let imgMaker = document.createElement('img');
    imgMaker.src = simpson.photo
    divCreator.classList.add('member');
    divCreator.append(divNamer, divSurnamer, divAger, infoMaker, imgMaker);
    document.body.appendChild(divCreator);

}


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

for (const coursesArrayElement of coursesArray) {
    let courseDivMaker = document.createElement('div');
    courseDivMaker.style.width = "300px"
    courseDivMaker.style.display = "flex"
    courseDivMaker.style.gap = "30px"
    courseDivMaker.style.marginBottom = "30px"
    let titleMaker = document.createElement('h2');
    titleMaker.innerText = coursesArrayElement.title
    let monthDurationMaker = document.createElement('div');
    monthDurationMaker.innerText = coursesArrayElement.monthDuration
    let hourDurationMaker = document.createElement('div');
    hourDurationMaker.innerText = coursesArrayElement.hourDuration
    let modulesUl = document.createElement("ul");

    for (const modulesItem of coursesArrayElement.modules) {
        let moduleLi = document.createElement('li');
        moduleLi.innerText = modulesItem
        modulesUl.appendChild(moduleLi);
    }
    courseDivMaker.append(titleMaker,monthDurationMaker,hourDurationMaker,modulesUl);
    document.body.appendChild(courseDivMaker);

}
