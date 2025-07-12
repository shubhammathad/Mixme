document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.getElementById("contact-section");

  // Inject Contact Form into the placeholder div
  

  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Grab values and trim whitespace
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form input
    if (name === "" || address === "" || message.length < 10) {
      formMessage.textContent = "Please fill all fields correctly. Message must be at least 10 characters.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Form submitted successfully!";
      formMessage.style.color = "green";
      form.reset();
    }
  });
});
