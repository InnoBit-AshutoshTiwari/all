// const square={
//     area:(a)=>(a*a),
//     perimeter:(p)=>(4*p),
// };

const square=require('./square.js');

const calsquare=(a)=>{console.log(`the value of a is ${a} and the area is:`+square.ar(a));};

calsquare(5);
console.log('perimeter='+square.p(5));

console.log(__dirname);
console.log(__filename);