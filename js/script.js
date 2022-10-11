let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you seen already?", "");

    while (numberOfFilms == '' || numberOfFilms == null  || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films have you seen already?", "");
    }
}
start();

const personalMovieBd = {
    count: numberOfFilms,
    movies:  {
       
    },
    actors:  {},
    genres:  [],
    privat: false

};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const  a = prompt("One of the films you watched?", ""),
               b = prompt("How many point do you give it?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieBd.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
            
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieBd.count < 10) {
        console.log('You watched quite few films');
    } else if (personalMovieBd.count >= 10 && personalMovieBd.count < 30) {
        console.log('You are a cool watcher') ;
    } else if (personalMovieBd.count >= 30) {
        console.log('You are a movieguy!');
    } else {
        console.log('Wrong answer');
    }
    
}
detectPersonalLevel();

function showMyBD(hidden) {
    if(!hidden) {
        console.log(personalMovieBd);
    }
}
showMyBD(personalMovieBd.privat);

console.log(personalMovieBd);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieBd.genres[i - 1] = prompt(`Your favorite genre number ${i} ?`);
    }
}
 writeYourGenres();   



