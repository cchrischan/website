document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('id-information-form').addEventListener('submit', function(event) {
        
        event.preventDefault();
    
        var form = event.target;
        var inputs = form.querySelectorAll('input[required]');
        var isEmpty = false;
        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isEmpty = true;
            }
        });

        // Display confirmation prompt only if form fields are not empty
        if (!isEmpty) {
            var confirmed = confirm("Are you sure you entered the correct information?");
            if (confirmed) {
                // If confirmed, submit the form
                form.submit();
                alert("Thank you for filling out the form. Please wait for it to be approved by the Director. An email will be sent for further instructions.");
                 window.location.href = "forms.html"; 
            }
        }
    });
});

