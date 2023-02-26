/** @format */
// hamburger menu

let classDown = document.querySelector('.mobile');
let hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', function (event) {
    classDown.classList.toggle('down');
});
$(document).ready(function () {
    let time = 500;

    $('#frontEnd').click(function () {
        if ($('#frontEndSection').is(':hidden')) {
            $('.section').slideUp(time);
            $('#frontEndSection').slideDown(time);
        } else {
            $('#frontEndSection').slideUp(time);
        }
    });

    $('#websites').click(function () {
        if ($('#websitesSection').is(':hidden')) {
            $('.section').slideUp(time);
            $('#websitesSection').slideDown(time);
        } else {
            $('#websitesSection').slideUp(time);
        }
    });

    $('#other').click(function () {
        if ($('#otherSection').is(':hidden')) {
            $('.section').slideUp(time);
            $('#otherSection').slideDown(time);
        } else {
            $('#otherSection').slideUp(time);
        }
    });
});
