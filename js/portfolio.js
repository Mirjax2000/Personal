/** @format */
// hamburger menu
let classDown = document.querySelector('.mobile');
let hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', function (event) {
    classDown.classList.toggle('down');
});

// jquery --- akordeon
$(document).ready(function () {
    let time = 500;

    let parrent = $('#parrent'),
        akord = $('.akord');

    parrent.find(akord).on('click', function () {
        $(this).next().slideToggle(time).siblings('.section').slideUp(time);
    });
});
