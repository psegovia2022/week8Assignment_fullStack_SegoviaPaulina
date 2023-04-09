//STEP 1
// var favMovies = ["Outbreak", "Gorillas in the mist", "Jurassic Park", "Braveheart", "Machuca"];
// console.log(favMovies[1]);

//STEP 2
// var movies = new Array(5);
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";
// console.log(movies[0]);

//STEP 3
// var movies = new Array(5);
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";

// movies.splice(2, 0, "Tesis");

// console.log(movies.length);

//STEP 4
// var movies = [];
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";

// delete movies[0];
// console.log(movies);

//STEP 5
// var movies = [];
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";
// movies[5] = "Little Women";
// movies[6] = "Le placard";

// for (movie in movies) {
//     console.log(movies[movie]);
// }



//STEP 6
// var movies = [];
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";
// movies[5] = "Little Women";
// movies[6] = "Le placard";

// for (movie of movies) {
//     console.log(movie);
// }

//STEP 7
// var movies = [];
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";
// movies[5] = "Little Women";
// movies[6] = "Le placard";

// movies.sort();
// for (movie of movies) {
//         console.log(movie);
//     }


//STEP 8
// var movies = [];
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";
// movies[5] = "Little Women";
// movies[6] = "Le placard";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "Pinochio"];

// console.log(`Movies I like: \n
//         \n${movies[0]} 
//         \n${movies[1]}
//         \n${movies[2]} 
//         \n${movies[3]} 
//         \n${movies[4]} 
//         \n${movies[5]} 
//         \n${movies[6]}
    
//         \n\nMovies I regret watching: \n
//        \n${leastFavMovies[0]} 
//         \n${leastFavMovies[1]} 
//         \n${leastFavMovies[2]}` )


//STEP 9
// var movies = [];
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";
// movies[5] = "Little Women";
// movies[6] = "Le placard";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "Pinochio"];
// var allMovies = movies.concat(leastFavMovies);

// console.log(allMovies.reverse());

//STEP 10
// var movies = [];
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";
// movies[5] = "Little Women";
// movies[6] = "Le placard";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "Pinochio"];
// var allMovies = movies.concat(leastFavMovies);

// console.log(allMovies.pop());

//STEP 11
// var movies = [];
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";
// movies[5] = "Little Women";
// movies[6] = "Le placard";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "Pinochio"];
// var allMovies = movies.concat(leastFavMovies);
// console.log(allMovies.shift());

//STEP 12
// var movies = []
// movies[0] = "Outbreak";
// movies[1] = "Gorillas in the mist";
// movies[2] = "Jurassic Park";
// movies[3] = "Braveheart";
// movies[4] = "Machuca";
// movies[5] = "Little Women";
// movies[6] = "Le placard";

// var leastFavMovies = ["Dumb & Dumber", "Battleship Potemkin", "Pinochio"];
// var allMovies = movies.concat(leastFavMovies);

// allMovies.splice(7, 9, "La vida de los otros");
// console.log(allMovies);

// //STEP 13
// var movies = [
//     ["Gorillas in the mist", 1], 
//     ["Outbreak", 2], 
//     ["Machuca", 3], 
//     ["Little Women", 4], 
//     ["Braveheart", 5]];

//     movies.forEach(function (movies) {
//         var movieNames = movies.filter(function(names){
//         return typeof names !== "number";}); 
//         console.log(movieNames);
//         })



//STEP 14
// let employees = ["Paulina", "Clara", "Marcelo", "Amanda", "Claudio"];
// let showEmployees = function(employees) {
//     console.log(`Employees: \n\n`);
//     employees.forEach(function(employees) {
//         console.log(`${employees.toUpperCase()}`);
//     })};

// showEmployees(employees);

//STEP 15


// function filterValues(array) {
//     array = array.filter(isEligible);
//     return array;
// } 

// function isEligible(value) {
//     if(value !== false || value !== null || value !== 0 || value !== "") {
//         return value;
//     }
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//STEP 16
// let numbers = [1, 2, 20, 94, 5, 67, 7, 8, 9, 10];
// function anyNumber(numbers) {
//     return numbers[Math.floor(Math.random()*numbers.length)];
// } ;

// console.log(anyNumber(numbers));

//STEP 17

// let numbers = [1, 29, 20, 294, 5, 670, 7, 8, 9, 10];
// let largestNumber = numbers.reduce(function (accumulatedValue, currentValue) {
//     return Math.max(accumulatedValue, currentValue);
// });

// console.log(`The largest number: ${largestNumber}`);
