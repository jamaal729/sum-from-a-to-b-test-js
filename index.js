function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let total = 0;
  let i = fromN;

  // for loop
  // for (let i = fromN; i <= toN; i++) {
  //   console.log(total);
  //   total += i;
  // }
  // return total;

  // recursive 1
  // if (i <= toN) {
  //   total = i + sum(i + 1, toN);
  //   console.log(i);
  // }
  // return total;

  // recursive 2
  if (i > toN) {
    return total;
  }
  console.log(i);
  return i + sum(i + 1, toN);
}

module.exports = sum;

console.log(sum(3, 7));
