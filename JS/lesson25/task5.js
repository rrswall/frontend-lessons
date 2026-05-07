const numbers = [2, 5, 8, 11, 14, 7, 8];

function countEvensAndOdds(numbers) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  return `Massivdə ${even} cüt və ${odd} tək ədəd var`;
}

console.log(countEvensAndOdds(numbers));