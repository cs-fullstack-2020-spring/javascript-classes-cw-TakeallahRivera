/*### Problem 1:
Create a GitHubRepository class with properties userName, 
fileName, descriptionOfRepository, and code. Create a 
function that prints all properties. Create an object of 
the class and use the function.*/

//Create a GitHubRepository Class//

/*
class GitHubRepository {
    constructor(userName, fileName, descriptionOfRepository, code) {
        this.userName = userName;
        this.fileName = fileName;
        this.descriptionOfRepository = descriptionOfRepository;
        this.code = code;
    }
    printGitHub() {
        console.log(`userName: ${this.userName}\nfileName: ${this.fileName}\ndescriptionOfRepository: ${this.descriptionOfRepository}\ncode: ${this.code}`)
    }
    
}
//created an objected//
let newGitHubRepository = new GitHubRepository("Takeallah", "Roxanne", "Devere", "Hendrix");

//Printed using function//
newGitHubRepository.printGitHub();

*/

/*Problem 2:
Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties using prompt. Create an object of the class and use the two methods you created.*/

class Movie {
    constructor(movieName, rating, yearReleased) {
        this.movieName = "Halloween";
        this.rating = 5;
        this.yearReleased = 1978;
    }

    addNewRating (){
        let newDamnInput = prompt("Enter a new rating damn it!")
        this.rating = newDamnInput;
    }

    addNewYear (){
        let newDamnInput2 = prompt("Enter a new year released damn it")
        this.yearReleased = newDamnInput2;
    }

    printMovieHub() {
        console.log(`movieName: ${this.movieName}\nrating: ${this.rating}\nyearReleased: ${this.yearReleased}`)
    }


   
}





