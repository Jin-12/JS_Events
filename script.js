//Fonctionnalité 1
var footerElement = document.querySelector('footer');
var x = 0
footerElement.addEventListener("click",function(){
  x ++
  console.log(`clic numéro ${x}`)
});

//Fonctionnalité 2

let menuBtn = document.querySelector('.navbar-toggler');
let menu = document.querySelector('#navbarHeader');
let menuStatus = false;

function menuToggle() {
  if (menuStatus == false) {
    menu.classList.remove("collapse");
    menuStatus = true;
  }
  else if (menuStatus == true) {
    menu.classList.add("collapse");
    menuStatus = false;
  }
}

menuBtn.addEventListener("click", menuToggle)

//Fonctionnalité 3

let firstCard = document.querySelector('.card-text')
let editButton = document.querySelector(".btn-outline-secondary")


editButton.addEventListener("click", function() {
  firstCard.style.color = 'red'
})

//Fonctionnalité 4

let secondCard = document.querySelectorAll('.card-text')[1];
let secondEditButton = document.querySelectorAll('.btn-outline-secondary')[1];

secondEditButton.addEventListener("click", function(){
  if(secondCard.style.color === 'green'){
    secondCard.style.color = "";
  } else {secondCard.style.color = "green"}
})

//Fonctionnalité 5

let navbar = document.querySelector('.navbar');
console.log(navbar)
let bootstrap = document.querySelector('link');
let bootstrap2 = document.querySelector('link');
navbar.addEventListener("dblclick", function(){
  if(bootstrap.href !== bootstrap2.href){
    bootstrap.href = bootstrap2.href;
  } else {
    bootstrap.href = '#';
  }
});
