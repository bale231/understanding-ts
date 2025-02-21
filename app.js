function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!');
    // }
    var results = n1 + n2;
    if (showResult) {
        console.log(phrase, results);
    }
    else {
        return results;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2, printResult, "Result is: ");
