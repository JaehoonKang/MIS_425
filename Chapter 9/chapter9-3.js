/** Chapter 9: Practice #3
* Objectives:
*  - Create a handler function and assign it to an event handler.
*  - Try different event types (such as click, keydown, mouseover, focus)
*  - Example of how the "bubbling" works
*  - Examine the event object
*  - Use preventDefault()
*/
var myBtn = document.getElementById('myButton');
//console.log(myBtn);  /** testing to make sure myBtn is defined */

/** This doesn't work - it fires on page load and will not fire again. */
//myBtn.addEventListener('click',alert('you clicked my button!'));

myBtn.addEventListener('click',function() {
    alert('now you really clicked my button!');
});

function changeBG() {
    document.getElementById('div2').classList.replace('greenBg','ltblueBg');
}
function returnBG() {
    document.getElementById('div2').classList.replace('ltblueBg','greenBg');
}

/** notice you give it just the name of the function.
 * If you entered changeBG() it would fire immediately like the alert() */
myBtn.addEventListener('mouseover',changeBG);
myBtn.addEventListener('mouseout',returnBG);


/** bubbling example */
var outer = document.getElementById('outer');
var inner1 = document.getElementById('inner1');
var inner2 = document.getElementById('inner2');
outer.addEventListener('click',function() { console.log('outer clicked'); });
inner1.addEventListener('click',function() { console.log('inner1 clicked'); });
//inner2.addEventListener('click',function() { console.log('inner2 clicked'); });

/** examine the event object
 * NOTE!!! be sure to comment out the inner2.addEventListener above
 * if you do not the event will fire for each instance
 * you can have multiple of the same type of events
*/
/*inner2.addEventListener('click',function(e) {
    console.log(e);
    console.log('inner2 clicked again');
});*/

/** BONUS: how can we stop bubbling? */
/*inner2.addEventListener('click',function(e) {
    e.stopPropagation();
    console.log(e);
    console.log('inner2 clicked, did it bubble?');
});*/

/** use preventDefault() to stop normal action */
var myForm = document.getElementById('myForm');
/*myForm.addEventListener('submit',function(e) {
    e.preventDefault();
    console.log('I was submitted!');
    //var name = document.getElementById('fullName').value;
    //console.log('Your full name is: ' + name);
});*/
