// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: "as-number" | "as-string"
// ) {
//   let result;

//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
//   // if (resultConversion === 'as-number') {
//   //     return +result;
//   // } else {
//   //     return result.toString();
//   // }
// }

// const combinedAges = combine(30, 26, "as-number");
// const combineNames = combine("Max", "Anna", "as-string");
// const combinedStringAges = combine("30", "26", "as-number");

// console.log(combineNames);
// console.log(combinedAges);
// console.log(combinedStringAges);
