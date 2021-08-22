console.log("Script file included sucessfully");

let imageSlide = document.querySelector('.images');
let images = document.querySelectorAll('.images img');

//Buttons
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let counter = 0;
let size = images[0].clientWidth;

imageSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click', function(){
    imageSlide.style.transition = "tansform 0.5 ease-in-out";
    counter++;
    imageSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

    if (counter >= images.length - 1) {
        counter = -1;
    }
});

prevBtn.addEventListener('click', function(){
    imageSlide.style.transition = "tansform 0.5 ease-in-out";
    counter--;
    imageSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

    if (counter <= 0) {
        counter = images.length;
    }
});