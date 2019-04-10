const switcher = document.querySelector('#cbx'),
      more = document.querySelector('.more'),
      modal = document.querySelector('.modal'),
      videos = document.querySelectorAll('.videos__item');
let player;
      
function bindSliderToogle(trigger, boxBody, content, aClass) {
    let button = {
        'element': document.querySelector(trigger),
        'active': false
    };

    const box = document.querySelector(boxBody),
          boxContent=document.querySelector(content);

    button.element.addEventListener('click', () => {
        
        if (button.active === false) {
            button.active=!button.active;
            box.style.height=boxContent.clientHeight + 'px';
            box.classList.add(aClass);        
        } else {
            button.active = !button.active;
            box.style.height = 0 + 'px';
            box.classList.remove(aClass);

        }

    });     
}

bindSliderToogle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');


function switchMode() {
    const headText = document.querySelector('.header__item-descr');

    if (night == false) {
        night = true;
        document.body.classList.add('night');
        document.querySelectorAll('.hamburger > line').forEach(item => {
            item.style.stroke = '#fff';
        });
        document.querySelectorAll('.videos__item-descr').forEach(item => {
            item.style.color = '#fff';
        });
        document.querySelectorAll('.videos__item-views').forEach(item => {
            item.style.color = '#fff';
        });

        headText.style.color = '#fff';
        headText.innerHTML = 'Light Mode';
        document.querySelector('.logo > img').src = 'logo/youtube_night.svg';

        //document.querySelector('.header__item-descr').style.color = '#fff'; //Альтернатива предыдущей строчке кода headText.style.color = '#fff';
        
    } else {
        night = false;
        document.body.classList.remove('night');
        document.querySelectorAll('.hamburger > line').forEach(item => {
            item.style.stroke = '#000';
        });
        document.querySelectorAll('.videos__item-descr').forEach(item => {
            item.style.color = '#000';
        });
        document.querySelectorAll('.videos__item-views').forEach(item => {
            item.style.color = '#000';
        });
        
        headText.style.color = '#000';
        headText.innerHTML = 'Night Mode';
        document.querySelector('.logo > img').src = 'logo/youtube.svg';

        //document.querySelector('.header__item-descr').style.color = '#000'; //Альтернатива предыдущей строчке кода headText.style.color = '#000';
    }
}

let night = false;

switcher.addEventListener('change', () => {
    switchMode();
});

const data = [
    ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'], 
    ['#6 Оптимизация Page Speed Insight Google | Публикация на Хостинг | HandyHost | Марафон вёрстки', 
     '#5 Пишем jQuery скрипты на landing page | Реальный заказ | Марафон вёрстки | Артем Исламов',
     '#4 вёрстка реального landing page | Марафон верстки | Артем Исламов'],
    ['3,6 тыс. просмотров', '4,2 тыс. просмотров ', '28 тыс. просмотров'],
    ['X9SmcY3lM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM'] 
];


more.addEventListener('click', () => {
    const videosWrapper = document.querySelector('.videos__wrapper');
    more.remove();
   
   for (let i = 0; i < data[0].length; i++) {
       let card = document.createElement('a');
       card.classList.add('videos__item', 'videos__igitem-active');
       card.setAttribute('data-url', data[3][i]);
       card.innerHTML = `
           <img src="${data[0][i]}" alt="thumb">
           <div class="videos__item-descr">
               ${data[1][i]}
           </div>
           <div class="videos__item-views">
               ${data[2][i]}
           </div>  
       `;
       videosWrapper.appendChild(card);
       setTimeout(() => {
           card.classList.remove('videos__item-active');
       }, 10);
   }     
});


