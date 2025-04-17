function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const responseDiv = document.getElementById('formResponse');

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    // If validation passes, show a success message
    responseDiv.innerHTML = "Thank you, " + name + "! Your message has been sent.";
    document.getElementById('contactForm').reset(); // Reset the form
    return false; // Prevent form submission for demonstration purposes
}