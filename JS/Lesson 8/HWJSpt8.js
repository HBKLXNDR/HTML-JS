let textGetter = document.getElementById("content");
console.log(textGetter);

let rulesGetter = document.getElementById("rules");
console.log(rulesGetter);

textGetter.innerHTML = 'Hi guys';
rulesGetter.innerText = 'These rules will break your mind but it worth it!';

let someBackground = document.children;
for (const someBackgroundElement of someBackground) {
    someBackgroundElement.style.background = 'red';
}


let someColor = document.children;
for (const someColorElement of someColor) {
    someColorElement.style.color = 'blue';
}

let rulesList = document.getElementById('rules');
console.log(rulesList.classList);

let rulesElements = document.getElementsByClassName('fc_rules');
for (const rulesElement of rulesElements) {
    rulesElement.style.color = 'red';
};


// DOM
// bytag,
//     byclass,
//     id,
// search in current element
// children,
//     child,
// node / element
// querySelector
// formsAPI
// classlist
// document.getElementById / document.getElementsByClassName / document.getElementsByTagName