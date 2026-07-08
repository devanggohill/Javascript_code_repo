// 👉 Access by ID
let title = document.getElementById("main-title");
console.log(title);

// 👉 Access by Class
let paras = document.getElementsByClassName("description");
console.log(paras);

// 👉 Access by Tag
let allDivs = document.getElementsByTagName("div");
console.log(allDivs);

// 👉 Change text using innerText
title.innerText = "Changed using innerText";

// 👉 Change HTML using innerHTML
let box = document.getElementById("box");
box.innerHTML = "<b>Bold Text Inside Box</b>";

// 👉 textContent (shows hidden + exact text)
console.log(box.textContent);

// 👉 Change style
box.style.backgroundColor = "yellow";
box.style.padding = "10px";

// 👉 Function for button click
function changeContent() {
    box.innerText = "Button Clicked!";
}