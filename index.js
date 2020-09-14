
function add(a, b) {
  return a+b
}


function subtract(a, b) {
  return a-b
}

function multiply (a,b) {
  return a*b
}

function divide(a,b) {
  return a/b
  
}

function increment(n) {
  
  return n + 1
}

function decrement (n) {
  return n-1
}

function makeInt(string, base) {
   const parsed = parseInt(string, base);
  if (isNaN(parsed)) { return 0; }
  return parsed;
  
}


function preserveDecimal(string){
    
  return parseFloat(string)
}