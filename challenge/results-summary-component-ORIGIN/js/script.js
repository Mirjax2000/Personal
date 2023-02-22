/** @format */

//rng
let rng = function (num) {
    return Math.ceil(Math.random() * num);
};

let bttn = document.querySelector('.bttn');

let engine = function () {
    let reaction = document.querySelector('.reaction');
    reaction.textContent = rng(100);

    let memory = document.querySelector('.memory');
    memory.textContent = rng(100);

    let verbal = document.querySelector('.verbal');
    verbal.textContent = rng(100);

    let visual = document.querySelector('.visual');
    visual.textContent = rng(100);

    let sum = document.querySelector('#summary');
    sum.textContent = Math.round(
        (parseInt(reaction.textContent) +
            parseInt(memory.textContent) +
            parseInt(verbal.textContent) +
            parseInt(visual.textContent)) /
            4
    );

    if (sum.textContent <= 40) {
        sum.style.color = 'red';
    }

    console.log(sum);
};

engine();
bttn.addEventListener('click', function (event) {
    location.reload();
});
