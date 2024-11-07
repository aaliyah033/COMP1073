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
    if(this.size){
        switch(this.size){
            case 'small':
                smoothieInformation += `Your smoothie size is ${this.size} `;
                break;
            case 'medium':
                smoothieInformation += `Your smoothie size is ${this.size} `;
                break;
            case 'large':
                smoothieInformation += `Your smoothie size is ${this.size} `;
                break;
            default:
                smoothieInformation += `Your smoothie size is ${this.size} `;
        }
    }
    //Targeting the fruit
    if(this.fruit){
        switch(this.fruit){
            case 'banana':
                smoothieInformation += `Your smoothie fruit is ${this.fruit} `;
                break;
            case 'strawberry':
                smoothieInformation += `Your smoothie fruit is ${this.fruit} `;
                break;
            case 'mango':
                smoothieInformation += `Your smoothie fruit is ${this.fruit} `;
                break;
            case 'blueberry':
                smoothieInformation += `Your smoothie fruit is ${this.fruit} `;
                break;
            case 'green':
                smoothieInformation += `Your smoothie fruit is ${this.fruit} `;
                break;
            case 'chocolate':
                smoothieInformation += `Your smoothie fruit is ${this.fruit} `;
                break;

            default:
                smoothieInformation += `Your smoothie fruit is ${this.fruit} `;         
        }
    }
    //Targeting the topping
    if(this.topping){
        switch(this.topping){
            case 'chai-seeds':
                smoothieInformation += `Your smoothie protein is ${this.topping} `;
                break;
            case 'tapioca':
                smoothieInformation += `Your smoothie protein is ${this.topping} `;
                break;
            case 'mango-chunks':
                smoothieInformation += `Your smoothie protein is ${this.topping} `;
                break;
            case 'grass-jelly':
                smoothieInformation += `Your smoothie protein is ${this.topping} `;
                break;
            default:
                smoothieInformation += `Your smoothie protein is ${this.topping} `;      
        }

    }
    //Targeting the liquid
    if(this.liquid){
        switch(this.liquid){
            case 'lactose-free milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid} `;
                break;
            case 'full-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid} `;
                break;
            case 'almond-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid} `;
                break;
            case 'oat-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid} `;
                break;
            case 'soy-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid} `;
                break;
            case 'coconut-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid} `;
                break;
            default:
                smoothieInformation += `Your smoothie liquid is ${this.liquid} `;

        }
    }
    //Targeting the booster
    if(this.booster){
        switch(this.booster){
            case 'Combo':
                smoothieInformation += `Your smoothie booster is ${this.booster} `;
                break;
            case 'Energy':
                smoothieInformation += `Your smoothie booster is ${this.booster} `;
                break;
            case 'Vitamin':
                smoothieInformation += `Your smoothie booster is ${this.booster} `;
                break;
            case 'Power':
                smoothieInformation += `Your smoothie booster is ${this.booster} `;
                break;
            case 'Density':
                smoothieInformation += `Your smoothie booster is ${this.booster} `;
                break;
            default:
                smoothieInformation += `Your smoothie booster is ${this.booster} `;
        }
    }
    //Targeting the Ice
    if(this.ice){
        switch(this.ice){
            case 'no"':
                smoothieInformation += `Your smoothie has no ice `;
                break;
            case 'regular':
                smoothieInformation += `Your smoothie has regular ice`;
                break;
            case 'extra':
                smoothieInformation += `Your smoothie has extra ice `;
                break;
            default:
                smoothieInformation += `Your smoothie has no ice `;
        }
    }
    // STEP FIVE: to make the paraghraph visible from the user chose
   //NOTE: updating the paraghraph using textCOntent and visability
   //from line 31-  <p id="smoothie-order"></p>
   document.getElementById("smoothie-order").textContent = smoothieInformation;
   document.getElementById("smoothie-order").style.visibility = "visible";
   console.log(smoothieInformation); //show on console
    }
}

//STEP SIX: Targeting the order button 
document.getElementById("order").addEventListener("click", function(){
    //STEP SEVEN: as well as taregting the clicked values
    //NOTE: using the values from the radio and checkbox
    var fruit = document.querySelector('input[name="fruit"]:checked');
    var booster = document.querySelector('input[name="booster"]:checked');
    var ice = document.querySelector('input[name="ice"]:checked');
    var topping = document.querySelector('input[name="topping"]:checked');
    var liquid = document.querySelector('input[name="liquid"]:checked');
    var size = document.querySelector('input[name="size"]:checked');

    //adding an if statement that will check if nothing and will set value --- this to fix and get the output
    if(fruit !== null){
        fruit = fruit.value;
        }
        else{
            fruit = '';
            }
    if(booster !== null){
        booster = booster.value;
        }
        else{booster = ''; }
    if(ice !== null){
        ice = ice.value;
        }
        else{ice = ''; }
    if(topping !== null){
        topping = topping.value;
        }
        else{topping = ''; }
    if(liquid !== null){
        liquid = liquid.value;
        }
        else{liquid = ''; }
    if(size !== null){
        size = size.value;
        }
        else{size = ''; }           
    
    // STEP EIGHT: after being accesed from the objects shows order information
    //from class Smoothie Instatiate  based on the  constructor - reference from coffee.js (step2)
    let smoothie = new Smoothie(size,fruit,liquid,topping,booster,ice);
    smoothie.getOrderSmoothie();
  

});

    




