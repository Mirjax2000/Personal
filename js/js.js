/** @format */

/** @format */
// hamburger menu
let classDown = document.querySelector('.mobile');
let hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', function (event) {
    classDown.classList.toggle('down');
});

// expand button
let expandBttns = document.querySelectorAll('.expand-bttn');

expandBttns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        let paragraph = btn.parentNode.querySelector('p');
        paragraph.classList.toggle('expand'); // pridej classu a vypni overflow

        let getComputeStyle = window.getComputedStyle(paragraph); // zjitit overflow

        let gradient = btn.parentNode.querySelector('.gradient'); // aktivovat parrent gradientu

        if (getComputeStyle.overflow === 'auto') {
            btn.textContent = 'close';
            btn.style.backgroundColor = 'orange';
            gradient.style.display = 'none';
        } else {
            btn.textContent = 'expand';
            gradient.style.display = 'block';
            btn.style.backgroundColor = '#6ed7fe';
        }
    });
});

// scroll anim
let scroll = document.querySelector('.scroll');
scroll.addEventListener('click', function (event) {
    let scrolable = document.documentElement.scrollHeight;

    window.scrollTo(0, scrolable);
});
