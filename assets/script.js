const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputTel = document.getElementById("tel");
const inputCell1 = document.getElementById("cell1");
const inputCell2 = document.getElementById("cell2");
const inputCell3 = document.getElementById("cell3");
const inputCell4 = document.getElementById("cell4");
const labelCell1 = document.getElementById("labelcell1");
const labelCell2 = document.getElementById("labelcell2");
const labelCell3 = document.getElementById("labelcell3");
const labelCell4 = document.getElementById("labelcell4");
const form = document.getElementById("form-otpravok");

function SendMessage() {

inputName.style.borderColor = (inputName.value == "") ? 'red' : 'black' ;
inputTel.style.borderColor = (inputTel.value == "") ? "red" : "black" ;
inputEmail.style.borderColor = (inputEmail.value == "") ? "red" : "black" ;
labelCell4.style.filter = (inputCell4.checked == false) ? "hue-rotate(236deg) saturate(2.5)" : "none" ;
if (inputCell1.checked == true || inputCell2.checked == true || inputCell3.checked == true ){
    labelCell1.style.filter = "none";
    labelCell2.style.filter = "none";
    labelCell3.style.filter = "none";
}else{
    
    labelCell1.style.filter = "hue-rotate(236deg) saturate(2.5)";
    labelCell2.style.filter = "hue-rotate(236deg) saturate(2.5)";
    labelCell3.style.filter = "hue-rotate(236deg) saturate(2.5)";
}


}