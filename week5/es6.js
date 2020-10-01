// ES6 # 1
{
    const name = "John"
    const age = 101
    
    function runForLoop(pets) {
      let petObjects = []
      for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
       let name;
        if (pets[i] === "cat") {
          name = "fluffy"
        } else {
          name = "spot"
        }
       
        console.log("pet name: ", name)
        pet.name =  name
        petObjects.push(pet)
      }
     
      console.log("man name: ", name)
      return petObjects
    }
    
    runForLoop(["cat", "dog"],)
    }
   
   
   
    const carrots = ["bright orange", "ripe", "rotten"]
    
    const mapVegetables = (arr) => arr.map((carrot) => ({type: "carrot", name: carrot}));
    
    console.log(mapVegetables(carrots)," #2 ");
   
   
   
     const people = [
        {
            name: "Princess Peach",
            friendly: false
        },
        {
            name: "Luigi",
            friendly: true
        },
        {
            name: "Mario",
            friendly: true
        },
        {
            name: "Bowser",
            friendly: false
        }
    ]
   
    const filterForFriendly = (arr) => arr.filter((person) => person.friendly)
    
    console.log(filterForFriendly(people), " #3 ");
  
  
  

    const doMathSum = (a, b) =>  a + b
    
    const produceProduct = (a, b) => a * b
   
    console.log(produceProduct(5, 5), "#4")
    
    
    
    {
     function printString(firstName = "Jane", lastName = "Doe", age = 100) {
         return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
     }
    
     console.log(printString(), "#5")
    } 
   
   
   
    let printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
    
    console.log(printString(), "#6")
   
   
   
    const animals = [
        {
            type: "dog",
            name: "Theodore"
        },
        {
            type: "cat",
            name: "Whiskers"
        },
        {
            type: "pig",
            name: "Piglette"
        },
        {
            type: "dog",
            name: "Sparky"
        }
    ];
    
    const filterForDogs = (arr) => arr.filter(animal => (animal.type === "dog") ? true : false)
   
    console.log(filterForDogs(animals), "#7")
    
    
    
    let greeting = (location = "Hawaii", name = "Janice") => `Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
   
    console.log(greeting(), "#8")
   
    
    
    
    
    
    