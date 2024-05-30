// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
var employeesArray = [];
var employees = [];
var salaryar = [];
var ranempfn = [];
var ranempln = [];
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

    let loop = true;
    while (loop) {
      let firstName = prompt ("What is the first name of the employee", "Kyle");
      let lastName = prompt ("What is the Last name name of the employee", "Fredrick");
      let salary = parseInt(prompt ("What is the salary of the employee", "47000"));
        let tempemployeesArray = {
          firstName: firstName,
          lastName: lastName,
          salary: salary
        }
        employeesArray.push(tempemployeesArray)
        salaryar.push(salary)
        ranempfn.push(firstName)
        ranempln.push(lastName)
        console.log(salaryar)
loop = confirm("Do you want to add another favorite?");
  };
  return employeesArray;
};
console.log(employeesArray);
console.log(salaryar)
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  const total = salaryar.reduce((partialSum, a) => partialSum + a, 0);
  const average = total / employeesArray.length;
  console.log("The average of employees is " + average);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const random = Math.floor(Math.random() * employeesArray.length);
  console.log("Our employee of the week is " + ranempfn[random] + " " + ranempln[random]);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
