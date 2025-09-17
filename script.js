// Simple JS for future enhancements
console.log("Civic Sense Reporting System Home Page Loaded");

// Example: Add interactivity later (like smooth scroll or button animations)


// Admin Panel JS

// Status update logic
const updateButtons = document.querySelectorAll(".updateBtn");

updateButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const select = row.querySelector(".updateStatus");
        const statusCell = row.querySelector(".status");
        statusCell.textContent = select.value;
        alert(`Status updated to "${select.value}" for Issue ID ${row.cells[0].textContent}`);
    });
});

// Search filter logic
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const table = document.getElementById("issuesTable");
const tbody = table.getElementsByTagName("tbody")[0];

function filterTable() {
    const searchText = searchInput.value.toLowerCase();
    const statusText = statusFilter.value;

    Array.from(tbody.rows).forEach(row => {
        const title = row.cells[1].textContent.toLowerCase();
        const submittedBy = row.cells[3].textContent.toLowerCase();
        const status = row.cells[5].textContent;

        const matchSearch = title.includes(searchText) || submittedBy.includes(searchText);
        const matchStatus = statusText === "all" || status === statusText;

        row.style.display = (matchSearch && matchStatus) ? "" : "none";
    });
}

searchInput.addEventListener("input", filterTable);
statusFilter.addEventListener("change", filterTable);


// Report Form JS

const reportForm = document.getElementById("reportForm");
const successMsg = document.getElementById("successMsg");

reportForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form data
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value;
    const image = document.getElementById("image").files[0];

    // Simple form validation
    if (!title || !description || !category || !location) {
        alert("Please fill all required fields!");
        return;
    }

    // For now, we just show success message
    successMsg.textContent = `Your issue "${title}" has been submitted successfully!`;

    // Clear form
    reportForm.reset();

    // Future: send data to backend server using fetch/AJAX
    console.log({
        title,
        description,
        category,
        location,
        image
    });
});
