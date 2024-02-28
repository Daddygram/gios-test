const numbersArray = [1, 2, 3, 4, 5, 6, 7]

function sumArray(numbers){
    let sum = 0;
    numbers.map(num => {
        sum += num;
    })
    return sum
}

const sum = sumArray(numbersArray)
console.log(sum)