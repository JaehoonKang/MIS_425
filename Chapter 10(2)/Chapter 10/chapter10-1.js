/** Chapter 10: Practice #1
* Objectives:
*  - use the $() selector function and examine what the return is
*  - Work with Filters
*  - Use .html() to manipulate
*  - Work with Attributes and Properties
*  - Change CSS using .css(), .addClass() and .removeClass()
*/

//console.log(window.jQuery());
//console.log($());

/** using the tag selector */
//console.log($('body'));
//console.log($('div'));

/** using the id selector */
//console.log($('#div2'));

/** using the class selector */
//console.log($('.ltblueBg'));


/** additional selectors */
//console.log($('[name="favColor"]'));
//console.log($('[name^="fav"]'));
//console.log($(':contains("Yellow")'));
//console.log($('div:contains("Yellow")'));


/** Filters */
//console.log($('div:eq(0)'));
//console.log($('div').eq(0)); //alternative method 
//console.log($('div:lt(2)'));
//$('div:even').css('border-color','orange');


/** Form Selectors */
//console.log($('#myForm :radio'));
/** select one of the radio options */
//console.log($('#myForm :radio:checked'));
/** select a favorite day */
//console.log($('#myForm [name="favDay"] :selected'));
//console.log($('#myForm [name="favDay"] :selected')[0].value);
/** shortcut method */
//console.log($('#myForm [name="favDay"] :selected').val());


/** Manipulations via .html() */
//console.log($('#div1').html());
//$('#div1').html('<p>I just changed the content</p>');


/** Work with attributes */
//console.log($('#div3 a').attr('href'));
//$('#div3 a').attr('href','https://google.com');


/** Work with properties */
//$('#myForm :radio[value="red"]').prop('checked',true);
//$('#myForm [name="favDay"] option[value="Wed"]').prop('selected',true);


/** Change CSS */
//$('#div1').css('background-color','#360');

/** Change CSS using addClass and removeClass */
//$('#div3').removeClass('ltgreenBg');
//$('#div3').addClass('ltredBg');
//$('#div3').toggleClass();
/** try using toggleClass again from the console; what happens?  What happens if you use it again? */
