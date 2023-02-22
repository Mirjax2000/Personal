/** @format */
// hamburger menu
let classDown = document.querySelector('.mobile');
let hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', function (event) {
    classDown.classList.toggle('down');
});

$(document).ready(function () {
    $('#frontEnd').click(function () {
        if ($('#frontEndSection').is(':hidden')) {
            $('section').slideUp(500);
            $('#frontEndSection').slideDown(500);
        } else {
            $('#frontEndSection').slideUp(500);
        }
    });

    $('#websites').click(function () {
        if ($('#websitesSection').is(':hidden')) {
            $('section').slideUp(500);
            $('#websitesSection').slideDown(500);
        } else {
            $('#websitesSection').slideUp(500);
        }
    });

    $('#other').click(function () {
        if ($('#otherSection').is(':hidden')) {
            $('section').slideUp(500);
            $('#otherSection').slideDown(500);
        } else {
            $('#otherSection').slideUp(500);
        }
    });
});
