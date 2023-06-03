function modal() {
    alert("Извиниете, сайт находится в процессе дроботки и поэтому произошла ошибка!!!")
}

// 

const btn = document.querySelector(".change");

btn.addEventListener("click", function(e) {
    e.preventDefault()
    btn.classList.toggle('active');
})

// 

let a = document.querySelectorAll(".a");


btn.addEventListener("click", function(e) {
    e.preventDefault()
    for (let i=0; i<a.length; i++) {
        a[i].classList.toggle("new-a");
    }
    
})

// 

let ho = document.querySelector(".header-one");
let lI = document.querySelector(".logo-img");
let lI2 = document.querySelector(".logo-img2");
let title = document.querySelector(".title");
let gree = document.querySelector(".greeting");
let p = document.querySelector("p")

btn.addEventListener("click", function(e) {
    e.preventDefault()
    ho.classList.toggle('new-ho');
    lI2.classList.toggle("new-logo");
    lI.classList.toggle("new-lI");
    title.classList.toggle("new-title");
    gree.classList.toggle("new-gree")
    p.classList.toggle("new-p")
})

// 

let mo = document.querySelector(".main-one");

btn.addEventListener("click", function(e) {
    e.preventDefault()
    mo.classList.toggle("new-mo")
})

// 

let one = document.querySelectorAll(".quadruplebox-s");
let two = document.querySelectorAll(".triplebox-s");
let under = document.querySelectorAll(".under");

btn.addEventListener("click", function(e) {
    e.preventDefault()
    for (let i=0; i<one.length; i++) {
        one[i].classList.toggle("new-one");
    }
    for (let i=0; i<two.length; i++){
        two[i].classList.toggle("new-two");
    }
    for (let i=0; i<under.length; i++){
        under[i].classList.toggle("new-under");
    }
})

// 

let mt = document.querySelector(".main-three");
let portfolio = document.querySelector(".portfolio");
let box = document.querySelector(".box");
let text = document.querySelector(".text");
let lend = document.querySelector(".landing");
let more = document.querySelector(".more")

btn.addEventListener('click', function(e) {
    e.preventDefault()
    mt.classList.toggle("new-mt");
    portfolio.classList.toggle("new-portfolio");
    box.classList.toggle("new-box");
    text.classList.toggle("new-text");
    lend.classList.toggle("new-lend");
    more.classList.toggle("new-more");
})