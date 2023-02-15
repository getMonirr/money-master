// get input value
function getInputValueById(id) {
    const targetInput = document.getElementById(id);
    return parseFloat(targetInput.value);
}

function getInnerTextById(id){
    const targetElement = document.getElementById(id);
    return parseFloat(targetElement.innerText);
}

// set innerText 
function setInnerTextById(id, value) {
    const targetElement = document.getElementById(id);
    targetElement.innerText = value;
} 

// percent calculator
function percentCalculator(price,percent){
    return ((price * (percent / 100)));
}

// reset all input and  innerText 
function resetAll(id){
    const targetElement = document.getElementById(id);
    if(targetElement.nodeName === 'INPUT'){
        targetElement.value = '';
    }
    targetElement.innerText = 0;
}
