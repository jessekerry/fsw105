function sum (num1, num2){
    return(num1 + num2)
}
var outcome = sum (58,23)
console.log(outcome)


function highest (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log(num1)
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    } else {
        console.log(num3)
    } 
}
highest(14, 155, 88)


function singles (num){
    if (num %2 === 0){
        console.log ("even")
    } else {
        console.log ("odd")
    }    
}
singles(21)

var val = "abcdefghijklmnopqrst";
var bear = "ABCDEFGHIJKLMNOPQRSTU";

function jack (info){
    if (info.length <= 20){
        console.log((info) + (info))
    } else {
        console.log ((info).slice(0, info.length / 2))
    }
} 
jack(val)

jack(bear)