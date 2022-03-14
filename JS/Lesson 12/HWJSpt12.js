// https://jsonplaceholder.typicode.com/guide/
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json()
    })
    .then(posts =>{
        let mainWrap = document.createElement('div');
        mainWrap.classList.add('wrap')
        for (const post of posts) {
            let divCreator = document.createElement('div');
            divCreator.classList.add('post')
            divCreator.innerHTML = `
                                    <h3>userID - ${post.userId} <h3>
                                    <h3>ID - ${post.id}</h3>
                                    <h4>Title - ${post.title} </h4>
                                    <p> <strong>Body</strong> - ${post.body}</p>`
            mainWrap.appendChild(divCreator);
            document.body.appendChild(mainWrap);
        }
        }
    )

