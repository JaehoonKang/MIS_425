<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Homework #5</title>
        <link href="homework5.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Homework 5</h1>
        </header>
        <main>
            <form id="myForm" action="" method="POST">
                <section>
                    <h2>My Form</h2>
                    <p>
                        <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" name="fname" placeholder="Enter Your First Name">
                    </p>
                    <p>
                        <label for="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lname" placeholder="Enter Your Last Name">
                    </p>
                    <p>
                        <label for="dayList">Favorite Day:</label>
                        <select id="dayList" name="favDay">
                            <option value="Mon">Monday</option>
                            <option value="Tue">Tuesday</option>
                            <option value="Wed">Wednesday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                            <option value="Sat">Saturday</option>
                            <option value="Sun">Sunday</option>
                        </select>    
                    </p>
                    <p>
                        <label for="colorList">Pick Your Color:</label>
                        <select id="colorList" name="favColor">
                            <option value="ltBlueBg">Light Blue</option>
                            <option value="ltGreenBg">Light Green</option>
                            <option value="ltYellowBg">Light Yellow</option>
                            <option value="ltRedBg">Light Red</option>
                            <option value="ltOrangeBg">Light Orange</option>
                        </select>
                    </p>
                    <p>
                        <input type="submit" value="Submit My Results">
                    </p>
                </section>
                <section>
                    <h2>Form Results</h2>
                    <div id="results">
                    </div>
                </section>
            </form>
            <section>
                <h2>Instructions:</h2>
                <p><strong>You <span style="color:red">MAY NOT</span> alter css file to complete this assignment. Points will be deducted if the css files is changed. You may only work within the PHP (.php) file.</strong>  Everything you need to complete this assignment can be found in chapters 11 &amp; 12.</p>
                <h3>Part 1</h3>
                <p>Your objective is to output the values of the form fields into the Form Results section. The form has an id=&quot;myForm&quot;.  The Form Results section contains a div tag with an id=&quot;results&quot;.  You will display the resuts of the form there.  Each form field should be displayed on its own line.  For example:</p>
                <section>
                    <p>First Name = Scott</p>
                    <p>Last Name = Geiger</p>
                    <p>Favorite Day = Fri</p>
                    <p>Pick Your Color = ltBlueBg</p>
                </section>
                <h3>Part 2</h3>
                <p>After you have the results entered into the Form Results section, add code such that the background color of the section is whatever value is selected in the "Pick Your Color" list.  Your css file contains classes that match the value of the select list options.</p>
                <section class="ltBlueBg">
                    <p>First Name = Scott</p>
                    <p>Last Name = Geiger</p>
                    <p>Favorite Day = Fri</p>
                    <p>Pick Your Color = ltBlueBg</p>
                </section>    
                <h3>Part 3</h3>
                <p>The output of the select lists (Favorite Day and Pick Your Color) are the values associated with the options.  Change the output to match what is displayed in the select list. For example:</p>
                <section class="ltBlueBg">
                    <p>First Name = Scott</p>
                    <p>Last Name = Geiger</p>
                    <p>Favorite Day = Friday</p>
                    <p>Pick Your Color = Light Blue</p>
                </section>
            </section>
        </main>
    </body>
</html>