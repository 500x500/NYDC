// Переезжающее лого в шапку
const logo = document.getElementById('logo');
const logoScroll = logo.getBoundingClientRect().bottom + window.pageYOffset;
const header = document.getElementById('menu');


window.onscroll = function() {
    if (logo.classList.contains('sticky') && window.pageYOffset < logoScroll) {
        logo.classList.remove('sticky');
    } else if (window.pageYOffset > logoScroll) {
        logo.classList.add('sticky');
        };
       // header.style.backgroundColor = 'white'
};





// Закревляем шапку при прокрутке

/*const header = document.getElementById('menu');
let sticky = header.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > sticky){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}; */