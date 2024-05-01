// const moveButton = document.querySelector('.container .move-btn');
// const moveText = document.querySelector('.container .move-text');
const moveButton = document.querySelector('.move-btn');
const moveText = document.querySelector('.move-text');

moveButton.addEventListener('click', () => {
    moveText.classList.toggle('active');
})