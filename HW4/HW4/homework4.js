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
    
    //(results.appendChild(p1)) + (results.append(first));
    /*
    results.appendChild(p1).append(first);
    results.appendChild(p2).append(last);
    results.appendChild(p3).append(day);
    results.appendChild(p4).append(color);
    */
    //console.log(results.appendChild(p4).append(color))
    //console.log(c);
    //console.log(color);

    document.getElementById('results').classList.add(document.getElementById('colorList').value);
    //results.classList.remove(color);
    //results.classList.add(color);

    console.log(color);

    //console.log(color.textContent = "Friday");

    results.appendChild(p1).append(first);
    results.appendChild(p2).append(last);
    results.appendChild(p3).append(day);

    if (color = "ltBlueBg") {
        
        results.appendChild(p4).textContent = "Light Blue";
    }

    
    



})


