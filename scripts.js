/*
* 
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

/*
let me = new Person('Tommy Jones', 'grocer', 12.50)
console.log(me.describe());
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
            throw new Error (`Are you sure ${this.name} is a person?`);
        }
    }

    describe() {
        return `${this.name} works in the ${position} department.`
    }
}

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


}