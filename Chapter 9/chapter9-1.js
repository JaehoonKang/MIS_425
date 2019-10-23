/** Chapter 9: Practice #1
* objectives:
*  - Access the document DOM object
*  - Use the section methods from Table 9.2
*  - Examine the properties of the nodes
*/

//console.log(document);
//console.log(document.__proto__);

//console.log(document.children);

//console.log(document.getElementById('div1'));
//console.log(document.getElementById('div2'));

//console.log(document.getElementById('div1').__proto__);
//console.log(document.getElementById('div2').__proto__);

//console.log(document.getElementsByClassName('greenBg'));

//console.log(document.getElementsByTagName('div'));

//console.log(document.querySelector('div'));

//console.log(document.querySelectorAll('div'));

//console.log(document.getElementById('div3').firstChild);
//console.log(document.getElementById('div3').__proto__);
//console.log(document.getElementById('div3').firstElementChild);
//console.log(document.getElementById('div3').firstElementChild.firstElementChild);
//console.log(document.getElementById('div3').firstElementChild.firstElementChild.href);

//console.log(document.getElementById('fullName').name);
//console.log(document.getElementById('fullName').__proto__);
//console.log(document.getElementById('fullName').placeholder);
//console.log(document.getElementById('fullName').value);
/** enter some text in the form input */
//console.log(document.getElementById('fullName').value);

/**  can we make a shortcut for querySelector?
* yes: see below, but...
* jQuery does essentially the same using $ as the function name
* we'll learn more about that in the next class.
*
* try using these in the console
*/
function q(s) {
    return document.querySelector(s);
}

function qA(s) {
    return document.querySelectorAll(s);
}