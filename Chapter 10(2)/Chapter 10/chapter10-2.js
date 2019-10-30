/** Chapter 10: Practice #2
 *  Objectives:
 *   - Use event methods
 *   - Add (and remove) DOM elements
 *   - Use show() and hide()
 *   - Use fadeIn() and fadeOut()
 *   - use slideUp() and slideDown()
 *   - use toggle() methods
 */

$(function() {
    /** uncomment one event method, reload the page and test it. 
     *  Then comment the method out again and uncomment the other,
     *  reload the page and test it.  Did it work?  What happened?
     * 
     *  Try uncommenting both click event methods, reload the page and test.
     *  What happened?
    */

    /*$('#myButton').on('click',function(e) {
        console.log(e);
        console.log('you click myButton');
    });*/

    /*$('#myButton').click(function(e) {
        console.log(e);
        console.log('You used the shortcut click event method');
    });*/

    /** adding (and removing) DOM elements;   
     *  copy each line one at a time and enter into the console (without the // comment indicator)
     *  DO NOT uncomment all and run it; you will not see anything happen.
    */
    //$('#div1').append('<p>this is a new line</p>');
    //$('#div1').append('<p>this is the last line</p>');
    //$('#div1 p').eq(2).remove();
    //$('#div1 p:last').remove();
    //$('#div1').prepend('<p>this comes first</p>');
    //$('#div1').prepend('<p>this really comes first</p>');
    //$('#div1 p:lt(2)').remove();

    /** show, hide, fade, slide, and toggle
     *  copy each line one at a time and enter into the console (without the // comment indicator)
     *  DO NOT uncomment all and run it; you will not see anything happen.
    */
    //$('#div3').hide();
    //$('#div3').show();
    //$('#div3').hide(1000);
    //$('#div3').show(1000);
    //$('#div3').fadeOut();
    //$('#div3').fadeIn(1000);
    //$('#div3').slideUp();
    //$('#div3').slideDown(1000);
    //$('#div3').toggle();
    /** run $('#div3').toggle() multiple times; what happens? */
});