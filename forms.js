document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('id-information-form').addEventListener('submit', function(event) {
        
        var form = event.target;
        var inputs = form.querySelectorAll('input[required]');
        var isEmpty = false;
        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isEmpty = true;
            }
            
        });

        var form = event.target;
        var firstNameInput = form.querySelector('#Firstname');
        var lastNameInput = form.querySelector('#Lastname');
        var collegeInput = form.querySelector('#College');
        var emergencyNameInput = form.querySelector('#Emergency-name');

        var firstNameValue = firstNameInput.value.trim();
        var lastNameValue = lastNameInput.value.trim();
        var collegeValue = collegeInput.value.trim();
        var emergencyNameValue = emergencyNameInput.value.trim();
        var nameRegex = /^[A-Za-zñÑ\.\-\s]+$/;// Regular expression to match alphabetic characters only

        // Check if first name contains only alphabetic characters
        if (!nameRegex.test(firstNameValue)) {
            alert("First name should only contain alphabetic characters.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Check if last name contains only alphabetic characters
        if (!nameRegex.test(lastNameValue)) {
            alert("Last name should only contain alphabetic characters.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!nameRegex.test(collegeValue)) {
            alert("College should only contain alphabetic characters, spaces, dots, hyphens, and enye (ñ).");
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!nameRegex.test(emergencyNameValue)) {
            alert("Emergency name should only contain alphabetic characters, spaces, dots, hyphens, and enye (ñ).");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Display confirmation prompt only if form fields are not empty
        if (!isEmpty) {
            var confirmed = confirm("Are you sure you entered the correct information?");
            if (confirmed) {
                alert("Thank you for filling out the form. Please wait for it to be approved by the Director. An email will be sent for further instructions.");
                form.submit();
                
            }
        }
    });
});

