const sumArray = function (array) {
    // reduce also gives linear time complexity

    // const result = array.reduce((acc, curr) => {
    //     return acc += curr
    // }, 0)
    // return result

    let result = 0
    for (const number of array) {
        result += number
    }
    return result
}

let arrayToSum = []

for (let index = 0; index < 1000000; index++) {
    arrayToSum.push(Math.floor(Math.random() * 8))

}

const start = Date.now()
console.log(sumArray(arrayToSum));
const end = Date.now()

console.log(`Execution time: ${end - start} ms`);