const numberOfFilms = prompt("How many films have you seen already?", "");




const personalMovieBd = {
    count: numberOfFilms,
    movies:  {
       
    },
    actors:  {},
    genres:  [],
    privat: false

};

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

if (personalMovieBd.count < 10) {
    console.log('You watched quite few films');
} else if (personalMovieBd.count >= 10 && personalMovieBd.count < 30) {
    console.log('You are a cool watcher') ;
} else if (personalMovieBd.count >= 30) {
    console.log('You are a movieguy!');
} else {
    console.log('Wrong answer');
}


console.log(personalMovieBd);





