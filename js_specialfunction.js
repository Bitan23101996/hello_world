
var myString = "My name is bitan das and i am a bad guy."
var myString2 = " Good morning bad guy"

var concatString = myString.concat(myString2); //concat two strings
alert(concatString)
var replaceString = myString.replace("bitan das","bikash kumar") //to replace any string
alert(replaceString)
var indexof = myString.indexOf("bitan") //calculate the index of the string
var sliceString = myString.slice(indexof, indexof + 5) //slice any string
alert(sliceString)

alert(myString.toLowerCase()) //convert to lower case
alert(myString.toUpperCase()) //convert to upper case

var splitString = myString.split(" ") //split a string into array
alert(splitString)
alert(Array.isArray(splitString))

var number = 8961743866    
var numberToString = number.toString() //convert number to string
//alert(numberToString)
alert(typeof(numberToString))


var number = "8961743866"    
var stringToNumber = Number(number) //convert string to number
//alert(numberToString)
alert(typeof(stringToNumber))


//push value into array
var arrayUsers = ["bitan", "kobita", "sayan", "tapan" ,"billa"]
arrayUsers.push("Dinesh")
alert(arrayUsers)


//pop value from an array

var arrayUsers = ["bitan", "kobita", "sayan", "tapan" ,"billa"]
arrayUsers.pop()
alert(arrayUsers)

//shift use

var arrayUsers = ["bitan", "kobita", "sayan", "tapan" ,"billa"]
arrayUsers.shift()
alert(arrayUsers)

//unshift use
var arrayUsers = ["bitan", "kobita", "sayan", "tapan" ,"billa"]
arrayUsers.unshift("bula")
alert(arrayUsers)


//deleting an element from array

var arrayUsers = ["bitan", "kobita", "sayan", "tapan" ,"billa"]
delete arrayUsers[4]  //delete 
arrayUsers[4]="poulami" //again add another element
alert(arrayUsers)



//merge two array

var array1 = ["bitan","tapan"]
var array2 = ["das","kumar"]
var finalArray = array1.concat(array2)
alert(finalArray)



//JS DATE


var today = new Date(Date.now());
alert(today)

var anyDay = new Date("1996-10-23")
alert(anyDay)
alert(anyDay.getDay())
alert(anyDay.getDate())
alert(anyDay.getFullYear())










