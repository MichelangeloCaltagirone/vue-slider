// Preprarzione dati noti
sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']

// Recupero elementi dal DOM
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const gallery = document.getElementById('gallery');
const thumbsGallery = document.getElementById('thumbnails');

let imgs = '' // mi preparo la stringa da montare nel DOM

for (let i = 0; i < sources.length; i++) {
    imgs += `<img alt="landscape-${i + 1}" src="${sources[i]}">`  // creo la stringa dinamicamente con gli indici dell'array
}

gallery.innerHTML = imgs;           // modifico il DOM
thumbsGallery.innerHTML = imgs;     // modifico il DOM

const images = document.querySelectorAll('#carousel img');   // recupero le imgs dinamicamente inserite
const thumbs = document.querySelectorAll('#thumbnails img'); // recupero le imgs dinamicamente inserite


// Mostro la prima(nell'array) immagine in pagina
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');
thumbs[currentActiveIndex].classList.add('active');


// Eventi dinamici 
// Prev btn
btnPrev.addEventListener('click', function() {
    // tolgo classe attiva
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');
    currentActiveIndex--;
    // dopo il decremento, controllo di non uscire dall'array, in tal caso lo riporto alla fine
    if (currentActiveIndex < 0) currentActiveIndex = images.length - 1;
     // rimetto classe attiva, all'indice giusto
    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
})

// Next btn
btnNext.addEventListener('click', function() {
    // tolgo classe attiva
    images[currentActiveIndex].classList.remove('active');
    thumbs[currentActiveIndex].classList.remove('active');
    currentActiveIndex++;
    // dopo l'incremento, controllo di non uscire dall'array, in tal caso lo riporto all'inizio
    if (currentActiveIndex === images.length) currentActiveIndex = 0;
    // rimetto classe attiva, all'indice giusto
    images[currentActiveIndex].classList.add('active');
    thumbs[currentActiveIndex].classList.add('active');
})