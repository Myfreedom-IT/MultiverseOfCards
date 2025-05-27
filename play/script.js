// const cards = [
//     {
//         rare: 4,
//         imgRare: "./images/mythical.png",
//         name: 'Джеймс Норрингтон',
//         rareName: "Мифическая",
//         attack: 8000,
//         health: 16000,
//         img: "./images/James-Norrington.jpg",
//         price: 14500
//     },

//     {
//         rare: 5,
//         imgRare: "./images/divine.png",
//         name: 'Джек Воробей',
//         rareName: "Божественная",
//         attack: 18000,
//         health: 21000,
//         img: "./images/jack-vorobey.jpg",
//         price: 30000
//     },

//     {
//         rare: 1,
//         imgRare: "./images/common.png",
//         name: 'Матрос-людоед',
//         rareName: "Обычная",
//         attack: 3000,
//         health: 4000,
//         img: "./images/cannibal.jpg",
//         price: 1000
//     },

//     {
//         rare: 2,
//         imgRare: "./images/rare.png",
//         name: 'Сумбаджи Ангриа',
//         rareName: "Редкая",
//         attack: 4000,
//         health: 5000,
//         img: "./images/indian-baron.jpg",
//         price: 4000
//     },

//     {
//         rare: 3,
//         imgRare: "./images/epic.png",
//         name: 'Джек',
//         rareName: "Эпическая",
//         attack: 3500,
//         health: 12000,
//         img: "./images/monkey.jpg",
//         price: 7500
//     },

//     {
//         rare: 1,
//         imgRare: "./images/common.png",
//         name: 'Жизель',
//         rareName: "Обычная",
//         attack: 2000,
//         health: 5500,
//         img: "./images/gisele.jpg",
//         price: 1500
//     },

//     {
//         rare: 2,
//         imgRare: "./images/rare.png",
//         name: 'Мадам Цинь',
//         rareName: "Редкая",
//         attack: 3500,
//         health: 4500,
//         img: "./images/ching.jpg",
//         price: 4500
//     }
// ];

// const spaceClick = document.querySelector('.popup');

// window.addEventListener('click', (event) => {
//     const clickedEl = event.target;

//     if (clickedEl.matches('.play')) {
//         spaceClick.classList.add('popup-opened');
        
//         renderPopup(cards[0].img, cards[0].imgRare, cards[0].name, cards[0].rareName, cards[0].attack, cards[0].health, cards[0].price);
        
//     }



//     // if (event.target.matches('.close-button') || event.target.matches('.popup')) {
//     //     spaceClick.classList.remove('popup-opened');

//     // }
// });

// const renderPopup = (img, imgRare, nameCard, rareCard, attackPoint, healthPoint, pricePoint) => {     // Тестовый вариант
//     const template = `
//     <div class="popup-content">
//       <div class="image">
//           <img class="people" src="${img}" alt="#">
//       </div>
//       <div class="card-stat" id="cardh3">
//           <img class="image-popup" src="${imgRare}" alt="#">
//           <h3>${nameCard}</h3>
//       </div>
//       <div class="card-stat">
//           <img class="image-popup" src="./images/rarity.png" alt="#">
//           <p>Редкость: <span>${rareCard}</span></p>
//       </div>
//       <div class="card-stat">
//           <img class="image-popup" src="./images/attack.png" alt="#">
//           <p>Атака: <span>${attackPoint}</span></p>
//       </div>
//       <div class="card-stat">
//           <img class="image-popup" src="./images/health.png" alt="#">
//           <p>Здоровье: <span>${healthPoint}</span></p>
//       </div>
//       <div class="card-stat">
//           <img class="image-popup" src="./images/price.png" alt="#">
//           <p>Стоимость: <span>${pricePoint}</span> pts</p>
//       </div>
//     </div>
//     `
//     spaceClick.innerHTML = template;
// }

const cards = [
    {
        rare: 4,
        imgRare: "./images/mythical.png",
        name: 'Джеймс Норрингтон',
        rareName: "Мифическая",
        attack: 8000,
        health: 16000,
        img: "./images/James-Norrington.jpg",
        price: 14500
    },
    {
        rare: 5,
        imgRare: "./images/divine.png",
        name: 'Джек Воробей',
        rareName: "Божественная",
        attack: 18000,
        health: 21000,
        img: "./images/jack-vorobey.jpg",
        price: 30000
    },
    {
        rare: 1,
        imgRare: "./images/common.png",
        name: 'Матрос-людоед',
        rareName: "Обычная",
        attack: 3000,
        health: 4000,
        img: "./images/cannibal.jpg",
        price: 1000
    },
    {
        rare: 2,
        imgRare: "./images/rare.png",
        name: 'Сумбаджи Ангриа',
        rareName: "Редкая",
        attack: 4000,
        health: 5000,
        img: "./images/indian-baron.jpg",
        price: 4000
    },
    {
        rare: 3,
        imgRare: "./images/epic.png",
        name: 'Джек',
        rareName: "Эпическая",
        attack: 3500,
        health: 12000,
        img: "./images/monkey.jpg",
        price: 7500
    },
    {
        rare: 1,
        imgRare: "./images/common.png",
        name: 'Жизель',
        rareName: "Обычная",
        attack: 2000,
        health: 5500,
        img: "./images/gisele.jpg",
        price: 1500
    },
    {
        rare: 2,
        imgRare: "./images/rare.png",
        name: 'Мадам Цинь',
        rareName: "Редкая",
        attack: 3500,
        health: 4500,
        img: "./images/ching.jpg",
        price: 4500
    },
    {
        rare: 3,
        imgRare: "./images/epic.png",
        name: 'Скрам',
        rareName: "Эпическая",
        attack: 6000,
        health: 9500,
        img: "./images/scrum.png",
        price: 8500
    },

    {
        rare: 4,
        imgRare: "./images/mythical.png",
        name: 'Капитан Салазар',
        rareName: "Мифическая",
        attack: 11000,
        health: 15000,
        img: "./images/salazar.jpg",
        price: 17000
    },
    {
        rare: 5,
        imgRare: "./images/divine.png",
        name: 'Гектор Барбосса',
        rareName: "Божественная",
        attack: 18500,
        health: 18000,
        img: "./images/barbossa.jpg",
        price: 27000
    },
];

const spaceClick = document.querySelector('.popup');

let cardWithoutDivine = 0;

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function chooseCard() {
    if (cardWithoutDivine >= 100) {
        cardWithoutDivine = 0;
        const divineCards = cards.filter(card => card.rare === 5);
        return getRandomElement(divineCards);
    }
    console.log(cardWithoutDivine)

    const randomChance = Math.floor(Math.random() * 100);
    console.log(randomChance)

    // 60% шанс: Обычная 
    if (randomChance < 60) {
        const commonCards = cards.filter(card => card.rare === 1);
        cardWithoutDivine++;
        return getRandomElement(commonCards);
    }
    // 25% шанс: Редкая 
    else if (randomChance < 60 + 25) {
        const rareCards = cards.filter(card => card.rare === 2);
        cardWithoutDivine++;
        return getRandomElement(rareCards);
    }
    // 10% шанс: Эпическая 
    else if (randomChance < 60 + 25 + 10) {
        const epicCards = cards.filter(card => card.rare === 3);
        cardWithoutDivine++;
        return getRandomElement(epicCards);
    }
    // 4% шанс: Мифическая 
    else if (randomChance < 60 + 25 + 10 + 4) {
        const mythicalCards = cards.filter(card => card.rare === 4);
        cardWithoutDivine++;
        return getRandomElement(mythicalCards);
    }
    // 1% шанс: Божественная 
    else {
        const divineCards = cards.filter(card => card.rare === 5);
        cardWithoutDivine = 0;
        return getRandomElement(divineCards);
    }
}

const playButton = document.querySelector('.play');
const cooldownMessage = document.querySelector('.cooldown-message');
const COOLDOWN_TIME = 3 * 60 * 60 * 1000;

// Функция для проверки времени
function checkCooldown() {
    const lastClick = localStorage.getItem('lastCardClick');
    if (!lastClick) return true;
    
    const now = Date.now();
    const elapsed = now - parseInt(lastClick, 10);
    return elapsed >= COOLDOWN_TIME;
}

// Функция обновления таймера
function updateCooldownTimer() {
    const lastClick = localStorage.getItem('lastCardClick');
    if (!lastClick) return;

    const now = Date.now();
    const remaining = COOLDOWN_TIME - (now - parseInt(lastClick, 10));
    
    if (remaining > 0) {
        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        cooldownMessage.textContent = `Следующая карта через: ${hours}ч ${minutes}м`;
        cooldownMessage.style.display = 'block';
        playButton.disabled = true;
    } else {
        cooldownMessage.style.display = 'none';
        playButton.disabled = false;
    }
}

// Проверка при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    if (!checkCooldown()) {
        playButton.disabled = true;
        updateCooldownTimer();
        setInterval(updateCooldownTimer, 60000); // Обновление каждую минуту
    }
});

const mainNone = document.querySelector('.main');
const footerNone = document.querySelector('.footer-bottom');
const nameNone = document.querySelector('.name');

// Обновите обработчик клика
window.addEventListener('click', (event) => {
    const clickedEl = event.target;

    if (clickedEl.matches('.play')) {
        if (!checkCooldown()) return;
        
        // Сохраняем время клика
        localStorage.setItem('lastCardClick', Date.now().toString());
        
        // Блокируем кнопку и запускаем таймер
        playButton.disabled = true;
        updateCooldownTimer();
        setInterval(updateCooldownTimer, 60000);
        
        // Показываем карту
        spaceClick.classList.add('popup-opened');
        const card = chooseCard();
        renderPopup(card.img, card.imgRare, card.name, card.rareName, card.attack, card.health, card.price);
        // сделать стиль в css чтобы при открытии попапа блокировались main и footer-bottom 
        mainNone.classList.add('hidden');
        footerNone.classList.add('hidden');
        nameNone.classList.add('hidden');
    }

    if (event.target.matches('.close-button') || event.target.matches('.popup')) {
        spaceClick.classList.remove('popup-opened');
        mainNone.classList.remove('hidden');
        footerNone.classList.remove('hidden');
        nameNone.classList.remove('hidden');
    }
});

const renderPopup = (img, imgRare, nameCard, rareCard, attackPoint, healthPoint, pricePoint) => {
    const template = `
    <div class="popup-content">
      <div class="image">
          <img class="people" src="${img}" alt="#">
      </div>
      <div class="card-stat" id="cardh3">
          <img class="image-popup" src="${imgRare}" alt="#">
          <h3>${nameCard}</h3>
      </div>
      <div class="card-stat">
          <img class="image-popup" src="./images/rarity.png" alt="#">
          <p>Редкость: <span>${rareCard}</span></p>
      </div>
      <div class="card-stat">
          <img class="image-popup" src="./images/attack.png" alt="#">
          <p>Атака: <span>${attackPoint}</span></p>
      </div>
      <div class="card-stat">
          <img class="image-popup" src="./images/health.png" alt="#">
          <p>Здоровье: <span>${healthPoint}</span></p>
      </div>
      <div class="card-stat">
          <img class="image-popup" src="./images/price.png" alt="#">
          <p>Стоимость: <span>${pricePoint}</span> pts</p>
      </div>
    </div>
    `;
    spaceClick.innerHTML = template;
}
