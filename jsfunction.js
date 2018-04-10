
//multiply two numbers

var multiply = function(x , y){
     return (x*y)
}
var result = multiply(2 , 3)
alert(result)



//generate message

var msgGenerate = function(name , message){
var msg = "Hi,"+name+"\n"+"This message is for you by saynig that \n"+message
return msg
}
var result = msgGenerate("Bitan","Good Evening")
alert(result);



//login check

var users = [
    {
        "name" :"Bitan Das",
        "email":"bitandas96@gmail.com",
        "password": "bitan123"
   },
   {
       "name" :"Bula Das",
       "email":"bula96@gmail.com",
       "password": "bula123"
       
   },{
   
       "name" :"Tapan Kumar Das",
       "email":"tapan96@gmail.com",
       "password": "tapan123"   
   }
   ]
var checkLogin = function(email, password, allUsers){
var checkEmail = false
var checkPassword = false
 
for(check in allUsers){
    if(allUsers[check].email == email){
        if(allUsers[check].password == password){
            checkEmail = true;
            checkPassword = true;
            break;
        }else{
            checkEmail = true;
            checkPassword = false;
            break;
        }
    }else{
        checkEmail = false;
        
    }
} //end of for in loop
if(checkEmail == true && checkPassword == true){
    alert('Successfully Logged in')
}else if(checkEmail == true && checkPassword == false){
    alert('Password incorrect')
}else {
    alert('Email or password not exist')
}
}
var email = prompt("Enter email")
var password = prompt("Enter password")
checkLogin(email,password,users)




