
const path=require('path');
console.log(__filename);
const filename=path.join('main',__filename,'ui');
console.log(typeof(filename));
console.log(filename);
const basename=path.basename(filename);
console.log(basename);
var deli=path.delimiter

console.log(deli+'ashu')
console.log(path.dirname(__filename)+'ui');
console.log(path.extname(__filename));
//var st=path.format(path.join('name','main','htt.html'));
//console.log(__filename.sep);
//console.log(st);


//path.format
var obj={dir:'C:\\User\\Refsnes',base:'demo.js'}
console.log(typeof(obj));
var p=path.format(obj);
console.log(p)

console.log(path.isAbsolute('/test/demo_path.js'));
console.log(path.isAbsolute('/man/test/demo_path.js'));
console.log(path.isAbsolute('man/test/demo_path.js'))
