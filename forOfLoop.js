
//example of 'for of' loop only applicable Array not for object

let customers = [{
    "custId" : "bitandas1",
    "dob": "23-10-1996"

},
{
    "custId": "bula123",
    "dob": "10-01-1993"
}]
for(customer of customers){
   
    console.log(customer)
}    

//'for in' loop in object


let userDeatils = {

firstName : "Bitan",
lastName : "Das",
email : "bitan.@gmail.com",
password : "bitan123"
}
for(user in userDeatils){
    console.log(user+" :"+userDeatils[user])
    
}