
/*
var userReg = [{
"name" :"Bitan Das",
"email":"bitandas96@gamil.com",
"password": "bitan123"

},
{

    "name" :"Bula Das",
    "email":"bula96@gamil.com",
    "password": "bula123"
    
},{

    "name" :"Tapan Kumar Das",
    "email":"tapan96@gamil.com",
    "password": "tapan123"
    
}

]
 
var fetchEmail = userReg[0].email;
var fetchPassword = userReg[0].password;

alert(fetchPassword);
alert(fetchEmail);
*/

/*
// arithmatic operation
var a="Bitan"
var b= "Das"
var c= a+" "+b
alert(c)
*/

/*
//comparison operator

var x = "10"
var y = 10

alert(x==y)
alert(x===y)
*/

/*
//type operator

var x = "Biatn"
var y = 10
var z = false

alert(typeof(x))
alert(typeof(y))
alert(typeof(z))
*/
/*
//determine array & object

var a = {"firstname" : "Bitan", "lastname" : "Das"}
var b = ["Biatn", "Das"]

//alert(Array.isArray(a))
//alert(typeof(a));
//alert(typeof(b));

var obj = a.firstname +" "+   a.lastname
alert(obj)
*/
var youTubeData = {
    "firstName" : "Aditya",
    "lastName" : "Kumar",
    "email" : "aditya@edwisor.com",
    "mobileNumber" :
    {

    "airtel" : 8588837942,
    "vodafone" : 7059453228
    },
    "userReg" :
     [
         {
        "name" :"Bitan Das",
        "email":"bitandas96@gamil.com",
        "password": "bitan123"
        
        },
        {
        
            "name" :"Bula Das",
            "email":"bula96@gamil.com",
            "password": "bula123"
            
        },{
        
            "name" :"Tapan Kumar Das",
            "email":"tapan96@gamil.com",
            "password": "tapan123"
            
        }
        
        ]
}

//alert(youTubeData.mobileNumber.vodafone)
alert(youTubeData.userReg[1].email)