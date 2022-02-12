'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-ла лэнд',
            'Одержимость',
            'Скотт Пилигрим против...',
        ],
    };

    document
        .querySelectorAll('.promo__adv img')
        .forEach((item) => {
            item.remove();
        });
    document.querySelector('.promo__adv-title').remove();

    //
    document.querySelector('.promo__genre').textContent =
        'драма';

    //
    document.querySelector('.promo__bg').style.background =
        'url("img/bg.jpg") center center/cover no-repeat';

    //

    let promoList = document.querySelector(
        '.promo__interactive-list'
    );
    function renderMovies() {
        promoList.innerHTML = '';

        movieDB.movies.sort();
        movieDB.movies.forEach((item, i) => {
            let nameMovie =
                item.length > 21
                    ? item.slice(0, 21) + '...'
                    : item;

            let li = document.createElement('li');
            li.classList.add('promo__interactive-item');
            li.innerHTML = '<div class="delete"></div>';
            li.prepend(++i + ') ' + nameMovie);

            promoList.append(li);
        });
    }

    renderMovies();

    let form = document.querySelector('.add');
    let btnForm = form.querySelector('button');
    let inputForm = form.querySelector('.adding__input');
    let checkboxForm = form.querySelector('[type="checkbox"]');

    btnForm.addEventListener('click', (e) => {
        e.preventDefault();

        if (inputForm.value) {
            movieDB.movies.push(inputForm.value);
            inputForm.value = '';

            if (checkboxForm.checked) {
                console.log('Добавляем любимый фильм');
                checkboxForm.checked = false;
            }
        }

        renderMovies();
    });

    promoList.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList[0] == 'delete') {
            let itemDel = e.target.closest('li');
            console.log(e);

            document
                .querySelectorAll('.promo__interactive-item')
                .forEach((item, idx) => {
                    if (item.textContent == itemDel.textContent)
                        movieDB.movies.splice(idx, 1);
                });

            renderMovies();
        }
    });
});
