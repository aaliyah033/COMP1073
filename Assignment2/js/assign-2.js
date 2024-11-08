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
    var smoothieInformation ="This is your order details:\n\n";

    //STEP FOUR: an if statement that will checks if user has pressed on the buttons, and since i have some ino for user to choose i kept switch statement so it chechks which is chosen and will add statement to the string variable 
    
    //Targeting the size  
    if(this.size){
        switch(this.size){
            case 'small':
                smoothieInformation += `Your smoothie size is ${this.size}\n\n `;
                break;
            case 'medium':
                smoothieInformation += `Your smoothie size is ${this.size}\n\n `;
                break;
            case 'large':
                smoothieInformation += `Your smoothie size is ${this.size}\n\n `;
                break;
            default:
                smoothieInformation += `Your smoothie size is ${this.size}\n\n `;
        }
    }
    //Targeting the fruit
    if(this.fruit){
        switch(this.fruit){
            case 'banana':
                smoothieInformation += `Your smoothie fruit is ${this.fruit}\n\n `;
                break;
            case 'strawberry':
                smoothieInformation += `Your smoothie fruit is ${this.fruit}\n\n `;
                break;
            case 'mango':
                smoothieInformation += `Your smoothie fruit is ${this.fruit}\n\n `;
                break;
            case 'blueberry':
                smoothieInformation += `Your smoothie fruit is ${this.fruit}\n\n `;
                break;
            case 'green':
                smoothieInformation += `Your smoothie fruit is ${this.fruit}\n\n `;
                break;
            case 'chocolate':
                smoothieInformation += `Your smoothie fruit is ${this.fruit}\n\n `;
                break;

            default:
                smoothieInformation += `Your smoothie fruit is ${this.fruit}\n\n `;         
        }
    }
    //Targeting the topping
    if(this.topping){
        switch(this.topping){
            case 'chai-seeds':
                smoothieInformation += `Your smoothie protein is ${this.topping}\n\n `;
                break;
            case 'tapioca':
                smoothieInformation += `Your smoothie protein is ${this.topping}\n\n `;
                break;
            case 'mango-chunks':
                smoothieInformation += `Your smoothie protein is ${this.topping}\n\n `;
                break;
            case 'grass-jelly':
                smoothieInformation += `Your smoothie protein is ${this.topping}\n\n `;
                break;
            default:
                smoothieInformation += `Your smoothie protein is ${this.topping}\n\n `;      
        }

    }
    //Targeting the liquid
    if(this.liquid){
        switch(this.liquid){
            case 'lactose-free milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid}\n\n `;
                break;
            case 'full-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid}\n\n `;
                break;
            case 'almond-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid}\n\n `;
                break;
            case 'oat-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid}\n\n `;
                break;
            case 'soy-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid}\n\n `;
                break;
            case 'coconut-milk':
                smoothieInformation += `Your smoothie liquid is ${this.liquid}\n\n `;
                break;
            default:
                smoothieInformation += `Your smoothie liquid is ${this.liquid}\n\n `;

        }
    }
    //Targeting the booster
    if(this.booster){
        switch(this.booster){
            case 'Combo':
                smoothieInformation += `Your smoothie booster is ${this.booster}\n\n `;
                break;
            case 'Energy':
                smoothieInformation += `Your smoothie booster is ${this.booster}\n\n `;
                break;
            case 'Vitamin':
                smoothieInformation += `Your smoothie booster is ${this.booster}\n\n `;
                break;
            case 'Power':
                smoothieInformation += `Your smoothie booster is ${this.booster}\n\n `;
                break;
            case 'Density':
                smoothieInformation += `Your smoothie booster is ${this.booster}\n\n `;
                break;
            default:
                smoothieInformation += `Your smoothie booster is ${this.booster}\n\n `;
        }
    }
    //Targeting the Ice
    if(this.ice){
        switch(this.ice){
            case 'no"':
                smoothieInformation += `Your smoothie has no ice \n\n `;
                break;
            case 'regular':
                smoothieInformation += `Your smoothie has regular ice \n\n`;
                break;
            case 'extra':
                smoothieInformation += `Your smoothie has extra ice \n\n`;
                break;
            default:
                smoothieInformation += `Your smoothie has no ice \n\n `;
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
    var fruit = document.getElementsByName("fruit");
    var booster = document.getElementsByName("booster");
    var ice = document.getElementsByName("ice");
    var topping = document.getElementsByName("topping");
    var liquid = document.getElementsByName("liquid");
    var size = document.getElementsByName("size");

    //STEP SEVEN B: I now tried intializing to anther empty string, then a loop that loops through each checked box and if checked then stores to the empty string follwed with comma
    //NOTES: this is for access the paragraph displaying the information
    var fruitInfo = "";
    for (var i = 0; i < fruit.length; i++) {
        if (fruit[i].checked) {
            fruitInfo += fruit[i].value + ", "; 
        }
    }
    console.log(fruitInfo); //to check if working
    

    var boosterInfo = "";
    for (var i = 0; i < booster.length; i++) {
        if (booster[i].checked) {
            boosterInfo += booster[i].value + ", "; 
        }
    }
    console.log(boosterInfo);//to check if working
    

    var toppingInfo = "";
    for (var i = 0; i < topping.length; i++) {
        if (topping[i].checked) {
            toppingInfo += topping[i].value + ", "; 
        }
    }
    console.log(toppingInfo);//to check if working


    var liquidInfo = "";
    for (var i = 0; i < liquid.length; i++) {
        if (liquid[i].checked) {
            liquidInfo += liquid[i].value+ ", ";
        }
    }
    console.log(liquidInfo);//to check if working

    var sizeInfo = "";
    for (var i = 0; i < size.length; i++) {
        if (size[i].checked) {
            sizeInfo += size[i].value + ", ";
          
        }
    }
    console.log(sizeInfo);//to check if working

    var iceInfo = "";
    for (var i = 0; i < ice.length; i++) {
        if (ice[i].checked) {
            iceInfo += ice[i].value+ ", ";
        }
    }
    console.log(iceInfo);//to check if working
      
    
    // STEP EIGHT: after being accesed from the objects shows order information
    //from class Smoothie Instatiate  based on the  constructor - reference from coffee.js (step2)
    let smoothie = new Smoothie(sizeInfo,fruitInfo,liquidInfo,toppingInfo,boosterInfo,iceInfo);
    smoothie.getOrderSmoothie();
    console.log(smoothie);//to check if working
  

});

    




