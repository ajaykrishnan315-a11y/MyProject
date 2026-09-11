const Person = require("./basics7")
class Pet extends Person{

    get location()
    {
        return "Bluecross"
    }

    constructor(firstName,lastName)
    {
        super(firstName,lastName)
    }
}


let pet = new Pet("sam","son")
console.log(pet.fullName())
console.log(pet.location)