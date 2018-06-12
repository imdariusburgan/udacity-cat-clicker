let count = 0;
const countHTML = document.querySelector('.clickCount');
const catPic = document.querySelector('.catPic');

catPic.addEventListener('click', () => {countHTML.innerHTML++;});