/**
 * common shared function here
 * 
 */
// console.log('utility loaded');
// function getInputFieldValueById(){
//     // console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
    
// }

function getInputFieldValueById(id){
    const inpuValue = document.getElementById(id).value;
    return inpuValue;
}