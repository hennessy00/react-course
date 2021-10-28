const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start(params) {
    this.count = +prompt(
      'Сколько фильмов вы уже посмотрели?',
      0
    );

    while (
      this.count == '' ||
      this.count == null ||
      isNaN(this.count)
    ) {
      this.count = +prompt(
        'Сколько фильмов вы уже посмотрели?',
        0
      );
    }
  },
  rememberMyFilms() {
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
        this.movies[qFirst] = qSecond;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel() {
    if (this.count > 0 && this.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (this.count > 10 && this.count < 30) {
      alert('Вы классический зритель');
    } else if (this.count > 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB(params) {
    if (this.privat == false) {
      console.log(this);
    }
  },
  writeYourGenres(params) {
    let index = 1;
    while (this.genres.length < 3) {
      let genre = prompt(
        `Ваш любимый жанр под номером ${index}`
      );
      if (genre != '' && genre != null) {
        this.genres.push(genre);
        index++;
      }
    }
    this.genres.forEach((element, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${element}`);
    });
  },
  toggleVisibleMyDB() {
    this.privat = !this.privat;
  },
};

personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();
