var attendees = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "sam",
        age: 30,
        gender: "male"
    }, {
        name: "suzy",
        age: 4,
        gender: "female"
    }
]
function if18 (attendees){
    for (i = 0; i < attendees.length; i++){
        if (attendees[i].age >= 18){
            console.log("is old enough")
        }else{
            console.log("is not old enough")
        }
    }
}

function if18PlusName (attendees){
    for (i = 0; i < attendees.length; i++){
        if (attendees[i].age >= 18){
            console.log(`${attendees[i].name} is old enough to see Mad Max`)
        } else {
            console.log(`${attendees[i].name} is not old enough to see Mad max`)
        }   
    }
}
function gender (attendees){
    for (i = 0; i < attendees.length; i++){
        if (attendees[i].gender === "male" && attendees[i].age >= 18){
            console.log (`${attendees[i].name} is old enough to see Mad Max let him in`)
        } else if (attendees[i].gender === "female" && attendees[i].age >= 18){
        console.log (`${attendees[i].name} is old enough to see Mad Max let her in`)
        } else if (attendees[i].gender === "male" && attendees[i].age < 18){
        console.log (`${attendees[i].name} is not old enough to see Mad Max do not  let him in`)
        } else {
            console.log (`${attendees[i].name} is not old enough to see Mad Max do not let her in`)
        }
    }
}
console.log( if18 (attendees))
console.log( if18PlusName (attendees))
console.log( gender (attendees))

for (i = 0; i < 101; i++){
    if([i] % 2 != 0){
        console.log([i] + " odd ")
    } else {
        console.log([i] + " even ")
    }
}



