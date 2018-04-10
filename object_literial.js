
//example of object literial problem 1

let firstName = "Bitan"
let lastName = "Das"

let fullName ={firstName,lastName}
console.log(fullName)


//example of object literial problem 2(within object calculation)


let actualPrice = 200
let discountPrice = 10

let productPrice = {  //object
    actualPrice,
    discountPrice,
    productFinalPrice(){ //this is called method not function as it is within the object
        return (actualPrice-((actualPrice * discountPrice)/100))
    }
}
console.log(productPrice)
console.log(productPrice.productFinalPrice())




//example of object literial problem 3(within object calculation print fullname)


let firstName = "Bitan"
let lastName = "Das"

let fullName = {
    firstName,
    lastName,
    fullNameCalculate(){
        return firstName +" "+lastName
    }
}
console.log("Your name is:"+fullName.fullNameCalculate())

//example of object literial problem 4

let keyIamStrong = "some key"
let valueIamStrong = "some value"

let objectKeyValue = {
    
    //keyIamStrong : valueIamStrong    //output= keyIamStrong : some value
    [keyIamStrong] : valueIamStrong    //output= some key : some value
}
console.log(objectKeyValue);
