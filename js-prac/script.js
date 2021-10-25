const numberOfFilms = +prompt(
  'Сколько фильмов вы уже посмотрели?',
  0
);
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let qFirst = prompt(
    'Один из последних просмотренных фильмов?'
  );
  let qSecond = prompt('На сколько оцените его?');

  if (
    qFirst != '' &&
    qFirst != null &&
    qSecond != '' &&
    qSecond != null &&
    qFirst.length < 50
  ) {
    personalMovieDB.movies[qFirst] = qSecond;
  } else {
    i--;
  }
}

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (
  personalMovieDB.count > 10 &&
  personalMovieDB.count < 30
) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}
