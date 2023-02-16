/** @format */
// $('document').ready(function () {});
// --- anebo ---
// $(function () {});
// --- anebo na izolaci jquery ---
// (function ($) {
// })(jQuery);

$(function () {
    $('.hamburger').on('click', function () {
        $('.mobile').slideToggle(500);
    });
});
