// Select elements
const submitBtn = document.querySelector("#submit");
const existingBtn = document.querySelector("#existing");
const checkbox = document.querySelector("#checkbox");

// Check localStorage on page load
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
}

// Submit button click
submitBtn.addEventListener("click", function () {

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }
});

// Existing user login
existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
});
