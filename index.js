// Sample JavaScript: Simple alert on form submission
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out, I’ll get back to you soon!");
});

// Theme toggle example
const themeButton = document.createElement("button");
themeButton.textContent = "Toggle Dark Mode";
document.body.insertBefore(themeButton, document.body.firstChild);

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});
