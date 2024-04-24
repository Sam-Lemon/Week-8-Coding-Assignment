class Person {
    constructor (name, position, department) {
        this.name = name;
        this.position = position;
        this.department = department;
    }
    
}

class Technician extends Person {
    constructor (department) {
        super(name, position, department);
        this.department = department;
        this.technicians = [];
    }

}

class Actor extends Person {
    constructor (department) {
        super(name, position, department);
        this.department = department;
        this.actors = [];
    }

}

class Musician extends Person {
    constructor (department) {
        super(name, position, department);
        this.department = department;
        this.actors = [];
    }

}


































/*class Technician {
    constructor (name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`
    }
}

class Actor {
    constructor (name, role) {
        this.name = name;
        this.role = role;
    }

describe() {
    return `${this.name} is playing the role of ${this.role} for tonight's performance.`
    }
}

class Musician {
    constructor (name, section) {
        this.name = name;
        this.section = section;
    }

    describe() {
        return `${this.name} plays in the ${this.section} section.`
    }
}

class Menu {
    constructor() {
        //I'm not sure what to put in here to make everything work right
    }

    start() {
        let selection = this.showMainMenuOptions();

        while(selection != 0) {
            switch (selection) {
                case '1':
                    this.addPerson();
                    break;
                case '2':
                    this.viewDepartment();
                    break;
                case '3':
                    this.viewRole();
                    break;
                case '4':
                    this.viewSection();
                    break;
                case '5':
                    this.deletePerson();
                    break;
                default:
                    selection = 0;
        }
        selection = this.showMainMenuOptions();
        }
    }

    showMainMenuOptions() {
        return prompt(`
            1 - Add Person
            2 - View Technical Department
            3 - View Actor Role
            4 - View Musician Section
            5 - Delete Person
            6 - Display Technical Department
            7 - Display Actor Role
            8 - Display Musician Section
        `);
    }

    addPersonMenuOptions() {
        return prompt(`
            1 - Add Technician
            2 - Add Actor
            3 - Add Musician
            4 - back
            ---------------------
        `)
    }

    viewDepartmentMenuOptions (department) {
        return prompt(`
            1 - Audio
            2 - Automation
            3 - Carpentry
            4 - Lighting
            5 - Projections
            6 - Props
            7 - Rigging
            8 - SFX
            9 - Stage Management
            10 - Wardrobe
            11 - back
        `)
    }

    viewRoleMenuOptions(role) {
        return prompt(`
            1 - Lead
            2 - Ensemble
            3 - Swing
            4 - back
        `)
    }

    viewSectionMenuOptions (section) {
        return prompt(`
            1 - Principle
            2 - Woodwind
            3 - Brass
            4 - Strings
            5 - Percussion
            6 - back
        `)
    }

    deletePerson(name) {
        return prompt(`
            1 - Delete Technician
            2 - Delete Actor
            3 - Delete Musician
        `)
    }

}

let menu = new Menu();
menu.start();