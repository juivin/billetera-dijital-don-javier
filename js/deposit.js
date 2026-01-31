$(document).ready(function() {
    let currentBalance = parseFloat(localStorage.getItem('balance')) || 1250000.00;

    function updateBalanceDisplay() {
        // Formato: $ 1.250.000
        const formatted = currentBalance.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
        $('#currentBalance').text(formatted);
    }
    updateBalanceDisplay();

    $('#depositForm').on('submit', function(e) {
        e.preventDefault();
        const amount = parseFloat($('#depositAmount').val());
        if (amount > 0) {
            currentBalance += amount;
            localStorage.setItem('balance', currentBalance);
            
            // Guardar transacción
            let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
            transactions.unshift({
                type: 'deposit',
                amount: amount,
                description: $('#depositDescription').val() || 'Depósito',
                date: new Date().toISOString()
            });
            localStorage.setItem('transactions', JSON.stringify(transactions));

            window.location.href = 'menu.html';
        }
    });
});