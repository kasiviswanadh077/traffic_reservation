document.getElementById('parking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedSlot = document.getElementById('parking-slot').value;
    
    if (selectedSlot !== "slot3") {
        alert('Parking slot reserved successfully!');
        window.location.href = 'reserve-slot.html'; // Proceed to next page
    } else {
        alert('Sorry, this parking slot is occupied. Please select another slot.');
    }
});
