// code to define and export the Manager class. This class inherits from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //need to use super here to get properties from Employee class we're extended
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
    //only need to create a function for the new property added
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager