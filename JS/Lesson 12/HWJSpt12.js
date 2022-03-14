// https://jsonplaceholder.typicode.com/guide/
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// task 1
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then(posts =>{
//         let mainWrap = document.createElement('div');
//         mainWrap.classList.add('wrap')
//         for (const post of posts) {
//             let divCreator = document.createElement('div');
//             divCreator.classList.add('post')
//             divCreator.innerHTML = `
//                                     <h3>userID - ${post.userId} <h3>
//                                     <h3>ID - ${post.id}</h3>
//                                     <p> <strong>Title</strong> - ${post.title} </p>
//                                     <p> <strong>Body</strong> - ${post.body}</p>`
//             mainWrap.appendChild(divCreator);
//             document.body.appendChild(mainWrap);
//         }
//         }
//     )

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


// task 2
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let mainWrap = document.createElement('div');
        mainWrap.classList.add('wrap');
        for (const comment of comments) {
            let divCreator = document.createElement('div');
            divCreator.classList.add('comment');
            divCreator.innerHTML = `
                        <h3>postId - ${comment.postId}</h3>
                        <h3>ID - ${comment.id}</h3>
                        <p><strong>Name</strong> - ${comment.name}</p>
                        <p><strong>Email</strong> - ${comment.email}</p>
                        <p><strong>Body</strong> - ${comment.body}</p>
                        `;
            mainWrap.appendChild(divCreator);
            document.body.appendChild(mainWrap);
        }
    })
