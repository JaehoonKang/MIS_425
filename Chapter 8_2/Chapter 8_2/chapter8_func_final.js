function myName(first,last) {
    return 'My Name is: ' + first + ' ' + last;
}

console.log('--- function MyName() ---');
console.log(myName('Scott','Geiger'));

var greeting = myName('Joe','Geiger');
console.log(greeting);

console.log('--- anonymous function ---');
var sayHello = function(name) {
    return 'Hello ' + name;
}
console.log(sayHello('Scott'));

var complexObj = {
    first_name: "Scott",
    last_name: "Geiger",
    sayHelloAgain: function() {
        return 'Hello again '+ this.first_name + ' ' + this.last_name;
    }
}

console.log(complexObj.sayHelloAgain());
complexObj.first_name = 'Joe';
console.log(complexObj.sayHelloAgain());

console.log('--- working with scope ---');
var a = 1;
console.log('a = ' + a); //outputs: a = 1
for (a; a < 6; a++) {
console.log('a = ' + a);
let b = a+1;
}
console.log('a = ' + a); //outputs: a = 5
console.log('b = ' + b); //outputs: error/undefined
