$(document).ready(function() {
    // 1. Obtener saldo y transacciones
    let currentBalance = parseFloat(localStorage.getItem('balance')) || 1250000.00;
    let allTransactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // 2. Mostrar saldo arriba
    const format = (num) => num.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    $('#currentBalance').text(format(currentBalance));

    // 3. Renderizar la tabla
    const tbody = $('#transactionsTableBody');
    tbody.empty(); // Limpiar tabla

    if (allTransactions.length === 0) {
        tbody.append('<tr><td colspan="6" class="text-center py-4 text-muted">No hay movimientos registrados</td></tr>');
    } else {
        allTransactions.forEach(t => {
            const row = `
                <tr>
                    <td class="ps-4 text-muted small">${new Date(t.date).toLocaleString()}</td>
                    <td><span class="badge ${t.amount > 0 ? 'bg-success' : 'bg-danger'}">${t.type.toUpperCase()}</span></td>
                    <td>${t.description}</td>
                    <td>${t.recipient || 'Don Javier'}</td>
                    <td class="text-end fw-bold ${t.amount > 0 ? 'text-success' : 'text-danger'}">
                        ${t.amount > 0 ? '+' : ''}${format(t.amount)}
                    </td>
                    <td class="text-center">Completado</td>
                </tr>`;
            tbody.append(row);
        });
    }
});