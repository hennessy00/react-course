let numberOfFilms;

function start(params) {
  numberOfFilms = +prompt(
    'Сколько фильмов вы уже посмотрели?',
    0
  );

  while (
    numberOfFilms == '' ||
    numberOfFilms == null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt(
      'Сколько фильмов вы уже посмотрели?',
      0
    );
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDB(params) {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres(params) {
  let index = 1;
  while (personalMovieDB.genres.length < 3) {
    personalMovieDB.genres.push(
      prompt(`Ваш любимый жанр под номером ${index}`)
    );
    index++;
  }
}
writeYourGenres();
