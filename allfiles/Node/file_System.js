const file= require('fs')
const os=require('os');

console.log(os.arch())
// console.log(os.cpus())
// console.log(os.constants)
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.networkInterfaces())
console.log(os.platform())
//creating a new file

//file.writeFileSync('ashu/read.txt',"welcome the the file system");
// file.appendFileSync('ashu/read.txt',"how are you")
// const a=file.readFileSync('ashu/read.txt')
// console.log(a.toString())