class Schools {
    constructor(name) {
        this.name = name; 
    }

    enrollStudent(studentName) {
        return `${studentName} has enrolled in ${this.name}.`;
    }

    getFacilities() {
        return "Outsiders cannot access facilities.";
    }
}

class Library extends Schools {
    constructor(name) {
        super(name);
    }

    enrollStudent(studentName) {
        // Call the parent class method to indicate general enrollment
        const enrollmentMessage = super.enrollStudent(studentName);
        return `${enrollmentMessage} ${studentName} is allowed to use the Library at ${this.name}.`;
    }

    libraryPolicy() {
        return `Library Policy: ${super.getFacilities()}`;
    }
}

var school = new Library("Greenwood High");
console.log(school.enrollStudent("Amanda")); 
console.log(school.libraryPolicy()); 
