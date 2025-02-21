function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!');
    // }
    const results = n1 + n2;
    if (showResult) {
        console.log(phrase, results);
    } else {
        return results;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const result = add(number1, number2, printResult, "Result is: ");