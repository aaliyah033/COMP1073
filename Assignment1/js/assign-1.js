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
