// // ### Problem 1:
// // Create a GitHubRepository class with properties userName, 
// // fileName, descriptionOfRepository, and code. Create a 
// // function that prints all properties. Create an object of 
// // the class and use the function.

// //Create a GitHubRepository Class//
// class GitHubRepository {
//     constructor(userName, fileName, descriptionOfRepository, code) {
//         this.userName = userName;
//         this.fileName = fileName;
//         this.descriptionOfRepository = descriptionOfRepository;
//         this.code = code;
//     }
//     printGitHub() {
//         console.log(`userName: ${this.userName}\nfileName: ${this.fileName}\ndescriptionOfRepository: ${this.descriptionOfRepository}\ncode: ${this.code}`)
//     }
// }
// //created an objected//
// let newGitHubRepository = new GitHubRepository("Takeallah", "Roxanne", "Devere", "Hendrix");
// //Printed using function//
// newGitHubRepository.printGitHub();

// // Problem 2:
// // Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties using prompt. Create an object of the class and use the two methods you created.
// // !! you should have comments for this problem
// class Movie {
//     constructor(movieName, rating, yearReleased) {
//         this.movieName = "Halloween";
//         this.rating = 5;
//         this.yearReleased = 1978;
//     }

//     addNewRating (){
//         let newDamnInput = prompt("Enter a new rating damn it!")
//         this.rating = newDamnInput;
//     }

//     addNewYear (){
//         let newDamnInput2 = prompt("Enter a new year released damn it")
//         this.yearReleased = newDamnInput2;
//     }

//     printMovieHub() {
//         console.log(`movieName: ${this.movieName}\nrating: ${this.rating}\nyearReleased: ${this.yearReleased}`)
//     }
// }
// let newMovieThings = ("Leprechaun", "9", "1990");
// newMovieThings.printMovieHub();
// // !! you didn't call the methods

// ### Problem 3:
// Create a Student class with the following properties : studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignemtName and assignemtnScore). Create a method that accepts a student name and updates the studentName of an instance of your Student Class. Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array. Create two instances of this class with empty grade arrays. Update the name of one instance of the Student Class using the class method. Add one grade object to each instance of the Student Class grade array using the class method.
// HINT : use object literal notation to create a grade object in the grade array for each instance of the Student Class

// class Student { // !! A class MUST start with a constructor
//     this.studentName = studentName;
//     this.codeSchoolCohort = codeSchoolCohort;
//     this.grade = grade;
// }







