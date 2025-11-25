document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
event.preventDefault();

const cashOut= getInputFieldValueById('input-cash-out');
const pinNumber = getInputFieldValueById('input-cash-out-pin')

if(isNaN(cashOut)){
    alert('Enter Amount')
    return;
}

if(pinNumber === 1234){
    const balance = getTextFieldValueById('account-balance')
    const newBalance = balance - cashOut;
    if(cashOut>balance){
        alert('Insufficient Fund to Cash Out!!!');
        return;
    }
    document.getElementById('account-balance').innerText = newBalance;

    // Add to transaction history
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.innerHTML=`
    <h4 class="text-2xl font-bold">Cash Out</h4>
    <p>${cashOut} cash out. New balance${newBalance}</p>
    `
    document.getElementById('transaction-container').appendChild(div);
}else{
    alert('Wrong pin nmber')
}
// console.log('Inside the clickhandler',cashOut,pinNumber);


});