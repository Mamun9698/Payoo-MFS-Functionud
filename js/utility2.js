function getInputFieldValueById(id){
 const inputValue = document.getElementById(id).value;
 const inputNumber = parseFloat(inputValue)
//  console.log(id,inputValue,inputNumber);
 return inputNumber;

};

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionByID(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('trx-history').classList.add('hidden');

    // Show the section with provided ID as paramiter

    document.getElementById(id).classList.remove('hidden');
}