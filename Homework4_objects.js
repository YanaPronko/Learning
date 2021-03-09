'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    getStart: function start() {

        personalMovieDB.count = +prompt("Сколько фильмов посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN (personalMovieDB.count) ) {
    
            personalMovieDB.count = +prompt("Сколько фильмов посмотрели?", "");
        }
    },

    detectLevel: function detectPersonalLevel () {
   
        if(personalMovieDB.count < 10) {
            alert("просмотрено довольно мало фильмов");
        
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        
        } else if(personalMovieDB.count >30) {
               alert("Вы киноман");
        
        } else {
            alert("произошла ошибка");
        }
        
    },
    
    writeGenres: function writeYourGenres () {
                for (let i = 1; i <= 3; i++) {
                    let genre = prompt(`Ваш любимый жанр под номером ${i}?`, "");
            
            if (genre == null || genre === "") {
                    console.log("вы ввели некорректные данные или не вели вовсе");
                    i--;
            } else {
                personalMovieDB.genres [i - 1] = genre;
            }
        
        }
        personalMovieDB.genres.forEach((name, number) => {
            console.log (`"Любимый жанр ${number+1} - это ${name}`);
    });
    
    },

    rememberFilms: function rememberMyFilms () {
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
    
    },

    toggleVisibleMyDB: function visibleMyDB () {
         if(personalMovieDB.privat){
              personalMovieDB.privat = false;
         } else {
              personalMovieDB.privat = true;
         }
        },

    show: function showMyDB () {
        if (personalMovieDB.privat == false) {
            console.log (personalMovieDB);
        }
}

};

personalMovieDB.getStart();
personalMovieDB.detectLevel();
personalMovieDB.writeGenres();
personalMovieDB.rememberFilms();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.show();