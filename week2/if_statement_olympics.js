if(5 > 3){
    console.log("is greater then")
}

var loc = 3;

if(loc === 3){
    console.log("is the legth")
}

var cat = 3;
var dog = 5;

if("cat"==="dog"){
    console.log("the same")
} else {
    console.log("not the same")
}

var person = {
    fristName: "Bobby",
    age: 12
};

if(person.age >= 18){
    console.log(`${person.fristName} is allowed to go to the movies`)
} else {
    console.log(`${person.fristName} is not old enough to go to the movies`)
}

if(person.fristName.charAt(0) ===("B" || "b") && person.age >= 18){
    console.log(`${person.fristName} is allowed to go to the movie`)
} 

if(person.fristName.charAt(0) ===( "B" || "b") && person.age >=18){
    console.log(`${person.fristName} is allowed to go to the movie`)
} else {
    console.log(`${person.fristName} first initial is not B or is not old enough to attend the movie`)
}

if(1==="1") {
    console.log("strict")
} else if (1== "1") {
    console.log("abstract")
} else {
    console.log("not equal at all")
}
if ((1 <= 2) && 2 === 4){
    console.log ("yes")
}
if(typeof dog === "string"){
    console.log("is a string")
}
