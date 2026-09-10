const Person= require('./basics7')

let day="tuesday "
console.log(day.length)  //8
console.log(day.slice(0,4)) //tues
console.log(day[1]) //u

let splitDay= day.split("s")
console.log(splitDay[1])
console.log(splitDay[1].trim().length)


let date="23"
let newDate="27"
let diff = parseInt(newDate)-parseInt(date)
console.log(diff)

//concatenation of string
let newQuote= day+"is a Funday day"
console.log(newQuote)
let val =newQuote.indexOf("day")
console.log(val)

//To find no of occurrence of "day"
let count=0
let value= newQuote.indexOf("day")
while(value!==-1)
{
    count++
    value=newQuote.indexOf("day",value+1)
}
console.log(count)



let person =new Person("chris","edward")
console.log(person.fullName())