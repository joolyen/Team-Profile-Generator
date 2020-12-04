// code to define and export the Engineer class. This class inherits from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        //need to use super here to get properties from Employee class we're extended
        super(name, id, email);
        this.title = "Engineer";
        this.github = github;
    }
    //only need to create a function for the new property added
    getOfficeNumber(){
        return this.github;
    }
}

module.exports = Engineer