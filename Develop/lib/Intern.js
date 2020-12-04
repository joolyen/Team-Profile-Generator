// code to define and export the Intern class. This class inherits from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        //need to use super here to get properties from Employee class we're extended
        super(name, id, email);
        this.title = "Intern";
        this.school = school;
    }
    //only need to create a function for the new property added
    getSchool(){
        return this.school;
    }
}

module.exports = Intern