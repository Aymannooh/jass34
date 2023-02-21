var usernameInput = document.getElementById('usernameInput');
var userEmailInput = document.getElementById('userEmailInput');
var userPasswordInput = document.getElementById('userPasswordInput');

console.log(usernameInput,userEmailInput,userPasswordInput);

var information = [];
if(localStorage.getItem("login2") == null)
{
    information =[];
}
else
{
    information = JSON.parse(localStorage.getItem("login2"));
}

function signUp()
{
    if(usernameValidation==true && usernameInput.value !='')
    
    var user =
    {
        name:usernameInput.value,
        email:userEmailInput.value,
        password:userPasswordInput.value
    }
    information.push(user)
    localStorage.setItem("login2",JSON.stringify (information));
}

function getLogin()
{
   var loginEmail =document.getElementById('loginEmail') 
   var loginPassword =document.getElementById('loginPassword') 
   var fillMsg =document.getElementById('fillMsg')
   var wrongMsg=document.getElementById('wrongMsg') 
   if(loginEmail=='' ||loginPassword=='')
   {
    fillMsg.classList.replace('d-none','d-block');
   }
   for ( var i=0;information.length;i++)
   {
    if(information[i].email.toLowerCase==loginEmail.value.toLowerCase && information[i].passwprd.toLowerCase== loginPassword.value.toLowerCase)
    {
        return true;
    }
    wrongMsg.classList.replace('d-none','d-block');
   }
}

userNameValidation ()
{
 if  ( regex.test (userNameInput.value==true && userNameInput.value!=null) )
 {
    username.classList.add(is-valid)
    username.classList.remove(is-invalid)
   psa.classList.replace(d-block,d-none)
   return true
 }
 else
 {
    username.classList.add(is-invalid)
    username.classList.remove(is-valid)
   psa.classList.replace(d-none,d-block)
 }
}

isExist()
{
    for( var i=0; i<item.length;i++)
    if(item[i].name==userNameinput.value || userNameinput.value="" )
}