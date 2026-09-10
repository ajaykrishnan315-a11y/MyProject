

//Object is collection of properties

let person ={
    firstName:'Tim',
    lastName: 'Joe',
        age: 24,
    fullName : function()
    {
        console.log(this.firstName+ this.lastName)
    }
}

console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName'])
person.firstName='Tim Dane'// to change property
console.log(person.firstName)
person.gender='male'// to add a property
console.log(person)
delete person.gender // to delete a property
console.log(person)


