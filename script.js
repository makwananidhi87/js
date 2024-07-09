document.addEventListener("DOMContentLoaded", () => {
  const addForm = document.getElementById("AddForm");
  const editForm = document.getElementById("EditForm");
  const studentTable = document.querySelector(".student-table");

  let students = [];
  let editIndex = -1;

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newStudent = {
      name: addForm.studentADDname.value,
      age: addForm.studentADDage.value,
      email: addForm.studentADDemail.value,
      mobile: addForm.studentADDnumber.value,
      address: addForm.studentADDaddress.value,
    };
    students.push(newStudent);
    addForm.reset();
    renderTable();
  });

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const updateStudent = {
      name: editForm.studentEDITname.value,
      age: editForm.studentEDITage.value,
      email: editForm.studentEDITemail.value,
      mobile: editForm.studentEDITnumber.value,
      address: editForm.studentEDITaddress.value,
    };
    students[editIndex] = updateStudent;
    editIndex = -1;
    editForm.reset();
    renderTable();
  });

  const renderTable = () => {
    const tableHTML = `
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${students
                      .map(
                        (student, index) => `
                        <tr>
                            <td>${student.name}</td>
                            <td>${student.age}</td>
                            <td>${student.email}</td>
                            <td>${student.mobile}</td>
                            <td>${student.address}</td>
                            <td>
                                <button onclick='editStudent(${index})'>Edit</button>
                                <button onclick='deleteStudent(${index})'>Delete</button>
                            </td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
        `;
    studentTable.innerHTML = tableHTML;
  };

  window.editStudent = (index) => {
    editIndex = index;
    const student = students[index];

    editForm.studentEDITname.value = student.name;
    editForm.studentEDITage.value = student.age;
    editForm.studentEDITemail.value = student.email;
    editForm.studentEDITnumber.value = student.mobile;
    editForm.studentEDITaddress.value = student.address;
  };

  window.deleteStudent = (index) => {
    students.splice(index, 1);
    renderTable();
  };
});
