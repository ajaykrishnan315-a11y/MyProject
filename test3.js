
let productPrices =[37,650,320,100,59]

let discountedPrices= productPrices.map(currentValue=> currentValue*10/100)
console.log(discountedPrices)

let affordableProducts = productPrices.filter(currentValue => currentValue<50)
console.log(affordableProducts)

let SumofaffordableProducts= affordableProducts.reduce((sum,currentValue)=> sum+currentValue,0)
console.log(SumofaffordableProducts)