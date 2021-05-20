// Task 1
//declare a function
function convertFahrToCelsius(F){

    //check if inputs is a valid number or can be converted to a valid number
    if (typeof (F) === "number" || !isNaN(F)) {
        let C = (F - 32) * 5/9
        let n = C.toFixed(4);
        return n;

    }  else if (Array.isArray(F)) {
        return F + " is not a valid number but a/an array";
      } 
      else {
        return JSON.stringify(F) + " is not a valid number but a/an " + typeof F;
    
}
}
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("1"));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp: 0}));


// Task 2
function checkYuGiOh(n) {
  const emptyArray = [];
   if (isNaN(n))
   return JSON.stringify ("invalid parameter: " + n);
  
  for(let i = 1; i <= n; i++) {
    if (i === 1) {
      emptyArray.push(1);
    } else if (i%2 === 0 && i%3 === 0 && i%5 === 0) {
      emptyArray.push("yu-gi-oh");
    } else if (i%2 === 0 && i%5 === 0) {
      emptyArray.push("yu-oh");
    } else if (i%2 === 0 && i%3 === 0) {
      emptyArray.push("yu-gi");
    } else if (i%3 === 0 && i%5 === 0) {
      emptyArray.push("gi-oh");
    } else if (i%2 === 0) {
      emptyArray.push("yu");
    } else if (i%3 === 0) {
      emptyArray.push("gi");
    } else if (i%5 === 0) {
      emptyArray.push("oh");
    } else {
      emptyArray.push(i)
    }
  }
  return emptyArray;
}
console.log(checkYuGiOh(30))
console.log(checkYuGiOh("10"))
console.log(checkYuGiOh("fizzbuzz is meh"))

