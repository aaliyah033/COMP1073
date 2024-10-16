//Instructions:

// Use the below instructions as a framework for developing your interactive interface:

//     Analyze the provided HTML, CSS, and JavaScript files (see the bottom of this page).
//     You may not change any part of the HTML or the CSS files for this lab - this is an integral part of the challenge.
//     Create a local and a remote code repository for the 
//     Open the file called page-color-changer.js.
//     Declare and initialize some constants for the input slider elements, the page body and any other HTML element you think you need to manipulate.
//     Build one or more event handlers to call a function when the user changes the value of one of the range sliders (hint - look up the code for the weather page where we built a slider for the wind speed).
//     Build one or more functions that change the background-color property value of the page body (or HTML element), based on the values of the three range sliders (hint - we changed the background-color of the page in a prior lesson).
//     Make sure that your event handler(s) call the above function(s) you created.
//     Test the application in a browser to track down any errors - use the console.
//     Comment all major code blocks or pieces of functionality.
//     Do your best and have fun - resist the temptation to simply look for a complete solution online or from generative AI - this is your opportunity to collaborate with your peers and to try to apply some of the things that you have learned.

//STEP 1: Declare and initialize
// Declare and initialize some constants for the input slider elements, the page body and any other HTML element you think you need to manipulate.
let redColorSlide = document.querySelector('#red') //this targets the label for red
let greenColorSlide = document.querySelector('#green') //this targets the label for green
let blueColorSlide = document.querySelector('#blue') //this targets the label for blue

//STEP 2: Building an event handlers
// Build one or more event handlers to call a function when the user changes the value of one of the range sliders (hint - look up the code for the weather page where we built a slider for the wind speed).
//used input because the label is input
redColorSlide.addEventListener('input', changeColor) //this event handler will call the changeColor function
greenColorSlide.addEventListener('input', changeColor) //this event handler will call the changeColor function
blueColorSlide.addEventListener('input', changeColor) //this event handler will call the changeColor function

//STEP 3: Building a function and STEP 4: Testing the application 
//Build one or more functions that change the background-color property value of the page body (or HTML element), based on the values of the three range sliders (hint - we changed the background-color of the page in a prior lesson).
//from conditions function (setWeather() used the .value method)
function colorChange(){
    var slideRed = redColorSlide.value //this will store the value from the inpul label - for red 
    console.log(slideRed);
    var slideGreen = greenColorSlide.value //this will store the value from the inpul label - for green
    console.log(slideGreen);
    var slideBlue = blueColorSlide.value //this will store the value from the inpul label - for blue
    console.log(slideBlue);

    // hint used from last class event.js - chnaging the background color 
    const backgroundColor = 'rgb(' + slideRed + ', ' + slideGreen + ', ' + slideBlue + ')';
    console.log(backgroundColor); //so i could check if it's working
    document.body.style.backgroundColor = backgroundColor; 
    console.log(backgroundColor); //so i could check if it's working
}
colorChange(); 





