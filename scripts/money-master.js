// selection state

const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');
const inputs = document.querySelectorAll('input');
const restBalance = document.getElementById('rest-balance');
const balanceElement = document.getElementById('balance-h3');
const saveInput = document.getElementById('save-input');





// function
function handleCalculate() {
    const foodCost = getInputValueById('food')
    const rentCost = getInputValueById('rent')
    const clothesCost = getInputValueById('clothes')

    //expenses calculation
    const totalExpense = foodCost + rentCost + clothesCost;
    setInnerTextById('total-expenses', totalExpense);

    // rest balance 
    const incomeAmount = getInputValueById('income');
    const restBalance = incomeAmount - totalExpense;
    setInnerTextById('rest-balance', restBalance);

    if (totalExpense >= incomeAmount) {
        alert(`cut your coat according your clothes`);
        balanceElement.style.color = 'red';
        saveBtn.disabled = true;
        saveInput.disabled = true;
    } else {
        balanceElement.style.color = 'green';
        saveBtn.disabled = false;
        saveInput.disabled = false;
    }
}

function handleSave() {
    const savingPercent = getInputValueById('save-input');
    const incomeAmount = getInputValueById('income');
    const savingAmount = percentCalculator(incomeAmount, savingPercent);
    const restBalance = getInnerTextById('rest-balance');

    if (savingPercent > 100) {
        alert(`you don't save 100% or above`);
        return;
    }
    if (savingAmount > restBalance) {
        alert(`you don't have enough balance for saving. saving-amount: ${savingAmount}`);
        return;
    }
    setInnerTextById('saving-amount', savingAmount);

    const remainingBalance = restBalance - savingAmount;

    setInnerTextById('remaining-balance', remainingBalance);

}


function handleReset() {
    inputs.forEach(input => input.value = '');
    resetAll('total-expenses');
    resetAll('rest-balance');
    resetAll('saving-amount');
    resetAll('remaining-balance');
}



// add event listener
calculateBtn.addEventListener('click', handleCalculate);
saveBtn.addEventListener('click', handleSave);
resetBtn.addEventListener('click', handleReset);

