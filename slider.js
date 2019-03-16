let sliderIndex = 1;
showSlides(sliderIndex);
function plusSlide() {
    showSlides(sliderIndex += 1);
}
function minusSlide() {
    showSlides(sliderIndex -= 1);
}
function currentSlide(n){
    showSlides(sliderIndex = n)
}

function showSlides(n){
    let i;
    let slides = document. getElementsByClassName('item');
    let dots = document.getElementsByClassName('slider-dots-item');
    if (n > slides.length){
        sliderIndex = 1;
    }
    if (n < 1){
        sliderIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (i = 0; i < slides.length; i++){
        dots[i].className = dots[i].className.replace(' active',"");
    }
    slides[sliderIndex - 1].style.display = 'block';
    dots [sliderIndex -1].className += ' active';
}