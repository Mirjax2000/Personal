/** @format */

let hero = document.querySelector('.hero');
let mainImg = document.querySelector('.mainImg');
let secondaryImg = document.createElement('img');
secondaryImg.className = 'secondaryImg';
secondaryImg.src = './img/image-hero-mobile.webp';
secondaryImg.alt = 'logo';
secondaryImg.srcset =
    'img/image-hero-mobile.webp, img/image-hero-mobile@2x.webp 2x';
let width = window.innerWidth;

window.addEventListener('resize', function () {
    width = window.innerWidth;

    if (width <= 710) {
        mainImg.style.display = 'none';
        hero.appendChild(secondaryImg);
    } else {
        mainImg.style.display = 'block';
        secondaryImg.remove();
    }
});

if (width <= 710) {
    mainImg.style.display = 'none';
    hero.appendChild(secondaryImg);
} else {
    mainImg.style.display = 'block';
    secondaryImg.remove();
}
