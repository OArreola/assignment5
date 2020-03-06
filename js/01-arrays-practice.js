//STEP 1
let favoriteMovies = [
  "Pulp Fiction",
  "Reservoir Dogs",
  "Kill Bill",
  "Inglorious Basterds",
  "The Hateful Eight"
];
window.console.log('"' + favoriteMovies[1] + '" is a great movie!!!');

// //STEP 2
// let favoriteMovies = new Array(5);
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// window.console.log('"' + favoriteMovies[0] + '" is a great movie!!!');

// //STEP 3
// let favoriteMovies = new Array(5);
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// favoriteMovies[5] = "From Dusk Till Dawn";
// window.console.log(favoriteMovies.length);

// //STEP 4
// let favoriteMovies = [];
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// delete favoriteMovies[0];
// window.console.log(favoriteMovies);

// //STEP 5
// let favoriteMovies = [];
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// favoriteMovies[5] = "From Dusk Till Dawn";
// favoriteMovies[6] = "Death Proof";
// let movie;
// for (movie = 0; movie < favoriteMovies.length; movie++) {
//   window.console.log(favoriteMovies[movie]);
// }

// //STEP 6
// let favoriteMovies = [];
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// favoriteMovies[5] = "From Dusk Till Dawn";
// favoriteMovies[6] = "Death Proof";
// let movie;
// for (movie in favoriteMovies) {
//   window.console.log(favoriteMovies[movie]);
// }

// //STEP 7
// let favoriteMovies = [];
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// favoriteMovies[5] = "From Dusk Till Dawn";
// favoriteMovies[6] = "Death Proof";
// favoriteMovies.sort();
// let movie;
// for (movie in favoriteMovies) {
//   window.console.log(favoriteMovies[movie]);
// }

// //STEP 8
// let favoriteMovies = [];
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// favoriteMovies[5] = "From Dusk Till Dawn";
// favoriteMovies[6] = "Death Proof";

// let leastFavMovies = [];
// leastFavMovies[0] = "Star Wars: Episode IX - The Rise of Skywalker";
// leastFavMovies[1] = "Star Wars: Episode VIII - The Last Jedi";
// leastFavMovies[2] = "Star Wars: Episode VII - The Force Awakens";

// let movie;
// window.console.log("\nMovies I like:\n\n");
// for (movie of favoriteMovies) {
//   window.console.log(movie);
// }
// window.console.log("\nMovies I regret watching:\n\n");
// for (movie of leastFavMovies) {
//   window.console.log(movie);
// }
// window.console.log("");

// //STEP 9
// let favoriteMovies = [];
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// favoriteMovies[5] = "From Dusk Till Dawn";
// favoriteMovies[6] = "Death Proof";

// let leastFavMovies = [];
// leastFavMovies[0] = "Star Wars: Episode IX - The Rise of Skywalker";
// leastFavMovies[1] = "Star Wars: Episode VIII - The Last Jedi";
// leastFavMovies[2] = "Star Wars: Episode VII - The Force Awakens";

// let movies = favoriteMovies.concat(leastFavMovies);
// movies.reverse(movies.sort());

// let movie;
// for (movie of movies) {
//   window.console.log(movie);
// }

// //STEP 10
// let favoriteMovies = [];
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// favoriteMovies[5] = "From Dusk Till Dawn";
// favoriteMovies[6] = "Death Proof";

// let leastFavMovies = [];
// leastFavMovies[0] = "Star Wars: Episode IX - The Rise of Skywalker";
// leastFavMovies[1] = "Star Wars: Episode VIII - The Last Jedi";
// leastFavMovies[2] = "Star Wars: Episode VII - The Force Awakens";

// let movies = favoriteMovies.concat(leastFavMovies);
// movies.reverse(movies.sort());
// window.console.log(movies.pop());

// //STEP 11
// let favoriteMovies = [];
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// favoriteMovies[5] = "From Dusk Till Dawn";
// favoriteMovies[6] = "Death Proof";

// let leastFavMovies = [];
// leastFavMovies[0] = "Star Wars: Episode IX - The Rise of Skywalker";
// leastFavMovies[1] = "Star Wars: Episode VIII - The Last Jedi";
// leastFavMovies[2] = "Star Wars: Episode VII - The Force Awakens";

// let movies = favoriteMovies.concat(leastFavMovies);
// movies.reverse(movies.sort());
// window.console.log(movies.shift());

// //STEP 12
// let favoriteMovies = [];
// favoriteMovies[0] = "Pulp Fiction";
// favoriteMovies[1] = "Reservoir Dogs";
// favoriteMovies[2] = "Kill Bill";
// favoriteMovies[3] = "Inglorious Basterds";
// favoriteMovies[4] = "The Hateful Eight";
// favoriteMovies[5] = "From Dusk Till Dawn";
// favoriteMovies[6] = "Death Proof";

// let leastFavMovies = [];
// leastFavMovies[0] = "Star Wars: Episode IX - The Rise of Skywalker";
// leastFavMovies[1] = "Star Wars: Episode VIII - The Last Jedi";
// leastFavMovies[2] = "Star Wars: Episode VII - The Force Awakens";

// let additionalFavoriteMovies = [
//   "The Matrix",
//   "Toy Story",
//   "The Shawshank Redemption",
//   "Star Wars: Episode V - The Empire Strikes Back",
//   "Point Break"
// ];

// let movies = favoriteMovies.concat(leastFavMovies);
// movies.reverse(movies.sort());

// let leastFavMoviesIndexes = [];
// let movie;
// for (movie in leastFavMovies) {
//   leastFavMoviesIndexes[movie] = movies.indexOf(leastFavMovies[movie]);
// }
// let index;
// for (index in leastFavMoviesIndexes) {
//   movies[leastFavMoviesIndexes[index]] = additionalFavoriteMovies[index];
// }
// for (movie of movies) {
//   window.console.log(movie);
// }

// //STEP 13
// let employee1 = [];
// let employee2 = [];

// employee1["employeeid"] = 1234;
// employee1["name"] = "Michael Jackson";
// employee1["title"] = "Chief Janitor";
// employee1["department"] = "Accounting";
// employee1["isEmployed"] = false;

// employee2["employeeid"] = 567;
// employee2["name"] = "Donald Trump";
// employee2["title"] = "Team Member";
// employee2["department"] = "Sales";
// employee2["isEmployed"] = true;

// let employees = [];
// employees[0] = employee1;
// employees[1] = employee2;

// window.console.log(employees[1].name);

// //STEP 14
// let employee1 = [];
// let employee2 = [];

// employee1["employeeid"] = 1234;
// employee1["name"] = "Michael Jackson";
// employee1["title"] = "Chief Janitor";
// employee1["department"] = "Accounting";
// employee1["isEmployed"] = false;

// employee2["employeeid"] = 567;
// employee2["name"] = "Donald Trump";
// employee2["title"] = "Team Member";
// employee2["department"] = "Sales";
// employee2["isEmployed"] = true;

// let employees = [];
// employees[0] = employee1;
// employees[1] = employee2;

// let employee;
// for (employee of employees) {
//   window.console.log(employee.name);
// }

// //STEP 15
// let employee1 = [];
// let employee2 = [];

// employee1["employeeid"] = 1234;
// employee1["name"] = "Michael Jackson";
// employee1["title"] = "Chief Janitor";
// employee1["department"] = "Accounting";
// employee1["isEmployed"] = true;

// employee2["employeeid"] = 567;
// employee2["name"] = "Donald Trump";
// employee2["title"] = "Team Member";
// employee2["department"] = "Sales";
// employee2["isEmployed"] = true;

// let employees = [];
// employees[0] = employee1;
// employees[1] = employee2;

// let employee3 = [];
// employee3["employeeid"] = 23;
// employee3["name"] = "Bruce Banner";
// employee3["title"] = "Head Scientist";
// employee3["department"] = "R&D";
// employee3["isEmployed"] = false;

// employees[2] = employee3;

// for (employee of employees) {
//   if (employee.isEmployed === true) {
//     window.console.log(employee.name);
//   }
// }

// //STEP 16
// let movies = [];
// movies = [
//   ["Reservoir Dogs", 1],
//   ["Pulp Fiction", 2],
//   ["Kill Bill", 3],
//   ["Inglorious Basterds", 4],
//   ["The Hateful Eight", 5]
// ];

// let movie;
// for (movie of movies) {
//   window.console.log(
//     String(
//       movie.filter(item => {
//         "use strict";
//         return typeof item === "string";
//       })
//     )
//   );
// }

// //STEP 17
// let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
// let showEmployee = arrayEmployees => {
//   "use strict";
//   let employee;
//   window.console.log("\nEmployees:\n\n");
//   for (employee of arrayEmployees) {
//     window.console.log(employee.toUpperCase());
//   }
//   window.console.log("\n");
// };
// showEmployee(employees);

// //STEP 18
// let filterValues = array => {
//   "use strict";
//   return array.filter(item => {
//     "use strict";
//     let res = true;
//     if (item === false || item === null || item === 0 || item === "") {
//       res = false;
//     }
//     return res;
//   });
// };
// window.console.log(filterValues([58, "", "abcd", true, null, false, 0]));

// //STEP 19
// let getRandomItem = array => {
//   "use strict";
//   let random = Math.floor(Math.random() * array.length);
//   //window.console.log(random);
//   return array[random];
// };
// window.console.log(getRandomItem([2, -3, 5, 0.6, 23, 78, -29]));

// //STEP 20
// let getLargestNumber = array => {
//   "use strict";
//   let max;
//   if (array.length > 0) {
//     max = array[0];
//     for (let item of array) {
//       if (item > max) {
//         max = item;
//       }
//     }
//     return max;
//   }
// };
// window.console.log(getLargestNumber([2, -3, 5, 0.6, 23, 78, -29]));
