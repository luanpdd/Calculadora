document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        const fixedCosts = parseFloat(document.getElementById('fixedCosts').value);
        const hourRate = parseFloat(document.getElementById('hourRate').value);
        const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
        const profitMargin = parseFloat(document.getElementById('profitMargin').value);

        const totalCost = fixedCosts + (hourRate * hoursWorked);
        const profit = totalCost * (profitMargin / 100);
        const finalPrice = totalCost + profit;

        const resultElement = document.getElementById('result');
        resultElement.textContent = `Preço Final do Serviço: R$ ${finalPrice.toFixed(2)}`;
        resultElement.classList.remove('hidden');
        resultElement.classList.add('success');
    }
});

function validateForm() {
    let isValid = true;

    isValid = validateField('fixedCosts', 'fixedCostsError') && isValid;
    isValid = validateField('hourRate', 'hourRateError') && isValid;
    isValid = validateField('hoursWorked', 'hoursWorkedError') && isValid;
    isValid = validateField('profitMargin', 'profitMarginError') && isValid;

    return isValid;
}

function validateField(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);

    if (field.value === '' || isNaN(field.value) || parseFloat(field.value) <= 0) {
        field.classList.add('invalid');
        field.classList.remove('valid');
        errorElement.style.display = 'block';
        if (field.value === '' || isNaN(field.value)) {
            errorElement.textContent = 'Por favor, insira um valor numérico.';
        } else if (parseFloat(field.value) <= 0) {
            errorElement.textContent = 'Por favor, insira um valor positivo.';
        }
        return false;
    } else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        errorElement.style.display = 'none';
        errorElement.textContent = '';
        return true;
    }
}

document.getElementById('fixedCosts').addEventListener('input', function() {
    validateField('fixedCosts', 'fixedCostsError');
});

document.getElementById('hourRate').addEventListener('input', function() {
    validateField('hourRate', 'hourRateError');
});

document.getElementById('hoursWorked').addEventListener('input', function() {
    validateField('hoursWorked', 'hoursWorkedError');
});

document.getElementById('profitMargin').addEventListener('input', function() {
    validateField('profitMargin', 'profitMarginError');
});
