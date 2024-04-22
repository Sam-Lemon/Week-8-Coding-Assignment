class Technician {
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

    describe() {
        return `${this.name} plays in the ${this.section} section.`
    }
    }
}

class Menu {
    constructor() {
        //I'm not sure what to put in here to make everything work right
    }

    start() {
        let selection = this.mainMenuOptions();

        while(selection != 0) {
            switch (selection) {
                case 'a':
                    this.addPerson();
                    break;
                case 'b':
                    this.viewDepartment();
                    break;
                case 'c':
                    this.viewRole();
                    break;
                case 'd':
                    this.viewSection();
                    break;
                case 'e':
                    this.viewTechnician();
                    break;
                case 'f':
                    this.viewActor();
                    break;
                case 'g':
                    this.viewMusician();
                    break;
                case 'h':
                    this.deletePerson();
                    break;
                case 'i':
                    this.deleteDepartment();
                    break;
                case 'j':
                    this.deleteRole();
                    break;
                case 'k':
                    this.deleteSection();
                    break;
                case 'l':
                    this.displayDepartment();
                    break;
                case 'm':
                    this.displayRole();
                    break;
                case 'n':
                    this.displaySection();
                    break;
                default:
                    selection = 0;
        }
        selection = this.mainMenuOptions();
    }
    }
}