const sumArray = function (array) {
    const result = array.reduce((acc, curr) => {
        return acc += curr
    }, 0)
    return result
}

let arrayToSum = []

for (let index = 0; index < 10000000; index++) {
    arrayToSum.push(Math.floor(Math.random()*8))
    
}

console.log(arrayToSum);


const start = Date.now()
console.log(sumArray(arrayToSum));
const end = Date.now()

console.log(`Execution time: ${end - start} ms`);