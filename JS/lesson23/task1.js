let numbers = prompt(` vergulle ayilmis 5 eded daxil edin:`)
let numArr = numbers.split(`,`)
let theSmallest = Math.min(...numArr)
console.log(` The smallast number in this array is ${theSmallest}`)