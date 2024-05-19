const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")

let slideNumber = 1;
const length = images.length;

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber * 500}px)`;
    slideNumber ++;
}
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2) * 500}px)`;
    slideNumber --;
}
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}
const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1) * 500}px)`;
    slideNumber = length;
}

right.addEventListener('click', ()=>{
    console.log(slideNumber)
    slideNumber < length ? nextSlide() : getFirstSlide();
    });

left.addEventListener('click', ()=>{
    console.log(slideNumber)
    slideNumber > 1 ? prevSlide() : getLastSlide();
})