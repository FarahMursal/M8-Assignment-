let employees = [
    {id: 1001, name: "John Smith", extension: 1234, email: "john.smith@company.com", department: "Engineering"},
    {id: 1002, name: "Jane Doe", extension: 5678, email: "jane.doe@company.com", department: "Marketing"},
    {id: 1003, name: "Bob Johnson", extension: 9012, email: "bob.johnson@company.com", department: "Sales"},
    {id: 1004, name: "Alice Williams", extension: 3456, email: "alice.williams@company.com", department: "QA"},
    {id: 1005, name: "Tom Wilson", extension: 7890, email: "tom.wilson@company.com", department: "Executive"}
];

// Define a function to build the grid
function buildGrid() {
    let tbody = document.querySelector("#empTable tbody");
    let rows = "";
    for (let employee of employees) {
        rows += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.extension}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td><button type="button" class="btn btn-danger" onclick="deleteEmployee(${employee.id})">Delete</button></td>
            </tr>
        `;
    }
    tbody.innerHTML = rows;
    document.querySelector("#empCount").textContent = employees.length;
}


function addEmployee(id, name, extension, email, department) {
    let employee = {id: id, name: name, extension: extension, email: email, department: department};
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    buildGrid();
}


function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    localStorage.setItem("employees", JSON.stringify(employees));
    buildGrid();
}


if (localStorage.getItem("employees")) {
    employees = JSON.parse(localStorage.getItem("employees"));
}


window.addEventListener("load", buildGrid);
