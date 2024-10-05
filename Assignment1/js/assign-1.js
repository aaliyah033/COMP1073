//STEP 1: declare & initialize
const storymaker = document.querySelector('.story');
const game = document.querySelector('.game-story');

//STEP 2: array containing the column/row with the words
//added words from the book 
const column1 = ['the turket', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const column2 = ['sat on', 'ate', 'danced with', 'saw', 'doesn\t', 'kissed'];
const column3 = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const column4 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const column5 = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

//STEP 3: function for random word of the array 
//my notes: used randomValueArray from step 2 this will this function and pass it an array, understanding it will return one of the elements of that array randomly
function randomValueArray(array) {
    return array[Math.floor(Math.random() * array.length)];
    }

//STEP 4: After array a function that selects the randomValueArray method to randomly select words/phrases based on button/row
//my notes: use switch for easier action, which column selected and ranomize words/phrases.
function storyColumn(assignedNumber){
    let myArray =[]; //assigne array to store the phrase/words 
    switch (assignedNumber) {
        //case 1 - assigned column1 to select word/phrase(ranomValueArray) from when button is pressed.
        case 1:
            myArray[0] = randomValueArray(column1);
            console.log(myArray);
            break; 
        //case 2 - assigned column1 to select word/phrase(ranomValueArray) from when button is pressed.
        case 2:
            myArray[0] = randomValueArray(column2);
            console.log(myArray);
            break;
        //case 3 - assigned column1 to select word/phrase(ranomValueArray) from when button is pressed.
        case 3:
            myArray[0] = randomValueArray(column3);
            console.log(myArray);
            break;
        //case 4 - assigned column1 to select word/phrase(ranomValueArray) from when button is pressed.
        case 4:
            myArray[0] = randomValueArray(column4);
            console.log(myArray);
            break;
        //case 5 - assigned column1 to select word/phrase(ranomValueArray) from when button is pressed.
        case 5:
            myArray[0] = randomValueArray(column5);
            console.log(myArray);
            break;     
    }
    return myArray; //returnes after all cases are pressed.
}

//my notes: After storing arrays and randomvalueArray for phrase/words ---- should move to the three buttons (restart,view, & suprise)

//STEP 5: function for story - this function for viewing the story after random story/phrase pressed.
function viewRandomStory(){
    storymaker.textContent = story.join(''); // joins the phrases/words from storyColumn and sets textCOmtent in the storymaker, will join all the phrases into a story sentence.
    storymaker.style.visibility ='visible';   //now this will make the story sentence visible.
    console.log(storymaker); //for me to view on my console
}


//STEP 6: function for reset - this function is for reseting the whole game and start again.
function resetGameStory(){
    storymaker.textContent = ''; // this will show texts empty now.
    console.log(story); //for me to view on my console
    return storymaker; //return the emptytext
}
   

//STEP 7: function for suprise - this function is for a random words kept together wthout pressing the columns/rows buttons, just randomly generates. 
function supriseRandomStory(){
   //my notes: use randomValueArray() to generate values for new variables.
   //this will put random phrases pick from each column
   storymaker = [
    randomValueArray(column1),
    randomValueArray(column2),
    randomValueArray(column3),
    randomValueArray(column4),
    randomValueArray(column5)
   ];
   console.log(storymaker); //for me to view on my console

   //now this will make the story sentence visible.
   storymaker.style.visibility ='visible'; 
   console.log(storymaker); //for me to view on my console

   return storymaker;
}

//my own notes: now after creating all functions will have to link with the buttons. (now work with the buttons)

//STEP 8: function to for the buttons and with event listeners
//my notes: used onclick for the button 

function storyMakerGame(){
    //8a. first target the buttons with the functions
    //my notes: re: from the targetted game (.game-story) to target onclick

    button1.onclick = function(){
        selectedRowColumn(1)
    }
    button2.onclick = function(){
        selectedRowColumn(2)
    }
    button3.onclick = function(){
        selectedRowColumn(3)
    }
    button4.onclick = function(){
        selectedRowColumn(4)
    }
    button5.onclick = function(){
        selectedRowColumn(5)
    }    

    //8b: now add eventlistener for the buttons (reset, suprise, & view)
    document.querySelector('.view').addEventListener('click',viewRandomStory);
    document.querySelector('.reset').addEventListener('click',resetGameStory);
    document.querySelector('.suprise').addEventListener('click',supriseRandomStory);
}




