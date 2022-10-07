const numberOfFilms = prompt("How many films have you seen already?", "");


const personalMovieBd = {
    count: numberOfFilms,
    movies:  {
       
    },
    actors:  {},
    genres:  [],
    privat: false

};

const  a = prompt("One of the films you watched?", "");
const  b = prompt("How many point do you give it?", "");
const  c = prompt("One of the films you watched?", "");
const  d = prompt("How many point do you give it?", "");

personalMovieBd.movies[a] = b;
personalMovieBd.movies[c] = d;

console.log(personalMovieBd);


