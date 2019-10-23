/** Chapter 9: Practice #2
* Objectives:
*  - Modify an element and change its style
*  - Modify an element and change its class
*  - Modify an element and change its contents using innerHTML or textContent
*  - Create a new DOM element using the "verbose" technique
*/

//console.log(document.getElementById('div2').style);

//document.getElementById('div2').style.borderColor = 'blue';
/** examine the HTML elements in the developer tool **/

//console.log(document.getElementById('div1').classList.__proto__);
//document.getElementById('div1').classList.add('ltyellowBg');
/** can we add to an existing classList? **/
//console.log(document.getElementById('div1').classList);
//document.getElementById('div1').classList.add('purpleBorder');
//console.log(document.getElementById('div1').classList);

/** can we change a class (i.e. replace?) */
//document.getElementById('div3').classList.replace('ltgreenBg','ltredBg');
/** examine the HTML elements in the developer tool **/

/** Let's change the content now */
//document.getElementById('div3').innerHTML = "<p>This is <strong>DYNAMIC</strong></p>";
//document.getElementById('div3').innerHTML += "<p>This is <strong>DYNAMIC</strong></p>";

/** now let's create a new DOM element */
/*var text = document.createTextNode("This is a new element");
var p = document.createElement("p");
p.appendChild(text);
console.log(p);
document.getElementById('div3').appendChild(p);*/

