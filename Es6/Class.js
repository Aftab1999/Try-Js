console.log("Hello Js");

class Employee{
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.expreience =givenExperience;
        this.divisiom = givenDivision;

    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

}

// aftab   = new Emlopyee ("Aftab", 22, "Division");
// console.log(aftab);

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage(){
        if (this.language == 'python'){
            return 'python';
        }
        else{
            return 'JavaScript';
    }
    }

    static multiply(a, b){
        return a * b;
    }
}

rohan = new Programmer ("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan);
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7));