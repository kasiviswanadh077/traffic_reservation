document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const paymentMethod = document.getElementById('payment-method').value;
    
    if (paymentMethod) {
        alert('Payment completed successfully using ' + paymentMethod);
        window.location.href = 'reserve-slot.html'; // Redirect back to confirmation page
    }
});
