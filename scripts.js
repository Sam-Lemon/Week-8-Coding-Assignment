/*
* Person class has all the properties for each additional instance of person.
 */

class Person {
    constructor (name, position, pay) {
        this.name = name;
        this.position = position;
        this.pay = pay;
    }

    describe() {
        return `${this.name} is a ${this.position} and they make ${this.pay} per hour.`
    }

}

// Testing code //
/*
let me = new Person('Tommy Jones', 'grocer', 12.50)
console.log(me.describe());
*/

/**
 * Using the addPerson method to add people to the staff array in the Department 
 * class, after making sure that the input is an instance of Person above. 
 * I also added an alert as well should the input not be correct.
 */

class Department {
    constructor (name) {
        this.name = name;
        this.staff = [];
    }

    addPerson(person) {
        if (person instanceof Person) {
            this.staff.push(person);
        } else {
            alert (`Are you sure ${this.name} is a person?`);
        }
    }

    describe() {
        return `${this.name} works in the ${position} department.`
    }
}

/**
 * This is the beginning of the menu setup. Honestly, I don't understand what this
 * is all about, need to ask a mentor or do some research.
 */

class Menu {
    constructor() {
        this.departments = [];
        this.selectedDepartment = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while(selection != 0) {
            switch(selection) {
                case '(1)': 
                    this.createDepartment();
                    break;
                case '(2)':
                    this.viewDepartment();
                    break;
                case '(3)':
                    this.deleteDepartment();
                    break;
                case '(4)':
                    this.displayDepartment
                default:
                    selection = 0;
            
            }
            selection = this.showMainMenuOptions();
        }

        alert('Please Try Again');
    }

/**
 * showMainMenuOptions is the list of options that should pop up
 * when you go to the live server, same with showDepartmentMenuOptions.
 * I'm not sure why the template literal is there.
 */

    showMainMenuOptions() {
        return prompt(`
            (1) Create new department
            (2) View departments
            (3) Delete a department
            (4) Display all departments
            (5) Back
            `)
    }

    showDepartmentMenuOptions(departmentInfo) {
        return prompt (`
            (1) Add new staff member
            (2) Remove staff member
            -------------------------
            ${departmentInfo}
        `)
    }

    createDepartment() {

    }

    viewDepartment() {

    }

    deleteDepartment() {

    }

    displayAllDepartments() {

    }

    addNewStaff() {

    }

    removeStaff() {
        
    }

}