let _KASform; // type: KASForm
let questionToAnswerMap = {};

const ongPageLoad = () => {
    KASClient.Form.initFormAsync(function (form, error){
        if(error != null){
            KASClient.App.showNativeErrorMessage("Error:getFormAsync:" + error);
            return;
        }
        _KASform = form;
    });
}

function getSelectedOption(element){
    for(var i=0; i<element.length; i++){
        if(element[i].checked === true){
            return element[i].value;
        }
    }
}

function validateText(text){
    if(text === null || text === ""){
        KASClient.App.showNativeErrorMessage("Please enter the valid information");
    }
    else{
        return text;
    }
}

var name = document.getElementById("name");
var number = document.getElementById("number");
var address = document.getElementById("address");
var gender = document.getElementsByName("")
_KASform.name = validateText(name).value;
_KASform.number= validateText(number).value;
_KASform.address= validateText(address).value;

function submitData (){
    
    questionToAnswerMap[0] = selectedTitle;
    questionToAnswerMap[1] = validateText(name.value);
    questionToAnswerMap[2] = validateText(number.value);
    questionToAnswerMap[3] = validateText(address.value);
    let selectedGender = getSelectedOption(gender);
    questionToAnswerMap[4] =selectedGender;

    console.log(questionToAnswerMap);
    //Submit form
    KASClient.Form.sumbitFormResponse(questionToAnswerMap, null, false, true, false);
}