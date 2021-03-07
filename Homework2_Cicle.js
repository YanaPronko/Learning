'use strict';

const number0fFilms = +prompt("Сколько фильмов посмотрели?", "");

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count < 10) {
    alert("просмотрено довольно мало фильмов");

} else if(personalMovieDB.count >= 10 && number0fFilms <= 30) {
    alert("Вы классический зритель");

} else if(personalMovieDB.count >30) {
       alert("Вы киноман");

} else {
    alert("произошла ошибка");
}
    
let qualityNumbers = 0;
while (qualityNumbers < 2) {
    let a = prompt("Один из последних просмотренных фильмов", "");
    
    if(a == ""|| a == null || a.length > 50) {
        continue;
    } 
    
    let b = prompt("На сколько оцените его?","");
        if(b == ""|| b == null) {
            continue ;           
        }

        qualityNumbers++;
       
    personalMovieDB.movies[a] = b;
}
    
    console.log(personalMovieDB);