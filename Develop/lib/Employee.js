// Code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee"
    }
    //functions to call Employee data after it's exported
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.title;
    }
}
//make data in this class available elsewhere
module.exports = Employee