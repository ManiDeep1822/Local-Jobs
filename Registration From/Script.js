document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        // Get form values
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const mobileNumber = document.getElementById("Number").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const rePassword = document.querySelectorAll("input[type='password']")[1].value.trim();

        // Error array
        let errors = [];

        // Check if all fields are filled
        if (!fname) {
            errors.push("First Name is required");
        }

        if (!lname) {
            errors.push("Last Name is required");
        }

        if (!mobileNumber) {
            errors.push("Mobile Number is required");
        } else if (!/^\d{10}$/.test(mobileNumber)) {
            errors.push("Mobile Number must be 10 digits");
        }

        if (!email) {
            errors.push("Email is required");
        }

        if (!password) {
            errors.push("Password is required");
        }

        if (!rePassword) {
            errors.push("Re-Enter Password is required");
        }

        if (password !== rePassword) {
            errors.push("Passwords do not match");
        }

        // If there are errors, prevent form submission and alert errors
        if (errors.length > 0) {
            event.preventDefault();
            alert(errors.join("\n"));
        }
    });
});
