console.log("Creating Reusable Functions!!")

//Calculate sum
var a = [3 + 5 + 7];

a.forEach(function (sum) {
    console.log(sum);
});

//calculate AVERAGE
var array = [3 + 5 + 7]; 
function getAverage(array) {
    let sum = 15;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length; {
    }
  }
console.log(array.length) 
