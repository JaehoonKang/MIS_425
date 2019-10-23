function myName(first,last) {
    return 'My Name is: ' + first + ' ' + last;
}

console.log('--- function MyName() ---');
var greeting = myName('Joe', 'Geiger');
console.log(myName('Scott','Geiger'));

console.log('--- anonymous function ---');
var sayHello = function(name) {
    return 'Hello ' + name;
}

console.log(sayHello('Joe'));

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