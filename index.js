function sumItems(array) {
  let total = 0;
  for (let el of array) {
    if (Array.isArray(el)) {
      total += sumItems(el);
      continue;
    }
    total += el;
  }
  return total;
}

module.exports = sumItems;