/**Person and Department class are two classes we're working with for this project, 
 * and within them are the properties of the objects. The dot notation identifies 
 * the specific class a property is pulled from.
 */

class Person {
    constructor (name, team) {
        this.name = name;
        this.team = team;
    }

    describe() {
        return `${this.name} is in the ${this.team} department.`;
    }
}

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

/**The Menu class holds our menus. I used a switch to create the menu options, each
 * case is the input from the user and then that triggers the associated method which is
 * laid out below.
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
                case '1': 
                    this.createDepartment();
                    break;
                case '2':
                    this.viewDepartment();
                    break;
                case '3':
                    this.deleteDepartment();
                    break;
                case '4':
                    this.displayAllDepartments();
                default:
                    selection = 0;
            
            }
            selection = this.showMainMenuOptions();
        }

        alert('See you next time!');
    }

/**
 * showMainMenuOptions and showDepartmentMenuOptions are the physical layout of inputs
 * the user could choose from.
 */

    showMainMenuOptions() {
        return prompt(`
            (0) Exit
            (1) Create new department
            (2) View departments
            (3) Delete a department
            (4) Display all departments
            `);
    }

    showDepartmentMenuOptions(departmentInfo) {
        return prompt (`
            (0) Back
            (1) Add new staff member
            (2) Remove staff member
            -------------------------
            ${departmentInfo}
        `)
    }


/**Below are all the methods associated with the Menu class. displayAllDepartments 
 * creates a string of departments, iterates through the departments array and shows
 * them all to the user.
 */
    displayAllDepartments() {
        let departmentString = '';
        for (let i = 0; i < this.departments.length; i++) {
            departmentString += i + ') ' + this.departments[i].name + '\n';
        }
        alert(departmentString);
    }

/**createDepartment lets the user add a name via a prompt and then that value is pushed
 * to the departments array.
 */
    createDepartment() {
        let name = prompt('Enter name for new department.');
        this.departments.push(new Department(name));
    }

/**viewDepartment uses a for loop to iterate through the departments array and 
 * selects whichever specific department the user requests and shows it. From there
 * the user can choose to add or remove staff from the departments array..
 */
    viewDepartment() {
        let index = prompt('Enter the index of the department you wish to view.');
        if (index > -1 && index < this.departments.length) {
            this.selectedDepartment = this.departments[index];
            let description = 'Department Name: ' + this.selectedDepartment.name + '\n';

            for (let i = 0; i < this.selectedDepartment.staff.length; i++) {
                description += i + ') ' + this.selectedDepartment.staff[i].name + ' - ' +
                this.selectedDepartment.staff[i].position + '\n';
            }

            let selection = this.showDepartmentMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addNewStaff();
                    break;
                case '2': 
                    this.removeStaff();
            }
        }
    }

/**deleteDepartment uses an if statement to splice out the selected department from
 * the array.
 */
    deleteDepartment() {
        let index = prompt('Enter the index of the team you wish to delete:');
        if (index > -1 && index < this.departments.length) {
            this.departments.splice(index, 1);
        }
    }

/**addNewStaff uses the push method to add a new staff member to the staff array, 
 * removeNewStaff uses the splice method and an if statement to pull the selected person
 * from the staff array.
*/
    addNewStaff() {
        let name = prompt('Enter name for new staff member:');
        this.selectedDepartment.staff.push(new Person(name));
    }

    removeStaff() {
        let index = prompt('Enter the index of the player you wish to delete:');
        if (index > -1 && index < this.selectedDepartment.staff.length) {
            this.selectedDepartment.staff.splice(index,1);
        }
    }


}

let menu = new Menu();
menu.start();

