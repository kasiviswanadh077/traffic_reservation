document.addEventListener('DOMContentLoaded', function() {
    const vehicleForm = document.getElementById('vehicle-form');

    // Pre-fill demo data in form
    document.getElementById('vehicle-type').value = "Car";
    document.getElementById('vehicle-reg').value = "AB123CD";

    // Form submission logic
    vehicleForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from actually submitting

        // You can add validation here if needed, but for demo, we'll assume it's valid

        alert('Vehicle details saved!'); // Just for demonstration

        // Redirect to parking selection page
        window.location.href = 'select-parking.html'; // Ensure this is correct path
    });
});
