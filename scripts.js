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
