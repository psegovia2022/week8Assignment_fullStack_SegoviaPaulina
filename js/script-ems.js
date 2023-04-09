// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [43434343, "Paulina Segovia", 3232, "paulinasegovia@gmail.com", "Executive"],
    [74748392, "Marcelo Aguilar", 7372, "marcelo@gmail.com", "Engineering"],
    [93920193, "Clara Segovia", 7483, "clara@gmail.com", "Executive"],
    [57395729, "Amanda Rivera", 5735, "amanda@gmail.com", "Engineering"]
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    employees = JSON.parse(localStorage.getItem('employees'))
}
// GET DOM ELEMENTS

const $ = (id) => document.getElementById(id);
let id = $('id');
let name = $('name');
let ext = $('extension');
let email = $('email');
let dept = $('department');
let submitBtn = $('submit');
let form = $('addForm');
let table = $('empTable');
let count = $('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
        // id.value;
        // name.value;
        // ext.value;
        // email.value;
        // dept.value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [id.value, name.value, ext.value, email.value, dept.value]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus();
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentNode.parentNode.rowIndex;
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex -1,1)
        // BUILD THE GRID
        buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    table.lastElementChild.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employees) {
        tbody.innerHTML +=

        `<tr>
        <td>${employee[0]}</td>
        <td>${employee[1]}</td>
        <td>${employee[2]}</td>
        <td>${employee[3]}</td>
        <td>${employee[4]}</td>
        <td><button class="btn btn-sm btn-danger delete">X</button></td>
    </tr>
    `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    table.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    count.value = `(${employees.length})`;
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));
};