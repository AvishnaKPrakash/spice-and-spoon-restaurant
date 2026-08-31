const form = document.getElementById("reservationForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    // Check required fields
    if (name === "" || email === "" || date === "" || guests === "") {
        message.textContent = "Please fill in all required fields.";
        return;
    }

    // Display confirmation
    message.textContent =
        "Thank you, " + name + "! Your table has been reserved successfully.";

    // Clear the form
    form.reset();
});