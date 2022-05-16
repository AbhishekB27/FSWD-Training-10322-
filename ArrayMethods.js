console.log("DAY-27");
const arr = [10,20,30,40,50];

arr.forEach(val=>console.log("Value: " + val));
arr.filter(val=> val%3 == 0).forEach((value)=>{console.log("Filter value is: " + value)});
let sum = arr.reduce((preVal,nextVal)=>{
    let total = preVal + nextVal;
    console.log("preVal: " + preVal + " : " + "nextVal: " + nextVal)
    return total;
});
console.log(sum);