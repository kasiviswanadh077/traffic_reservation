document.getElementById('search-booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const bookingId = document.getElementById('booking-id').value;
    alert(`Searching for booking ID: ${bookingId}`);
    // Implement further logic to search for booking, such as API calls
});
