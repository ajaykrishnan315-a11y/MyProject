var marks = Array(6)
var marks = new Array(20,40,35,12,37,100)

var marks = [20,40,35,12,37,100]
submarks = marks.slice(2,5) // slice returns the elements from index 2 to 4    slice returns teh 
console.log(submarks) // [ 35, 12, 37 ]

marks.slice()  // slice returns the copy of the array


console.log(marks[2])  // 35
marks[3] = 14
console.log(marks) // [ 20, 40, 35, 14, 37, 100 ]
console.log(marks.length) // 6 // l
marks.push(65)// push adds the element at the end of the array
console.log(marks) // [ 20, 40, 35, 14, 37, 100, 65 ]
marks.pop()  // pop removes the last element from the array
marks.shift() // shift removes the first element from the array
console.log(marks) // [ 40, 35, 14, 37, 100 ]
marks.unshift(10) // unshift adds the element at the beginning of the array
console.log(marks) // [ 10, 40, 35, 14, 37, 100 ]


console.log(marks.indexOf(100)) // 5 indexOf returns the index of the element in the array

console.log(marks.includes(120)) // includes returns true if the element is present in the array else returns false

var sum = 0
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i])
    sum = sum + marks[i] 
    
}
console.log(sum) // 236



// reduce method is used to reduce the array to a single value
// marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // reduce returns the sum of all the elements in the array
let Totalmarks = marks.reduce((sum, mark) => sum + mark, 0) 
console.log(Totalmarks) // 236

//new Array
var scores = [12,13,14,15,16]
// Question need to create a new array with the even numbers from the scores array
var evenScores = []
for(let i=0;i<scores.length;i++)
{
    if(scores[i] % 2 === 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores) // [12, 14, 16]


//scores.filter(cureentValue => condition) // filter returns a new array with the elements that satisfy the condition
let FilterevenScores = scores.filter(score => score % 2 === 0)
console.log(FilterevenScores) // [12, 14, 16]


// Question need to create a new array with the even numbers and multiple each element by 3 from the scores array
var newScores = []
for(let i=0;i<scores.length;i++)
{
    if(scores[i] % 2 === 0)
    {
        newScores.push(scores[i] * 3)
    }
}
console.log(newScores) // [36, 42, 48]

// Using map() method to achieve the same result
// array.map(currentValue => expression) // map returns a new array with the elements that satisfy the condition and applies the operation on each element
let MappedArray = FilterevenScores.map(currentValue => currentValue * 3)
console.log(MappedArray) // [36, 42, 48]


//Question need to create a new array with the even numbers and multiple each element by 3 from the scores array and then sum it.

let totalscores = MappedArray.reduce((sum, score) => sum + score,0)
console.log(totalscores) // 126

// Just in single chain for easiness
var scores1=[12,13,14,15,16]
let totalscores1 = scores1.filter(score => score % 2 === 0).map(currentValue => currentValue * 3).reduce((sum, score) => sum + score,0)
console.log(totalscores1) // 126

//Sorting on Array
let fruits = ["banana","mango","pomegranite","apple"]// Sort on string

console.log(fruits.sort())
console.log(fruits.reverse())

let num=[12,003,19,34,16,13]

num.sort((a,b)=>a-b)
console.log(num)

