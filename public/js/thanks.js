        <div class="scroll"></div>
let classDown = document.querySelector('.mobile');
let hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', function (event) {
    classDown.classList.toggle('down');
});