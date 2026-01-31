$(document).ready(function() {
    // Leer el saldo del localStorage
    let currentBalance = parseFloat(localStorage.getItem('balance')) || 1250000.00;
    
    // Formatear y mostrar
    const formatted = currentBalance.toLocaleString('es-CL', { 
        style: 'currency', 
        currency: 'CLP' 
    });
    
    $('#currentBalance').text(formatted);
});