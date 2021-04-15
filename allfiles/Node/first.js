const square={
    area:(a)=>(a*a),
    perimeter:(p)=>(4*p),
};

const calsquare=(a)=>{console.log(`the value of a is ${a} and the area is:`+square.area(a));};
calsquare(5);