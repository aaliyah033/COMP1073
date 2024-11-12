const target1 = document.querySelector(".car-Center");

// STEP ONE: Add car constructors, object properties 
// notes: --- try finding 10-15 --- ref: coffee.js
class ToyCars {
    constructor (name, color, brand, manufacturer, scale, material, modelNumber, tire, country, year, sku, seats, trunk, doors){
      this.name = name;
      this.color = color;
      this.brand = brand;
      this.manufacturer = manufacturer;
      this.scale = scale;
      this.material = material;
      this.modelNumber = modelNumber;
      this.tire = tire;
      this.country = country;
      this.year = year;
      this.sku = sku;
      this.seats = seats;
      this.trunk = trunk;
      this.doors = doors;
      }
}

//STEP TWO: default car inventory
var inventoryCars=[
  new ToyCars("Ford Bronco","yellow","Ford","Canada","1:24","travel car","plastic","31530OR","4","2021","31530OR-MAI-ORANGE","4","Yes","2"),
  new ToyCars("super Beetle Convertable","blue","Volkswagen","1:18","classic car","copper","680334688657","4","Germny","1957","JLSP107A-JL-BLUE","2","NO","2"),
  new ToyCars("Audi RS","White","Audi","USA","1:18","sports car","plastic","680334691930","4","USA","2020","GT302-GT-WHITE","4","Yes","4")
];

//STEP THREE: Add a function to display the inventory details
function displayInventory(ToyCars){
  const outputInventory = document.getElementById('result-view');

  while (outputInventory.firstChild){
    outputInventory.removeChild(outputInventory.firstChild); //used this to remove the first child to clear and make it work
  }
  //STEP 3b: will create so to append the details - basically for the heading on the details part
  //notes: refrenece to lesson-9
  const heading = document.createElement('h3');
  heading.textContent = "Toy Car Inventory Details";
  outputInventory.appendChild(heading);
  
  //STEP 3c: adding the name for detail display
   if (ToyCars.name){
    const name = document.createElement('p');
    name.textContent = `Name: ${ToyCars.name}`;
    outputInventory.appendChild(name);
   }
   if (ToyCars.color){
    const color = document.createElement('p');
    color.textContent = `Color: ${ToyCars.color}`;
    outputInventory.appendChild(color);
   }
   if (ToyCars.brand){
    const brand = document.createElement('p');
    brand.textContent = `Brand: ${ToyCars.brand}`;
    outputInventory.appendChild(brand);

   }
   if (ToyCars.manufacturer){
    const manufacturer = document.createElement('p');
    manufacturer.textContent = `Manufacturer: ${ToyCars.manufacturer}`;
    outputInventory.appendChild(manufacturer);
   }
   if (ToyCars.scale){
    const scale = document.createElement('p');
    scale.textContent = `scale: ${ToyCars.scale}`;
    outputInventory.appendChild(scale);
   }
   if (ToyCars.material){
    const material = document.createElement('p');
    material.textContent = `material: ${ToyCars.material}`;
    outputInventory.appendChild(material);
   }
   if (ToyCars.modelNumber){
    const modelNumber = document.createElement('p');
    modelNumber.textContent = `modelNumber: ${ToyCars.modelNumber}`;
    outputInventory.appendChild(modelNumber);
   }
   if (ToyCars.tire){
    const tire = document.createElement('p');
    tire.textContent = `Price: ${ToyCars.tire}`;
    outputInventory.appendChild(tire);
   }
   if (ToyCars.country){
    const country = document.createElement('p');
    country.textContent = `country: ${ToyCars.country}`;
    outputInventory.appendChild(country);
   }
   if (ToyCars.year){
    const year = document.createElement('p');
    year.textContent = `year: ${ToyCars.year}`;
    outputInventory.appendChild(year);
   }
   if (ToyCars.sku){
    const sku = document.createElement('p');
    sku.textContent = `sku: ${ToyCars.sku}`;
    outputInventory.appendChild(sku);
   }
   if (ToyCars.seats){
    const seats = document.createElement('p');
    seats.textContent = `seats: ${ToyCars.seats}`;
    outputInventory.appendChild(seats);
   }
   if (ToyCars.trunk){
    const trunk = document.createElement('p');
    trunk.textContent = `trunk: ${ToyCars.trunk}`;
    outputInventory.appendChild(trunk);
   }
   if (ToyCars.doors){
    const doors = document.createElement('p');
    doors.textContent = `doors: ${ToyCars.doors}`;
    outputInventory.appendChild(doors);
   }
}

//STEP FOUR: now add event listener for the view button of the details side
document.getElementById('view').addEventListener('click', function(){
  //targeting the drop down 
  const dropdownValue = document.getElementById('choose-car').value;

  //STEP 4b: will find the car from the dropdown
  let selectCar = null; //so that its empty when showing
  switch (dropdownValue) {
    case "car1":
      selectCar = inventoryCars[0];
      break;
    case "car2":
      selectCar = inventoryCars[1];
      break;
    case "car3":
      selectCar = inventoryCars[2];
      break;
  }
 //STEP 4c: display the car details
 displayInventory(selectCar);

});

//STEP FIVE: now for the radios and submit buttons 
//note: but in a funvtion 
document.getElementById("submit-btn").addEventListener("click", function(){
  //STEP 5a: get the radio buttons
  const customizeValue = document.getElementById("choose-car").value;
  let selectCar = null; 
  switch (customizeValue) {
    case "car1":
      selectCar = inventoryCars[0];
      break;
    case "car2":
      selectCar = inventoryCars[1];
      break;
    case "car3":
      selectCar = inventoryCars[2];
      break;
  }
  //STEP 5b: get the radio buttons
  let selectColor = null;
  let selectedBrand = null;
  let selectedYear = null;
  let selectedScale = null;
  let selectedCountry = null;

  //STEP 5c: targeting each radio 

  //for color radio
  if (document.getElementById('redColor').checked) {
    selectColor = 'red';
    } else if (document.getElementById('blueColor').checked) {
    selectColor = 'blue';
    } else if (document.getElementById('greenColor').checked) {
    selectColor = 'green';
    } else if (document.getElementById('purpleColor').checked) {
    selectColor = 'purple';
    } else if (document.getElementById('blackColor').checked) {
    selectColor = 'black';
    }

    //for brand radio
    if (document.getElementById('brand1').checked) {
      selectedBrand = 'Porche';
      } else if (document.getElementById('brand2').checked) {
      selectedBrand = 'Toyota';
      } else if (document.getElementById('brand3').checked) {
      selectedBrand = 'LandRover';
      } else if (document.getElementById('brand4').checked) {
      selectedBrand = 'BMW';
      } else if (document.getElementById('brand5').checked) {
      selectedBrand = 'Jeep';
      } else if (document.getElementById('brand6').checked) {
      selectedBrand = 'Ford';
      }

      //for year radio
    if (document.getElementById('year1').checked) {
        selectedYear = '2024';
        } else if (document.getElementById('year2').checked) {
        selectedYear = '2011';
        } else if (document.getElementById('year3').checked) {
        selectedYear = '2003';
        } else if (document.getElementById('year4').checked) {
        selectedYear = '1990';
        }

        // for scale radio --- 
    if (document.getElementById('scale1').checked) {
      selectedScale = '1:18';
      } else if (document.getElementById('scale2').checked) {
      selectedScale = '1:24';
      } else if (document.getElementById('scale3').checked) {
      selectedScale = '1:32';
      } else if (document.getElementById('scale4').checked) {
      selectedScale = '1:43';
      } else if (document.getElementById('scale5').checked) {
      selectedScale = '1:64';
      }

      // for Country radio
    if (document.getElementById('country1').checked) {
      selectedCountry = 'USA';
      } else if (document.getElementById('country2').checked) {
      selectedCountry = 'Canada';
      } else if (document.getElementById('country2').checked) {
      selectedCountry = 'Germany';
      } else if (document.getElementById('country3').checked) {
      selectedCountry = 'Japan';
      } else if (document.getElementById('country4').checked) {
      selectedCountry = 'England';
      }

      //STEP SIX: now to update the properties of the car 
      if (selectCar) {
        if (selectColor !== null) selectCar.color = selectColor;
        if (selectedYear !== null) selectCar.year = selectedYear;
        if (selectedBrand !== null) selectCar.brand = selectedBrand;
        if (selectedScale !== null) selectCar.scale = selectedScale;
        if (selectedCountry !== null) selectCar.country = selectedCountry;
      }

      displayInventory(selectCar);
})

//STEP SEVEN: targeting the reset button to clear everything
//notes: put in function
function resetEverything(){
  
  //target each radio 
  document.getElementById('redColor').checked = false;
    document.getElementById('blueColor').checked = false;
    document.getElementById('greenColor').checked = false;
    document.getElementById('purpleColor').checked = false;
    document.getElementById('blackColor').checked = false;

    document.getElementById('brand1').checked = false;
    document.getElementById('brand2').checked = false;
    document.getElementById('brand3').checked = false;
    document.getElementById('brand4').checked = false;
    document.getElementById('brand5').checked = false;
    document.getElementById('brand6').checked = false;

    document.getElementById('year1').checked = false;
    document.getElementById('year2').checked = false;
    document.getElementById('year3').checked = false;
    document.getElementById('year4').checked = false;

    document.getElementById('country1').checked = false;
    document.getElementById('country2').checked = false;
    document.getElementById('country3').checked = false;
    document.getElementById('country4').checked = false;

    document.getElementById('scale1').checked = false;
    document.getElementById('scale2').checked = false;
    document.getElementById('scale3').checked = false;
    document.getElementById('scale4').checked = false;
    document.getElementById('scale5').checked = false;

//now for the deatils as well 
const inventoryDisplay = document. getElementById('result-view');
while (inventoryDisplay.firstChild){
  inventoryDisplay.removeChild(inventoryDisplay.firstChild); // used the firstchild to remove all elements shown/used
}

}

//STEP EIGHT: adding the event listener to the reset button
document.getElementById('reset-button').addEventListener('click', resetEverything);






