const students = [
    { id: 1,image:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bWFufGVufDB8fDB8fHww", first_name: "John", last_name: "Doe", email: "john@example.com", passing: true, marks: 80, class: "A", gender: "male" },
     {id: 2,image:"https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGh1bWFufGVufDB8fDB8fHww", first_name: "Herry", last_name: "Suke", email: "herry@example.com", passing: true, marks: 66, class: "B", gender: "male" },
     { id: 3,image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGh1bWFufGVufDB8fDB8fHww", first_name: "Nobita", last_name: "Nobi", email: "Nobi@example.com", passing: false, marks: 35, class: "C", gender: "male" },
     { id: 4,image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fHww", first_name: "Shijuka", last_name: "Minamoto", email: "shiJuka@example.com", passing: true, marks: 95, class: "A", gender: "female" },
     { id: 5,image:"https://images.unsplash.com/photo-1599256621730-535171e28e50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGh1bWFufGVufDB8fDB8fHww", first_name: "Suneo", last_name: "Honekawa", email: "Suneo@example.com", passing: true, marks: 60, class: "B", gender: "male" },
     { id: 6,image:"https://images.unsplash.com/photo-1546820389-44d77e1f3b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGh1bWFufGVufDB8fDB8fHww", first_name: "Giyaan", last_name: "Goda", email: "giyaan@example.com", passing: false, marks: 55, class: "C", gender: "male" },
     { id: 7,image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fHww", first_name: "Jheko", last_name: "Goda", email: "jheko@example.com", passing: true, marks: 70, class: "B", gender: "female" },
     { id: 8,image:"https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGh1bWFufGVufDB8fDB8fHww", first_name: "Dekisugi", last_name: "Nohara", email: "dnohara@example.com", passing: true, marks: 100, class: "A", gender: "male" },
     { id: 9,image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGh1bWFufGVufDB8fDB8fHww", first_name: "Shinchan", last_name: "Nohara", email: "shinchan@example.com", passing: false, marks: 25, class: "A", gender: "male" },
     { id: 10,image:"https://images.unsplash.com/photo-1517308883849-ceac3c24681e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGh1bWFufGVufDB8fDB8fHww", first_name: "Kazaama", last_name: "Nobisuke", email: "kazaama@example.com", passing: true, marks: 95, class: "B", gender: "male" }

    // more student objects...
];

// Function to render the table with student data
function renderTable(data) {
    const tableBody = document.getElementById("dataTable");
    tableBody.innerHTML = `
    <tr>
    <th>ID</th>
    <th>Image</th>
    <th>Fullname</th>
    <th>Email Id</th>
    <th>Passing</th>
    <th>Marks</th>
    <th>Class</th>
    <th>Gender</th>
    </tr>
    `;

    data.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td><img src="${student.image}" alt="${student.first_name}"></td>
            <td>${student.first_name} ${student.last_name}</td>
            <td>${student.email}</td>
            <td>${student.passing ? "Passed" : "Failed"}</td>
            <td>${student.marks}</td>
            <td>${student.class}</td>
            <td>${student.gender}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle search
function search() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.first_name.toLowerCase().includes(searchInput) ||
        student.last_name.toLowerCase().includes(searchInput) ||
        student.email.toLowerCase().includes(searchInput)
    );
    renderTable(filteredStudents);
}

// Function to sort by full name (A->Z)
function sortAZ() {
    const sortedStudents = students.slice().sort((a, b) => {
        const nameA = `${a.first_name} ${a.last_name}`;
        const nameB = `${b.first_name} ${b.last_name}`;
        return nameA.localeCompare(nameB);
    });
    renderTable(sortedStudents);
}

// Function to sort by full name (Z->A)
function sortZA() {
    const sortedStudents = students.slice().sort((a, b) => {
        const nameA = `${a.first_name} ${a.last_name}`;
        const nameB = `${b.first_name} ${b.last_name}`;
        return nameB.localeCompare(nameA);
    });
    renderTable(sortedStudents);
}

// Function to sort by marks
function sortByMarks() {
    const sortedStudents = students.slice().sort((a, b) => b.marks - a.marks);
    renderTable(sortedStudents);
}

// Function to sort by passing
function sortByPassing() {
    const passingStudents = students.filter(student => student.passing);
    renderTable(passingStudents);
}

// Function to sort by class
function sortByClass() {
    const sortedStudents = students.slice().sort((a, b) => a.class.localeCompare(b.class));
    renderTable(sortedStudents);
}

// Function to sort by gender
function sortByGender() {
    const maleStudents = students.filter(student => student.gender === "male");
    const femaleStudents = students.filter(student => student.gender === "female");

    renderTable(femaleStudents);
    renderTable(maleStudents);
   
}

// Helper function to render table inside another table
function renderTableInTable(parentTable, data) {
    const tableBody = document.createElement("tbody");

    data.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.first_name} ${student.last_name}</td>
            <td>${student.email}</td>
            <td>${student.passing ? "Passing" : "Failed"}</td>
            <td>${student.marks}</td>
            <td>${student.class}</td>
        `;
        tableBody.appendChild(row);
    });

    parentTable.appendChild(tableBody);
}

// Render default table
renderTable(students);