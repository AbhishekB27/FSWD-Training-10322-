const add = (a,b)=>a+b;
const sub = (a,b)=>a-b;
const mul = (a,b)=>a*b;
const div = (a,b)=>a/b;
const greet= (name)=>{console.log("Hello " + name)}
// module.exports={//these are named exports
//     add,
//     sub,
//     mul,
//     div
// }
module.exports = greet;//these are named exports