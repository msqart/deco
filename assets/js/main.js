'use strict';

/*
*
* Variables
*
* */

const popupOpen = document.querySelectorAll('.p-open');
const popup = document.querySelector('.popup');
const clsPopup = document.querySelector('.cls-btn');

popupOpen.forEach(function (elem) {
    elem.addEventListener('click', (evt) => {
        evt.preventDefault();
        popup.classList.add('active');
    });
});

clsPopup.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.remove('active');
});


const loadActive = {
    distance: '100px',
    origin: 'top',
    viewFactor: 0.15,
    opacity: 0,
    duration: 700,
    interval: 200
};

ScrollReveal().reveal('.animation', loadActive);
