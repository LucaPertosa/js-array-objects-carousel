// ARRAY OGGETTI IMG
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// PRELEVO CONTENITORE DOVE INSERIRE LE IMG DINAMICAMENTE
const carousel = document.querySelector(".carousel")
images.forEach((item, index) => {
    carousel.innerHTML += `
    <div class="item">
    <img src="${item.image}" alt="">
    <div class="img-description">
    <h1 class="">${item.title}</h1>
    <p>${item.text}</p>
    </div>
    </div>`
});
console.log(carousel);
// Assegno variabile al primo item attivo dell'arrey
const itemImages = document.getElementsByClassName("item")
let activeItemIndex = 0;
itemImages[activeItemIndex].classList.add("active");

// Assegno variabile per gestire l'attivazione del'img-description
const itemDescription = document.getElementsByClassName("img-description")

// PRELEVO CONTENITORE THUMBNAIL
const thumbnail = document.querySelector(".thumbnail");

// Inserisco dinamicamente item in thumbnail 
images.forEach((item, index) => {
    thumbnail.innerHTML += `
    <div class="thumb">
        <img src="${item.image}" alt="">
    </div>`
});

// GESTIONE CLICK SU THUMB
const thumb = document.getElementsByClassName("thumb")
console.log(thumb[0].innerHTML);
thumb[activeItemIndex].addEventListener("click", function() {
    console.log(this);
    if (!itemImages[activeItemIndex].classList.contains("active")) {
        itemImages[activeItemIndex].classList.remove("active");
        
    } else {
        itemImages[this]
    }
})

// GESTIONE TASTI
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Next button
nextBtn.addEventListener("click", function() {
    // riporto itemDescription all situazione iniziale
    if (itemDescription[activeItemIndex].classList.contains("active") && activeItemIndex === (itemImages.length - 1)) { 
        itemImages[activeItemIndex].classList.remove("active");
        itemDescription[activeItemIndex].classList.remove("active")
        activeItemIndex = 0;
        itemImages[activeItemIndex].classList.add("active");
    } else if (itemDescription[activeItemIndex].classList.contains("active")) {
        itemDescription[activeItemIndex].classList.remove("active")
        // rimuovo lo stato active dalla array-item
        itemImages[activeItemIndex].classList.remove("active");
        
        // incremento la posizione dell'array
        activeItemIndex++;
        
        // rimetto lo stato active dalla array-item
        itemImages[activeItemIndex].classList.add("active");
    } else {
        itemDescription[activeItemIndex].classList.add("active");
        
    }
});

// Prev button
prevBtn.addEventListener("click", function() {
    // riporto itemDescription all situazione iniziale
    if (itemDescription[activeItemIndex].classList.contains("active") && activeItemIndex === 0) { 
        itemImages[activeItemIndex].classList.remove("active");
        itemDescription[activeItemIndex].classList.remove("active")
        activeItemIndex = (itemImages.length - 1);
        itemImages[activeItemIndex].classList.add("active");
    } else if (itemDescription[activeItemIndex].classList.contains("active")) {
        itemDescription[activeItemIndex].classList.remove("active")
        // rimuovo lo stato active dalla array-item
        itemImages[activeItemIndex].classList.remove("active");
        
        // incremento la posizione dell'array
        activeItemIndex--;
        
        // rimetto lo stato active dalla array-item
        itemImages[activeItemIndex].classList.add("active");
    } else {
        itemDescription[activeItemIndex].classList.add("active");
        
    }
});
