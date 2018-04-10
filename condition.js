
//program about topper or not

var topper = false;
//get  input from user
var numberObtain = window.prompt("Enter the marks:");


if(numberObtain == null || numberObtain == undefined || numberObtain ==''){
    alert("Give proper input");
}else if(numberObtain < 0 || numberObtain > 100){
    alert("Give input between 0 to 100");
}else{
    numberObtain = Number(numberObtain);
    var totalNumber = 100;
    var checkNumber = 100 * (numberObtain / totalNumber);
    
    //use of ternary operator
    topper = (checkNumber > 90 )?  true :  false 
        
    alert(topper);
} 
//end of program




// check your grade

var grade = window.prompt("Enter your grade in the exam");
var result;


switch(grade){
    case 'A':
    result = "Excelent";
    break;
    case 'B':
    result = "Good";
    break;
    case 'C':
    result = "Just Pass";
    break;
    case 'D':
    result = "Fail";
    break;
    default:
    result = "Give proper input";
}
alert(result);
//end of the switch


//for loop use

var familyMember = ["Swarajini","Tapan","Bula","Titir","Bitan"];
alert(familyMember.length);
for(var i = 0; i < familyMember.length; i++){

    
    alert(familyMember[i]);
}


//find your friend


var findFriend = window.prompt("Enter your friend's name");
var friendList = ["Tapan", "Bula", "Bitan", "Titir", "Swarajini"];

for(var i=0;i<friendList.length;i++){
    if(friendList[i]==findFriend){
        alert("Your friend is found at position "+Number(i+1));
        braek;
    }else{
       //nothing to show
       
    }

}



//use of for/in loop

var userDetails =[  {
    name :"Bitan Das",
    email:"bitandas96@gamil.com",
    password: "bitan123"
},
{
    name :"Tapan Das",
    email:"tapan@gamil.com",
    password: "tapan123"
}

]
for(x in userDetails){
    alert(userDetails[x].email);
    
}










