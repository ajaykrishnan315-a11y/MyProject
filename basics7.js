module.exports= class Person
{
    age=25
    get location()
    {
        return "Canada"
    }
    //constructor is method which executes by default when 
    constructor(firstName,LastName)
    {
        this.firstName=firstName
        this.LastName=LastName
    }

    //methods
    fullName()
    {
        return this.firstName+this.LastName
    }
}


// let person = new Person("Tim","Joseph")
// let person1 = new Person("Chris","Jones")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())