/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener("DOMContentLoaded", ()=> {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const images = document.querySelectorAll(".promo__adv img");
    
    /* for (let i = 3; i >= images.length; i--){
        images[i].remove();
    } */
    
    
    

    const deleteAdv = (arr) => {
        arr.forEach (item => {
            item.remove();
        });

    };

    
    
    const genre = document.querySelector(".promo__genre"),
            addForm = document.querySelector ("form.add"),
            addInput = addForm.querySelector(".adding__input"),
            checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkBox.checked;

        if (newFilm) {

            if (newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite) {
                console.log ("Добавляем любимый фильм");
            }
            
            movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList (movieDB.movies, movieList);
        }
       
        event.target.reset();

    });
    
   const makeChanges = () => {
       genre.textContent = "ДРАМА";
    
    const backImage = document.querySelector(".promo__bg");
    
        backImage.style.backgroundImage = "url('img/bg.jpg')";
   };
    
    
    const movieList = document.querySelector(".promo__interactive-list");
    
    const sortArr = (arr) => {
       arr.sort(); 
    };

    
    
    
    function createMovieList (films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>`;
        });
    
        document.querySelectorAll(".delete").forEach((btn, i) => {
                btn.addEventListener ("click", () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);

                    createMovieList (films, parent);
                });

        });
    }

    createMovieList (movieDB.movies, movieList);
    deleteAdv (images);
    
});

