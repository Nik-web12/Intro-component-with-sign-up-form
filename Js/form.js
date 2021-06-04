
const form = document.querySelector('#form');
const firstName = document.querySelector('#fname')
const lastName = document.querySelector('#lname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')




form.addEventListener('submit', (e)=>{
     e.preventDefault();
     validation();
})


function showSuccessMsg(firstNameVal){
    let formItem = document.getElementsByClassName('form__item');
    let count = formItem.length-1;
    // console.log(formItem)
    for(let i = 0 ; i < formItem.length ; i++){
        if(formItem[i].classList.contains('success')){
                let successRate = 0 + i;
                // console.log(i)
                sendData(firstNameVal, successRate , count);
        }
        else{
            return false;
        }
    }
}

const sendData = (firstNameVal,successRate,count) =>{
    if(successRate == count){
        // alert(`${firstNameVal} login successful`)
        swal("Welcome! " +firstNameVal, "Registration successful", "success");
    }
}

const validation = () =>{
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

// ===================== First-Name ========================== \\
    if(firstNameVal === ""){
        setError(firstName,'Firstname Cannot be empty');
    }

    else if(firstNameVal.length <= 2){
        setError(firstName,'Firstname must be  3 character');
    }
    else{
        setSuccess(firstName);
    }
// ===================== Last-Name ========================== \\
    if(lastNameVal === ""){
        setError(lastName,'Lastname Cannot be empty')
    }
    else{
        setSuccess(lastName);
    }
// =================== Email-Address ======================== \\
    if(emailVal === ""){
        setError(email,'Email Cannot be empty')
    }
    else if(emailVal.indexOf('@')<=0){
        setError(email, "Invalid '@' position" )
    }
    else if(emailVal.charAt(emailVal.length - 4) !== '.'){
        setError(email, "Looks like this is not an email" )
    }
    else{
        setSuccess(email);
    }
// ===================== Password ========================== \\  
    if(passwordVal === ""){
        setError(password,'Password Cannot be empty')
    }
    else if(passwordVal.length <=5){
        setError(password,'Password must be at least 6 characters')
    }
    else if(passwordVal.length > 15){
        setError(password,'Password length should not be greater than 15')
    }
    else{
        setSuccess(password);
    }
// ============= Successful msg at the end ================= \\ 
    showSuccessMsg(firstNameVal); 
}

// =================== Error-msg ============================\\
function setError(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerHTML = message;

    formControl.classList.add('error');
    formControl.classList.remove('success');
}

// =================== Success-msg ============================\\
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.classList.add('success');
    formControl.classList.remove('error');
}