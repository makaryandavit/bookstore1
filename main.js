  AOS.init();


const lines = document.querySelector('.lines');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const dropdown = document.querySelector('.dropdown');
const toTop = document.querySelector('.top')

lines.addEventListener('click',() =>{
    line1.classList.toggle('line1Change');
    line2.classList.toggle('line2Change');
    line3.classList.toggle('line3Change');
    dropdown.classList.toggle('dropdownChange');
    document.body.classList.toggle('bodyhide')
})

const mainInside = document.querySelector('.main-inside');
const slide = [...document.querySelectorAll('.slide')];
let x = 0,y = 0;

const all = document.querySelectorAll('.all');
const bookLeft = document.querySelector('.sec3-left-bottom');

setInterval(() =>{
    if(x >= slide[0].clientWidth * slide.length){
        x = -slide[0].clientWidth;
    }
    mainInside.scrollTo({
        left:x+=slide[0].clientWidth,
        behavior:'smooth'
    })
    
},2500)


setInterval(() =>{
    if(y >= all[0].clientWidth * all.length){
        y = -all[0].clientWidth;
    }
    bookLeft.scrollTo({
        left:y+=all[0].clientWidth,
        behavior:'smooth'
    })
    
},2500)

toTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})