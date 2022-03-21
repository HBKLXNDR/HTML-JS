let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
let postContainer = document.getElementsByClassName('post')[0];

function someFunction(items){
    for (let item in items) {
        if (typeof items[item] !== 'object'){
            let itemContainer = document.createElement('li');
            itemContainer.innerText = items[item];
            itemContainer.classList.add("lItem")
            let uList = document.getElementsByClassName('u-list')[0];
            uList.appendChild(itemContainer);
        }   else if (typeof items[item]=== "object") {
            someFunction(items[item])
        }
    }
}
someFunction(post);

let commentsContainer = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const commentItem of value) {
            let commentContainer = document.createElement('li');
            commentContainer.innerText = commentItem.body
            commentsContainer.appendChild(commentContainer)
        }
    })
