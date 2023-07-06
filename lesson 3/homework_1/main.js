let numbers = [1,2,3,4,5,6,7,8,9,10]

const func = (numbers) =>{
    let arr = []
    let sum
    let dbl = 1
    const[first, second, ...rest] = numbers
    sum = first + second
    for(let i = 2; i < rest.length; i++){
        dbl = dbl * numbers[i]
    
    }

    console.log(rest)

    arr.push(sum)
    arr.push(dbl)
    return arr
}

console.log(func(numbers))