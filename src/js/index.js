import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const counter = document.querySelector('.glass__counter--js');
const moreWater = document.querySelector('.increaseButton--js');
const lessWater = document.querySelector('.decreaseButton--js');

const key = new Date().toISOString().slice(0,10);

if (!(localStorage.getItem(key))) {
    localStorage.setItem(key, 0);
    counter.innerHTML = 0;
}
else {
    counter.innerHTML = localStorage.getItem(key);
}

let numberOfGlass = localStorage.getItem(key);

moreWater.addEventListener('click', () => {
    if (numberOfGlass < 99) {
    numberOfGlass = Number(numberOfGlass) + 1;
    counter.innerHTML = numberOfGlass;
    localStorage.setItem(key, numberOfGlass);
    }
});

lessWater.addEventListener('click', () => {
    if (numberOfGlass > 0) {
        numberOfGlass = Number(numberOfGlass) - 1;
        counter.innerHTML = numberOfGlass;
        localStorage.setItem(key, numberOfGlass);
    }
});
