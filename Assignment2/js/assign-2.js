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
}