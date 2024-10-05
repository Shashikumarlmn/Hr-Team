document.addEventListener("DOMContentLoaded", function() {
    const employeeTable = document.querySelector("#employee-table tbody");

    // Sample data (You will fetch this from the server in real-world apps)
    const employees = [
        { name: "John Doe", position: "Software Engineer", department: "IT", status: "Active" },
        { name: "Jane Smith", position: "HR Manager", department: "HR", status: "Active" },
        { name: "Sam Wilson", position: "Data Analyst", department: "Finance", status: "On Leave" },
    ];

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${employee.name}</td><td>${employee.position}</td><td>${employee.department}</td><td>${employee.status}</td>`;
        employeeTable.appendChild(row);
    });
});
