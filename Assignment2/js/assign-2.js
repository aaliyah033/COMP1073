//STEP ONE: decalring and initialize the columns
let right = document.querySelector('.right-side');
let left = document.querySelector('.left-side');

//STEP TWO: creating class, objects, and constructors
//NOTE: reerence from class code, step 1 (coffee.js)
class Smoothie {
    size;
    fruit;
    liquid
    topping;
    booster;
    ice;

    constructor(size,fruit,liquid,topping,booster,ice){
        this.size = size;
        this.fruit = fruit;
        this.liquid = liquid;
        this.topping = topping;
        this.booster = booster;
        this.ice = ice;
    }

   //NOTES: from coffee.js - reference class codes line 13
   getOrderSmoothie(){
    //STEP THREE: adding this will be as the string variable for after user choses then it will be stored after this
    var smoothieInformation ="This is your order details:";

    //STEP FOUR: an if statement that will checks if user has pressed on the buttons, and since i have some ino for user to choose i kept switch statement so it chechks which is chosen and will add statement to the string variable 
   }
}

