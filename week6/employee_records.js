
let employees = [];

function employee(Name, JobTitle, Salary) {
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = 'Full Time'
    employees.push(this.Name)
    console.log(this)
    this.printEmployeeForm = function (){
        console.log(`
            Name: ${this.Name}
            JobTitle: ${this.JobTitle}
            Salary: ${this.Salary}
            Status: ${this.Status}
        `)
    }
}

let isabella = new employee ("isabella", "cook", "12.00 p/h ")
isabella.printEmployeeForm()

let bella = new employee ("bella", "manager", "13.00 p/h ")
bella.printEmployeeForm()

let arianna = new employee ("arianna", "supervisor", "112.00 p/h ")
arianna.Status = "on call"
arianna.printEmployeeForm()

console.log(employees)