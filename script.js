const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    message.textContent = "Connecting to server...";

    try {
        const response = await fetch("http://127.0.0.1:8000/health");

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        if (data.status === "OK") {
            message.textContent = "Backend connected successfully!";
        } else {
            message.textContent = "Backend is not responding correctly.";
        }

    } catch (error) {
        console.error(error);
        message.textContent = "Could not connect to backend.";
    }
});