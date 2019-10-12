console.log('--- The "hello world" example ---');
alert('hello world');
console.log('hello world');

// the "hello world" example
console.log('--- The "hello world" var example ---');
var a = 'hello world';
console.log(a);

// the truthy example
console.log('--- The truthy example ---');
if (a) {
    console.log('a is true');
}

// if there is only one statement in the if you can drop the { }
console.log('--- Single statment "if" example ---');
var b = 9;
if (b == "9") console.log('var b is truthy');

// here is the shorthand
console.log('--- conditional shorthand example ---');
(b == 9) ? console.log('var b is truthy') : console.log('var b is falsy');

// we can further reduce this; console.log is common to both true and false
console.log('--- Further reduction of conditional shorthand ---');
console.log((b==9)?'var b is truthy':'var b is falsy');

// now let's add an concatentation operator: +
console.log('--- Addition of concatenation operator ---');
console.log('var b is ' + (b==9)?'truthy':'falsy');
console.log('Did it work?');

// the conditional shorthand must be enclosed in () so that it is evaluated
console.log('--- Corrected addition of concatenation operator');
console.log('var b is ' + ((b==9)?'truthy':'falsy'));

//while loop
console.log('--- while loop ---');
var i = 1;
while (i < 5) {
    console.log('i = ' + i);
    i++;
}

// do..while loop
console.log('--- do..while loop ---');
i = 1;
do {
    console.log('i = ' + i);
    i++;
} while (i < 5);

console.log('--- What if "i" already = 5? ---');
//while loop
console.log('--- while loop; i = 5 ---');
i = 5;
while (i < 5) {
    console.log('i = ' + i);
    i++;
}

// do..while loop
console.log('--- do..while loop; i = 5 ---');
i = 5;
do {
    console.log('i = ' + i);
    i++;
} while (i < 5);

// for loop
console.log('--- for loop ---');
for(var n = 1; n < 5; n++) {
    console.log('n = ' + n);
}
