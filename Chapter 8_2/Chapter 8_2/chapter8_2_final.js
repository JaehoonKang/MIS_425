var myArray = ["a","b","c","d"];
console.log(myArray);

console.log('--- array element index 1 ---');
console.log(myArray[1]);

console.log('--- invalid index ---');
console.log(myArray[5]);

console.log('--- array length property ---');
console.log(myArray.length);

console.log('--- array for..loop ---');
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log('--- array methods ---');
console.log('-- push() --');
var a1 = myArray.push("e");
console.log(a2);
console.log(myArray);

console.log('-- pop() --');
var a2 = myArray.pop();
console.log(a2);
console.log(myArray);

console.log('-- unshift() --');
var a3 = myArray.unshift("z");
console.log(a3);
console.log(myArray);

console.log('-- shift() --');
var a4 = myArray.shift();
console.log(a4);
console.log(myArray);

console.log('--- create an object ---');
var myObject = {
    name: "Scott Geiger",
    class: "MIS 425",
    start_time: "6 PM"
}
console.log(myObject);
console.log(myObject.name);
console.log(myObject['class']);

var key = 'start_time';
console.log(myObject[key]);
