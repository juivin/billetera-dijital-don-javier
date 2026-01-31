$(document).ready(function() {
    let currentBalance = parseFloat(localStorage.getItem('balance')) || 1250000.00;
    
    function updateBalanceDisplay() {
        const formatted = currentBalance.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
        $('#currentBalance').text(formatted);
    }
    updateBalanceDisplay();

    $('#sendMoneyForm').on('submit', function(e) {
        e.preventDefault();
        const amount = parseFloat($('#sendAmount').val());
        const contact = $('#selectedContact').val();

        if (amount > 0 && amount <= currentBalance && contact) {
            currentBalance -= amount;
            localStorage.setItem('balance', currentBalance);
            
            let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
            transactions.unshift({
                type: 'transfer',
                amount: -amount,
                description: $('#sendDescription').val(),
                recipient: contact,
                date: new Date().toISOString()
            });
            localStorage.setItem('transactions', JSON.stringify(transactions));

            window.location.href = 'menu.html';
        } else {
            alert("Verifique el monto y el contacto seleccionado.");
        }
    });
});