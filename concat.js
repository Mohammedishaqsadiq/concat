function joinTwoArrayTogether(firstArray, secondArray, combiner) {
  combiner = firstArray;
  for (const element of secondArray) {
    combiner[combiner.length] = element;
  }
  return combiner;
}
let combiner;
let firstArray = ["Abbas"];
let secondArray = ["Ishaq"];

console.log(joinTwoArrayTogether(firstArray, secondArray, combiner));

