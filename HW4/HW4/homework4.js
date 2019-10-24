/* homework4.js - JavaScript for Homework #4 */


var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var first = document.getElementById('firstName').value;
    var last = document.getElementById('lastName').value;
    var day = document.getElementById('dayList').value;
    var color = document.getElementById('colorList').value;

    //console.log(first);
    //console.log(last);
    //console.log(day);
    //console.log(color);
    
    var firstText= document.createTextNode("First Name = ");
    var lastText= document.createTextNode("Last Name = ");
    var favoriteDay= document.createTextNode("Favorite Day = ");
    var pickColor= document.createTextNode("Pick Your Color = ");

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");

    p1.appendChild(firstText);
    p2.appendChild(lastText);
    p3.appendChild(favoriteDay);
    p4.appendChild(pickColor);

    var results = document.getElementById('results');
    
    results.appendChild(p1);
    results.appendChild(p2);
    results.appendChild(p3);
    results.appendChild(p4);



})


