class Employee {
    getClassName () {
        return "Class Employee";
    }
}
class MaleEmployee extends Employee {
    getClassName () {
        return "Class MaleEmployee";
    }
    classClassName () {
        return super.getClassName();
    }
}


var employee = new MaleEmployee();
console.log(employee.classClassName());
