//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:65130500070       Name:Wanassanan TRi-apibanwongsa
class EmployeeManager {
    constructor(){
        this.employees = []
        this.id = 0
    }

    //pass
    addEmployee(name, position){
        this.id++
        this.employees.push({id:this.id, name, position})
        return this.employees
    }

    removeEmployee(id){
        let founded = this.employees.findIndex((element) => {
            if (id === element.id) {
                return element.id
            }
        })
        this.employees.splice(this.employees[founded], 1);
    }

    //pass
    findEmployeeByName(name){
        if (name === null || name === undefined) return -1
        else return this.employees.filter((employee) => {
            return employee.name.toLowerCase() === name.toLowerCase()
        })
    }

    sortEmployeeByName(){
        this.employees.sort()
    }

    updateEmployee (employee){

    }

    promoteEmployee(id, newPosition){
        let founded = this.employees.findIndex((element) => {
            if (id === element.id) {
                return element.id
            }
        })
        this.employees.splice(this.employees[founded], 1, newPosition);
            return this.employees[founded]
    }
}
 
// Example usage:
const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer")); // Adds and logs new employee
console.log(manager.addEmployee("Jane Doe", "Designer")); // Adds and logs new employee

console.log("remove")
console.log(manager.removeEmployee(2)); // Adds and logs new employee
console.log(manager.removeEmployee(3)); // Adds and logs new employee

console.log("find")
console.log(manager.findEmployeeByName("John Doe")); // Finds and logs John Doe

console.log("sort")
manager.sortEmployeeByName(); // Sorts employees by name
console.log(manager.employees); // Logs sorted employees

manager.promoteEmployee(1, "Senior Developer"); // Promotes John Doe to Senior Developer
console.log(manager.employees); // Logs employees to see the updated position of John Doe
