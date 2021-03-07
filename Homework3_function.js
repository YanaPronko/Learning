'use strict';

let number0fFilms;

function start() {

    number0fFilms = +prompt("Сколько фильмов посмотрели?", "");

    while (number0fFilms == "" || number0fFilms == null || isNaN (number0fFilms) ) {

        number0fFilms = +prompt("Сколько фильмов посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function showMyDB () {
        if (personalMovieDB.privat == false) {
            console.log (personalMovieDB);
        }
}

showMyDB();

function writeYourGenres () {
    let counter = 1;
    for (let i=1; i <= 3; i++) {
        personalMovieDB.genres [i - 1] = prompt(`Ваш любимый жанр под номером ${counter}?`, "");
        counter++;
    }
}

writeYourGenres ();

console.log (personalMovieDB.genres);

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов", ""),
             b = prompt("На сколько вы его оцените?", "");
    
             if(a != null && b != null && a !="" && b != "" && a.length < 50) {
                 personalMovieDB.movies[a] = b;
                 console.log ("done");
             } else {
                  console.log ("error");
                  i--;
             }
    }

}
rememberMyFilms ();

function detectPersonalLevel () {
   
    if(personalMovieDB.count < 10) {
        alert("просмотрено довольно мало фильмов");
    
    } else if(personalMovieDB.count >= 10 && number0fFilms <= 30) {
        alert("Вы классический зритель");
    
    } else if(personalMovieDB.count >30) {
           alert("Вы киноман");
    
    } else {
        alert("произошла ошибка");
    }
    
}
detectPersonalLevel ();