let numbers = [5, 2, 9, 1, 3];
let sortedArray = [];
function sortNUmbers() {

    while (numbers.length > 0) {
        let min = Math.min(...numbers);

        sortedArray.push(min);

        let index = numbers.indexOf(min);
        numbers.splice(index, 1);
    }

    return sortedArray;
}

sortNUmbers(numbers)
console.log(`artan sira ile siralanmis siyahi: ${sortedArray}`)
