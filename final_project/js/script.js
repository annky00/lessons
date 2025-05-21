
const leftBtn = document.querySelector('.table__button--left');
const rightBtn = document.querySelector('.table__button--right');
const cardsContainer = document.querySelector('.table__cards');

leftBtn.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: -400, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: 400, behavior: 'smooth' });
});

