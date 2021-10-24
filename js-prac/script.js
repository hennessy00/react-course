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
  personalMovieDB.movies[qFirst] = qSecond;
}
