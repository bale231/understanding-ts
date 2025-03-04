function add(n1: number, n2: number) {
    return n1 + n2;
  }
  
  // questa funzione restituisce "void" perchè si tratta di una funzione che si esegue con successo sempre.
  function printResult(num: number) {
    console.log("Result:", num);
  }
    
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }

  let combineValues: (a: number, b: number) => number;
  
  combineValues = add;
  // combineValues = 5;
  
  console.log(combineValues(8, 8));
  
  addAndHandle(10, 20, (result) => {
    console.log(result);
  })
  // printResult(add(5, 12));
  