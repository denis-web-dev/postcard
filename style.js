const openCardButton = document.getElementById('openCard');
const closeCardButton = document.getElementById('closeCard');
const front = document.getElementById('front');
const back = document.getElementById('back');

openCardButton.addEventListener('click', () => {
    front.style.transform = 'rotateY(180deg)';
    back.style.transform = 'rotateY(0deg)';
    back.classList.remove('hidden');
});

closeCardButton.addEventListener('click', () => {
    front.style.transform = 'rotateY(0deg)';
    back.style.transform = 'rotateY(180deg)';
    back.classList.add('hidden');
});
