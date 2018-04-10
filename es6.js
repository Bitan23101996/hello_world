//block scope problem

//problem 1
console.log(carPrice)
let carPrice = 250000



//problem 2

let x=1;
for(let x = 0; x < 10; x++){
console.log(x)
}
console.log("x =" +x)

//const problem 1

let oldUser = true;
const discount = 10;

if(oldUser == true){
    const discount = 20;
    console.log("Old user get this discount Rs"+discount);
}
console.log("Normal user get thsi disconut Rs"+discount);


//arrow function problem 1

//multiply two numbers

let multiply = (x , y) =>{
    return (x*y);
}
console.log(multiply(12 , 3));


//arrow function problem 2
//generate message

let user = (name,message)=>{
    let msg = "Hi,"+name+"\n"+"this is a small message for you by saying that "+message;
    return msg;
}
console.log(user("Bitan","Good Evening"));


//default parameter
 let multiply = (x=5,y=3)=>{
    console.log(x)
    console.log(y)
    
    return  (x*y)
 }
 console.log(multiply(3,15))

