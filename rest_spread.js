

//rest use in es6 problem 1

let userDeatils = []

let userIdAddr = (userID,...userAddress)=>{

 let userDet = {userID:userID, userAddress: userAddress}

 userDeatils.push(userDet)
 console.log(userDeatils)
 return userIdAddr

}


let firstAdddr = {
    "village":"West Burikhali",
    "po": "Burikhali",
    "area":"Bauria",
    "dist":"Howrah",
    "state":"WB",
    "conutry":"India"
}

let secondAdddr = {
    "village":"East Kolkata",
    "po": "Lachung",
    "area":"Kestopur",
    "dist":"Hoogly",
    "state":"WB",
    "conutry":"India"
}
let thirdAdddr = {
    "village":"Uluberia",
    "po": "uluberia",
    "area":"howrah",
    "dist":"Hoogly",
    "state":"WB",
    "conutry":"India"
}

userIdAddr("bitan123",firstAdddr,secondAdddr,thirdAdddr) //CSV(comma seperated value)




//rest use in es6 problem 2

let peopleToInvite = []

let peopleDetails = (...people) => {
    
  let newPeople = people
   peopleToInvite = peopleToInvite.concat(newPeople)
  
  console.log(peopleToInvite)
  return peopleDetails
  

}


peopleDetails("Bitan","Tapan","Bula")
peopleDetails("Swapan","Mala","Misti")



//spread use in es6 problem 1

let addition = (x,y,z)=>{
    return x+y+z
}
let additionArray = [1,2,3]
console.log(addition(...additionArray))




//spread use in es6 problem 2 (concat 2 arrays)

let a = [10,20]
let b = [30,40]
let c = [...a,...b]
console.log(c)







