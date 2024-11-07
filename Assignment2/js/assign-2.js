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
    
    //Targeting the size  
    if(size){
        switch(size){
            case 'small':
                smoothieInformation += `Your smoothie size is ${size} `;
                break;
            case 'medium':
                smoothieInformation += `Your smoothie size is ${size} `;
                break;
            case 'large':
                smoothieInformation += `Your smoothie size is ${size} `;
                break;
            default:
                smoothieInformation += `Your smoothie size is ${size} `;
        }
    }
    //Targeting the fruit
    if(fruit){
        switch(fruit){
            case 'banana':
                smoothieInformation += `Your smoothie fruit is ${fruit} `;
                break;
            case 'strawberry':
                smoothieInformation += `Your smoothie fruit is ${fruit} `;
                break;
            case 'mango':
                smoothieInformation += `Your smoothie fruit is ${fruit} `;
                break;
            case 'blueberry':
                smoothieInformation += `Your smoothie fruit is ${fruit} `;
                break;
            case 'green':
                smoothieInformation += `Your smoothie fruit is ${fruit} `;
                break;
            case 'chocolate':
                smoothieInformation += `Your smoothie fruit is ${fruit} `;
                break;

            default:
                smoothieInformation += `Your smoothie fruit is ${fruit} `;         
        }
    }
    //Targeting the topping
    if(topping){
        switch(topping){
            case 'chai-seeds':
                smoothieInformation += `Your smoothie protein is ${topping} `;
                break;
            case 'tapioca':
                smoothieInformation += `Your smoothie protein is ${topping} `;
                break;
            case 'mango-chunks':
                smoothieInformation += `Your smoothie protein is ${topping} `;
                break;
            case 'grass-jelly':
                smoothieInformation += `Your smoothie protein is ${topping} `;
                break;
            default:
                smoothieInformation += `Your smoothie protein is ${topping} `;      
        }

    }
    //Targeting the liquid
    if(liquid){
        switch(liquid){
            case 'lactose-free milk':
                smoothieInformation += `Your smoothie liquid is ${liquid} `;
                break;
            case 'full-milk':
                smoothieInformation += `Your smoothie liquid is ${liquid} `;
                break;
            case 'almond-milk':
                smoothieInformation += `Your smoothie liquid is ${liquid} `;
                break;
            case 'oat-milk':
                smoothieInformation += `Your smoothie liquid is ${liquid} `;
                break;
            case 'soy-milk':
                smoothieInformation += `Your smoothie liquid is ${liquid} `;
                break;
            case 'coconut-milk':
                smoothieInformation += `Your smoothie liquid is ${liquid} `;
                break;
            default:
                smoothieInformation += `Your smoothie liquid is ${liquid} `;

        }
    }
    //Targeting the booster
    if(booster){
        switch(booster){
            case 'Combo':
                smoothieInformation += `Your smoothie booster is ${booster} `;
                break;
            case 'Energy':
                smoothieInformation += `Your smoothie booster is ${booster} `;
                break;
            case 'Vitamin':
                smoothieInformation += `Your smoothie booster is ${booster} `;
                break;
            case 'Power':
                smoothieInformation += `Your smoothie booster is ${booster} `;
                break;
            case 'Density':
                smoothieInformation += `Your smoothie booster is ${booster} `;
                break;
            default:
                smoothieInformation += `Your smoothie booster is ${booster} `;
        }
    }
    //Targeting the Ice
    if(ice){
        switch(ice){
            case 'no"':
                smoothieInformation += `Your smoothie has ice `;
                break;
            case 'regular':
                smoothieInformation += `Your smoothie does not have ice `;
                break;
            case 'extra':
                smoothieInformation += `Your smoothie does not have ice `;
                break;
            default:
                smoothieInformation += `Your smoothie has ice `;
        }
    }
    // STEP FIVE: to make the paraghraph visible from the user chose
   //NOTE: updating the paraghraph using textCOntent and visability
   //from line 31-  <p id="smoothie-order"></p>
   document.getElementById("smoothie-order").textContent = smoothieInformation;
   document.getElementById("smoothie-order").style.visability = "visible";
   console.log(smoothieInformation); //show on console
    }
}

//STEP SIX: Targeting the order button 
document.getElementById("order").addEventListener("click", function(){
    //STEP SEVEN: as well as taregting the clicked values
    //NOTE: using the values from the radio and checkbox
    var fruit = document.querySelector('input[name="fruit"]');
    var booster = document.querySelector('input[name="booster"]');
    var ice = document.querySelector('input[name="ice"]');
    var quantity = document.querySelector('input[name="quantity"]');
    var topping = document.querySelector('input[name="topping"]');
    var liquid = document.querySelector('input[name="liquid"]');
    var size = document.querySelector('input[name="size"]');
    
    // STEP EIGHT: after being accesed from the objects shows order information
    //from class Smoothie Instatiate  based on the  constructor - reference from coffee.js (step2)
    let smoothie = new Smoothie(size,fruit,liquid,topping,booster,ice,quantity);
    smoothie.getOrderSmoothie();
  

});

    




