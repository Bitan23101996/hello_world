
//template literial example 1
let aBigParagraph  = `Hii everyone myself Bitan Das. 
I am a bad guy . I love to play footbal
instead of cricket`
console.log(aBigParagraph)


//template literial example 2

let a = "I am a boy"
let b = "My Name is Bitan Das"

let c = `${a} and ${b}` //main thing to notice

console.log(c);


//template literial example 3

let welcomeMessaage = (name,message) =>{
    let msg = `Hello ${name}\n
    Welcome to you and ${message}`
    return msg
} 
console.log(welcomeMessaage("Bitan","Good Night"))


//template literial example 4(same as above but 3 parameters use)

let welcomeMessaage = (fisrtName,lastName,message) =>{
    let msg = `Hello ${fisrtName+" "+lastName}\n
    \${Welcome to you} and ${message}`  //notice here \$
    return msg
} 
console.log(welcomeMessaage("Bitan","Das","Good Night"))