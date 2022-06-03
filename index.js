// console.log("Hello World")
// let a = 0;
// const arr=[10,12,15,14];
// arr.forEach(ele=>{
//     a++
//     console.log(a + ": " + ele)
// });
// console.log(module)// it show current directory object
// calculation eg:
const val = require('./calculation')
const os= require('os')
const x =10;
const z=5;
// console.log("ADD:(10+5) = " + val.add(x,z))
// console.log("SUB:(10-5) = " + val.sub(x,z))
// console.log("MUL:(10*5) = " + val.mul(x,z))
// console.log("DIV:(10/5) = " + val.div(x,z))
console.log(val('Abhishek'))
console.log(os.homedir())
console.log(os.arch())
console.log(os.userInfo())
console.log(os.cpus())
console.log(os.platform())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.networkInterfaces())
console.log(os.release())







