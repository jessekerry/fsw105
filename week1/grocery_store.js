let shopper = {
    firstName: "odin",
    lastName: "hampton",
    age : 20,
    isAlive: true,
    wholeName: function() {
        return this.firstName + " " + this.lastName;
    },
    cart: ["milk", "eggs", "juice"]
};


console.log(shopper)
console.log(shopper.wholeName())
