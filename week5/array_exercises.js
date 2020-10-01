    {
    function fiveAndGreaterOnly(arr) {
        const result = arr.filter(function (num) {
            if (num >=5) {
                return true;
            };
        });
        return result;
    };
    
    console.log(" A 1 ", fiveAndGreaterOnly([3, 6, 8, 2]))
    }
    
    
    
    {
    function evensOnly(arr) {
        const outcome = arr.filter(function(num){
            if (num % 2 == 0) {
                return true;
            };
        });
        return outcome
    }
   
    console.log(" A 2 ", evensOnly([3, 6, 8, 2]))
    }
    
    
    
    {
        let people = [
        {
            name: "Angelina Jolie",
            age: 80
        }, {
            name: "Eric Jones",
            age: 2
        }, {
            name: "Paris Hilton",
            age: 5
        }, {
            name: "Kayne West",
            age: 16
        }, {
            name: "Bob Ziroll",
            age: 100
        }
    ]
   
    function ofAge(people){
        return people.age >= 17
    }
   
    eligibility = people.filter(ofAge);
    
    // console.log(people)
    
    console.log(" A extra credit ", eligibility)
    }
    
    
    
    {
        const arr = [2, 5, 100];
        const result = arr.map(function(num){
            return  num * 2
        })
      
        // console.log(arr)
       
        console.log(" B 1 ", result)
    
    
    }
    
    {
        const arr = [2, 5, 100];

        const result = arr.map(function(num){
            return     num.toString()
        })
       
        // console.log(arr)
       
        console.log(" B 2 ", result)
    }
    
    
    
    {
        const str = ["john", "jacob", "jinGleHeimer", "schmidt"];
       
        const toCapital = str => {
          const words = str;
          return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())};
        
          console.log(" B 3 ", toCapital(str))
        }
    
    
    
        {
        let people = [
            {
                name: "Angelina Jolie",
                age: 80
            }, {
                name: "Eric Jones",
                age: 2
            }, {
                name: "Paris Hilton",
                age: 5
            }, {
                name: "Kayne West",
                age: 16
            }, {
                name: "Bob Ziroll",
                age: 100
            }
        ]
        
        function namesOnly(arr) {
            const justNames = arr.map(function(arr) {
                return arr.name
            });
            return justNames
        };
       
        console.log(" B extra credit 1 ", namesOnly(people))
     
     
     
        function makeStrings(arr) {
         const allowed = arr.map((arr) => arr.age >= 17 ? (` ${arr.name} can go to the Matrix`) : (` ${arr.name} is underage!!`));
            return allowed
     }
      
     console.log(" B extra credit 2 ", makeStrings(people))
    
    }
    
    
    
    function totals(arr) {
        const endTotal = arr.reduce(function(final, num) {
            final = final + num;
            return final
        });
        return endTotal;
    }
    console.log(" C 1 ", totals([1, 2, 3]))
    
    
    
    function stringConcat(arr) {
        const change = arr.reduce(function(string, num){
            return string + num.toString()
        })
        return change
    }
    console.log(" C 2 ", stringConcat([1, 2, 3]))
    
    
    
    let voters = [
        {name: "Bob" , age: 30 , voted: true},
        {name: "Jake" , age: 32 , voted: true},
        {name: "Kate" , age: 25 , voted: false},
        {name: "Sam" , age: 20 , voted: false},
        {name: "Phil" , age: 21 , voted: true},
        {name: "Ed" , age: 55 , voted: true},
        {name: "Tami" , age: 54 , voted: true},
        {name: "Mary" , age: 31 , voted: false},
        {name: "Becky" , age: 43 , voted: false},
        {name: "Joey" , age: 41 , voted: true},
        {name: "Jeff" , age: 30 , voted: true},
        {name: "Zack" , age: 19 , voted: false},
    ];
    
    function totalVotes(arr) {
        const voteCount = arr.reduce(function(final, voter) {
            if (voter.voted) {
                final++
            }else{
                final
            }
            return final
        }, 0)
        return voteCount
    
    
    console.log(" C 3 ", totalVotes(voters));
    }
    
    
    const wishlist = [
        {title: "Tesla Model S", price: 90000 },
        {title: "4 carat diamond ring", price: 45000 },
        {title: "Fancy hacky sack", price: 5 },
        {title: "Gold fidgit spinner", price: 2000 },
        {title: "A second Tesla Model S", price: 90000 }
    ];
    
    const totalPrices = wishlist.reduce((total, item) => total + item.price, 0);
    
    console.log(" C extra credit 1 ", totalPrices)
    
    
    
    const arrays = [["1", "2", "3"],[true], [4, 5, 6]];
    
    function flatten(arr){
        const arraysFlat = arr.flat();
        return arraysFlat
    }
   
    console.log(" C extra credit 2 ", flatten(arrays))
   
   
   
    function leastToGreatest(arr) {
            const sorted = arr.sort(function(a, b) {
                if (a > b) {
                    return 1
                } else {
                    return -1
                }
            })
            return sorted
        }
      
        console.log(" D 1 ", leastToGreatest([1, 3, 5, 2, 90, 20]))
    
    
    
        function greatestToLeast(arr) {
        const sorted = arr.sort(function (a, b) {
            if (a < b) {
                return 1
            } else {
                return -1
            }
        })
        return sorted
    }
    console.log(" D 2 ", greatestToLeast([1, 3, 5, 2, 90, 20]))
    
    
    
    function lengthToShort(arr) {
        const shortToLong = arr.sort(function (a, b) {
            return a.length - b.length
        });
        return shortToLong
    }
   
    console.log(" D 3 ", lengthToShort(["dog", "wolf", "by", "family", "eaten"]))
   
   
   
    function alphabetical(arr) {
        return arr.sort()
    };
    
    console.log(" D extra credit ", alphabetical(["dog", "wolf", "by", "family", "eaten"]))
    
    
    
    
    
    