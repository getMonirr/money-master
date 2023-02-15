// selection state

const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');
const inputs = document.querySelectorAll('input');





// function
function handleCalculate() {
    const foodCost = getInputValueById('food')
    const rentCost = getInputValueById('rent')
    const clothesCost = getInputValueById('clothes')

    //expenses calculation
    const totalExpense = foodCost + rentCost + clothesCost;
    setInnerTextById('total-expenses',totalExpense);

    // rest balance 
    const incomeAmount = getInputValueById('income');
    const restBalance = incomeAmount - totalExpense;
    setInnerTextById('rest-balance',restBalance);

}

function handleSave() {
    const savingPercent = getInputValueById('save-input');
    const incomeAmount = getInputValueById('income');
    const savingAmount = percentCalculator(incomeAmount,savingPercent);

    setInnerTextById('saving-amount',savingAmount);

    const restBalance = getInnerTextById('rest-balance');
    const remainingBalance = restBalance - savingAmount;

    setInnerTextById('remaining-balance',remainingBalance);
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
saveBtn.addEventListener('click',handleSave);
resetBtn.addEventListener('click',handleReset);

