let robotCheck = document.getElementById("robotCheck");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let addBtn = document.getElementById("addBtn");
let tableBody = document.getElementById("tableBody");

// Enable form only after clicking "I AM NOT A ROBOT"
robotCheck.addEventListener("change", function () {
    if (robotCheck.checked) {
        nameInput.disabled = false;
        emailInput.disabled = false;
        addBtn.disabled = false;
    } else {
        nameInput.disabled = true;
        emailInput.disabled = true;
        addBtn.disabled = true;

        nameInput.value = "";
        emailInput.value = "";
    }
});

// Add data to table
addBtn.addEventListener("click", function () {
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();

    if (name === "" || email === "") {
        alert("Please enter both Name and Email.");
        return;
    }

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);

    // Delete selected row
    let deleteBtn = row.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {
        row.remove();
    });

    // Clear fields after adding data
    nameInput.value = "";
    emailInput.value = "";
});