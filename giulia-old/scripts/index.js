const poems = document.querySelectorAll('.poemContainer');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

function showPoem(index) {
    poems.forEach((poem, i) => {
        poem.classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % poems.length;
    showPoem(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + poems.length) % poems.length;
    showPoem(currentIndex);
});