document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('signup-form');
    const pwd = document.getElementById('pwd');
    const pwd2 = document.getElementById('pwd2');
    const pwdErrorSpan = pwd2.nextElementSibling;

    const validateField = (field) => {
        const errorSpan = field.nextElementSibling;
        if (field.validity.patternMismatch) {
            errorSpan.textContent = "Incorrect format";
            errorSpan.style.color = "red";
        } else {
            errorSpan.textContent = "";
        }
    };

    form.addEventListener('submit', function(event) {
        if (pwd.value !== pwd2.value) {
            event.preventDefault();
            pwdErrorSpan.textContent = "Passwords do not match";
            pwdErrorSpan.style.color = "red";
        } else {
            pwdErrorSpan.textContent = "";
        }
    });

    const checkPasswordsMatch = function() {
        if (pwd.value !== pwd2.value) {
            pwdErrorSpan.textContent = "Passwords do not match";
            pwdErrorSpan.style.color = "red";
        } else {
            pwdErrorSpan.textContent = "";
        }
    };

    pwd2.addEventListener('input', checkPasswordsMatch);
    pwd.addEventListener('input', checkPasswordsMatch);

    document.querySelectorAll('input[pattern]').forEach(input => {
        input.addEventListener('input', function() {
            if (input.value.length === input.maxLength) {
                validateField(input);
            } else {
                input.nextElementSibling.textContent = "";
            }
        });
    });
});
