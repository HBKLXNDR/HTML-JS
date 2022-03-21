let url = new URL(location.href);
let parseElements = JSON.parse(url.searchParams.get('data'));

let userDetailsContainer = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('posts')[0];
let postDetailsButton = document.getElementsByClassName('postDetailsButton')[0];
userDetailsContainer.innerText = `${JSON.stringify(parseElements)}`


postDetailsButton.onclick = function (){
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${parseElements.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const userElement of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText = userElement.title
                postsContainer.appendChild(postContainer)
                let postDetailsButton = document.createElement('button');
                postDetailsButton.innerText = 'post details'
                postDetailsButton.onclick = function (){
                    location.href = `post-details.html?data=${JSON.stringify(userElement)}`
                }
                postContainer.appendChild(postDetailsButton)
                postsContainer.appendChild(postContainer)

            }
        })
}

// let stringifier = JSON.stringify(parseElements);
// let firstSplit = stringifier.split(/,/);
// userDetailsContainer.innerText = firstSplit;

// let usersDetailsContainer = document.getElementsByClassName('user-details')[0];
// let stringifier = JSON.stringify(parseElements);
// console.log(stringifier);
// for (const stringifierElement of stringifier) {
//     let divCreator = document.createElement('div');
//     divCreator.innerHTML = `
//                             <h3>userID - ${parseElements.id}</h3>
//     `
//     usersDetailsContainer.appendChild(divCreator)
// }
// // console.log(parseElements);





// divCreator.innerHTML = `
// //                                     <h3>userID - ${post.userId} <h3>
// //                                     <h3>ID - ${post.id}</h3>
// //                                     <p> <strong>Title</strong> - ${post.title} </p>
// //                                     <p> <strong>Body</strong> - ${post.body}</p>`






// document.cookie = 'name=kokos';
// document.cookie = 'surname=kokosov';
// document.cookie = 'token=jIur^%$$*YSGD&656sdutsd__75;max-age=233546245;path=/';
// console.log(document.cookie);
// let cookies = document.cookie.split(/;/);
// console.log(cookies);
// let obj = {};
// for (let i = 0; i < cookies.length; i++) {
//     const cookie = cookies[i].split(/=/);
//     obj[cookie[0]] = cookie[1];
// }
// console.log(obj);