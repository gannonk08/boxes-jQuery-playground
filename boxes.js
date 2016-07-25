//Reference this page. Add a callback function to ready that alerts a message saying, ready for DOM manipulation. Try using both styles of callbacks.

$(document).ready(function() {
    // alert("Ready for DOM Manipulation");

    // Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"

    // $("#secretBox").backgroundColor = 'white';
    // $("#secretBox").append("<h1>Test</h1>")

    // Find all child divs of the first row. Set the class for each div to boxType3.

    // $("#row1 > div").attr('class', 'boxType3');

    //Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).

    // $("#row4 div").last().css("display","none");


    //Change all red boxes to white.

    // $("div.box.boxType1").css("backgroundColor","white");

    //Get the first two divs in the second row. Take away all styling from the divs.

    // $("#row2 > div.box").first().css('display', '');
    // $("#row2 > div.box.boxType3").css('display', '');

    // Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.

    // $("div.box").css('width', '2px');

    //Add an on click handler to the container div. Console log the x and y position of the click.

    // $('body').click(function(e) {
    //     // var x = $(this).position().left;
    //     // var y = $(this).position().top;
    //     console.log(e.pageX + ' , ' + e.pageY);
    // })


    //Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!

    // $("div.box.boxType1").append("<a href='galvanize.com'></a>")

    // $('body').click(function() {
    //     alert("You can never leave!!!");
    // })


    //For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.
    // $('div.box').mousedown(function() {
    //     $('div.box').append("<img src='https://pbs.twimg.com/profile_images/712767186121662464/nF-Cjo3K.jpg'/>");
    // })
    // $('div.box.img').mousedown(function() {
    //     $('#dog').css("display","none");
    // })

    //Write a click handler on the container div. The click handler should turn the container background to black and the backgrou znd of the original div that was clicked to white. If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.
    $('#container').mousedown(function(event) {
        console.log(event.target, this);
        if(event.target === this){
          $(this).css("backgroundColor","#7FFF00");
        }
        else {
          console.log("else");
          $(event.target).css("backgroundColor","white")
          $(this).css("backgroundColor","black");
        }
    })





});
