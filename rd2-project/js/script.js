'use strict';

const movieDB = {
    movies: [
        'Логан',
        'Лига справедливости',
        'Ла-ла лэнд',
        'Одержимость',
        'Скотт Пилигрим против...',
    ],
};

document.querySelectorAll('.promo__adv img').forEach((item) => {
    item.remove();
});
document.querySelector('.promo__adv-title').remove();

//
document.querySelector('.promo__genre').textContent = 'драма';

//
document.querySelector('.promo__bg').style.background =
    'url("img/bg.jpg") center center/cover no-repeat';

//

movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    let li = document.createElement('li');
    li.classList.add('promo__interactive-item');
    li.innerHTML = '<div class="delete"></div>';
    li.prepend(++i + ') ' + item);
    document
        .querySelector('.promo__interactive-list')
        .append(li);
});
