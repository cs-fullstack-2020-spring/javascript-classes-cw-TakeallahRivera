/*### Problem 1:
Create a GitHubRepository class with properties userName, 
fileName, descriptionOfRepository, and code. Create a 
function that prints all properties. Create an object of 
the class and use the function.*/

//Create a GitHubRepository Class//

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
let newGitHubRepository = new GitHubRepository("Takeallah", "Roxanne", "Devere", "Hendrix");


newGitHubRepository.printGitHub();


