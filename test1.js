var elements= [200,300,400,500,600]

var sum=0
for(var i=0;i<elements.length;i++)
{
    
    sum = sum + elements[i]
}

console.log(sum)

let HighestValue= Math.max(...elements)
let LowestValue= Math.min(...elements)

console.log(HighestValue)
console.log(LowestValue)


