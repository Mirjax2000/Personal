/** @format */

const root = document.documentElement;

// hamburger menu
let classDown = document.querySelector('.mobile');
let hamburgerIcon = document.querySelector('.hamburger');

hamburgerIcon.addEventListener('click', function (event) {
    classDown.classList.toggle('down');
});

// striknuti innertextu do fiktivniho elemntu
let listContainer = document.querySelectorAll('.content-list-container');
listContainer.forEach(function (par) {
    let paragraphMain = par.querySelector('.paragraph-container');
    let paragraphSlave = par.querySelector('.paragraph');
    paragraphSlave.textContent = paragraphMain.textContent;
});

// expand button
let expandBttns = document.querySelectorAll('.expand-bttn');
expandBttns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        // slide down  striknuti height fiktivniho elemntu do root: --height
        let paragraphForHeight = btn.parentNode.querySelector('.paragraph');
        root.style.setProperty(
            '--height',
            paragraphForHeight.offsetHeight + 'px'
        );
        //

        let gradient = btn.parentNode.querySelector('.gradient'); // aktivovat parrent gradientu
        let paragraph = btn.parentNode.querySelector('.paragraph-container');
        paragraph.classList.toggle('expand'); // pridej classu a vypni overflow

        // podminka jestli paragraph-container obsahuje css clasu expand tak zmen text buttonu
        // jestli neobsahuje clasu expand tak tam striknu clasu dexpand
        if (paragraph.classList.contains('expand')) {
            btn.textContent = 'close';
            btn.style.backgroundColor = 'orange';
            gradient.style.display = 'none';
        } else {
            paragraph.classList.add('dexpand');
            btn.textContent = 'expand';
            gradient.style.display = 'block';
            btn.style.backgroundColor = '#6ed7fe';
        }
    });
});


