function add(n1, n2) {
    return n1 + n2;
}
// questa funzione restituisce "void" perchè si tratta di una funzione che si esegue con successo sempre.
function printResult(num) {
    console.log("Result:", num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
combineValues = add;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// printResult(add(5, 12));
