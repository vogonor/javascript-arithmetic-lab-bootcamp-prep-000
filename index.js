
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

function makeInt(string) {
 
  if (isNaN(string)) { return 0 }
  return parseInt(string)
  
}


function preserveDecimal(string){
    
  return parseFloat(string)
}