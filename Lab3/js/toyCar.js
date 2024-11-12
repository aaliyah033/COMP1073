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
function displayInventory(Car){
  const outputInventory = document.getElementById('result-view');

  //STEP 3b: will create so to append the details - basically for the heading on the details part
  //notes: refrenece to lesson-9
  const heading = document.createElement('h3');
  heading.textContent = "Toy Car Inventory Details";
  outputInventory.appendChild(heading);
  
  //STEP 3c: adding the name for detail display
   if (Car.name){
    const name = document.createElement('p');
    name.textContent = `Name: ${Car.name}`;
    outputInventory.appendChild(name);
   }
   if (Car.color){
    const color = document.createElement('p');
    color.textContent = `Color: ${Car.color}`;
    outputInventory.appendChild(color);
   }
   if (Car.brand){
    const brand = document.createElement('p');
    brand.textContent = `Brand: ${Car.brand}`;
    outputInventory.appendChild(brand);

   }
   if (Car.manufacturer){
    const manufacturer = document.createElement('p');
    manufacturer.textContent = `Manufacturer: ${Car.manufacturer}`;
    outputInventory.appendChild(manufacturer);
   }
   if (Car.scale){
    const scale = document.createElement('p');
    scale.textContent = `scale: ${Car.scale}`;
    outputInventory.appendChild(scale);
   }
   if (Car.material){
    const material = document.createElement('p');
    material.textContent = `material: ${Car.material}`;
    outputInventory.appendChild(material);
   }
   if (Car.modelNumber){
    const modelNumber = document.createElement('p');
    modelNumber.textContent = `modelNumber: ${Car.modelNumber}`;
    outputInventory.appendChild(modelNumber);
   }
   if (Car.tire){
    const tire = document.createElement('p');
    tire.textContent = `Price: ${Car.tire}`;
    outputInventory.appendChild(tire);
   }
   if (Car.country){
    const country = document.createElement('p');
    country.textContent = `country: ${Car.country}`;
    outputInventory.appendChild(country);
   }
   if (Car.year){
    const year = document.createElement('p');
    year.textContent = `year: ${Car.year}`;
    outputInventory.appendChild(year);
   }
   if (Car.sku){
    const sku = document.createElement('p');
    sku.textContent = `sku: ${Car.sku}`;
    outputInventory.appendChild(sku);
   }
   if (Car.seats){
    const seats = document.createElement('p');
    seats.textContent = `seats: ${Car.seats}`;
    outputInventory.appendChild(seats);
   }
   if (Car.trunk){
    const trunk = document.createElement('p');
    trunk.textContent = `trunk: ${Car.trunk}`;
    outputInventory.appendChild(trunk);
   }
   if (Car.doors){
    const doors = document.createElement('p');
    doors.textContent = `doors: ${Car.doors}`;
    outputInventory.appendChild(doors);
   }
}

//STEP FOUR: now add event listener for the view button of the details side
document.getElementById('view').addEventListener('click', function(){
  //targeting the drop down 
  const dropdownValue = document.getElementById('choose-car');

  //STEP 4b: will find the car from the dropdown
  let selectCar = null; //so that its empty when showing
  switch (dropdownValue) {
    case "car1":
      selectCar = car1;
      break;
      case "car2":
        selectCar = car2;
        break;
        case "car3":
          selectCar = car3;
          break;
  }
 //STEP 4c: display the car details
 displayInventory(selectCar);

});

//STEP FIVE: now for the radios and submit buttons 
//note: but in a funvtion 
document.getElementById("submit-btn").addEventListener("click", function(){
  //STEP 5a: get the radio buttons
  const customizeValue = document.getElementById("choose-car");
  let selectCar = null; 
  switch (customizeValue) {
    case "car1":
      selectCar = car1;
      break;
    case "car2":
      selectCar = car2;
      break;
      case "car3":
        selectCar = car3;
        break;
  }
  //STEP 5b: get the radio buttons
  let selectColor = null;
  let selectBrands = null;
  let selectYears = null;
  let selectScale = null;
  let selectCountry = null;

  //STEP 5c: targeting each radio 

  //for color radio
  if (document.getElementById('redColor')) {
    selectedColor = 'red';
    } else if (document.getElementById('blueColor')) {
    selectedColor = 'blue';
    } else if (document.getElementById('greenColor')) {
    selectedColor = 'green';
    } else if (document.getElementById('purpleColor')) {
    selectedColor = 'purple';
    } else if (document.getElementById('blackColor')) {
    selectedColor = 'black';
    }

    //for brand radio
    if (document.getElementById('brand1')) {
      selectedBrand = 'Porche';
      } else if (document.getElementById('brand2')) {
      selectedBrand = 'Toyota';
      } else if (document.getElementById('brand3')) {
      selectedBrand = 'LandRover';
      } else if (document.getElementById('brand4')) {
      selectedBrand = 'BMW';
      } else if (document.getElementById('brand5')) {
      selectedBrand = 'Jeep';
      } else if (document.getElementById('brand6')) {
      selectedBrand = 'Ford';
      }

      //for year radio
    if (document.getElementById('year').value === '2024') {
        selectedYear = '2024';
        } else if (document.getElementById('year').value === '2011') {
        selectedYear = '2011';
        } else if (document.getElementById('year').value === '2003') {
        selectedYear = '2003';
        } else if (document.getElementById('year').value === '1990') {
        selectedYear = '1990';
        }

        // for scale radio --- 
    if (document.getElementById('scale1').value === '1:18') {
      selectedScale = '1:18';
      } else if (document.getElementById('scale1').value === '1:24') {
      selectedScale = '1:24';
      } else if (document.getElementById('scale1').value === '1:32') {
      selectedScale = '1:32';
      } else if (document.getElementById('scale1').value === '1:43') {
      selectedScale = '1:43';
      } else if (document.getElementById('scale1').value === '1:64') {
      selectedScale = '1:64';
      }

      // for Country radio
    if (document.getElementById('country1')) {
      selectedCountry = 'USA';
      } else if (document.getElementById('country2')) {
      selectedCountry = 'Canada';
      } else if (document.getElementById('country2')) {
      selectedCountry = 'Germany';
      } else if (document.getElementById('country3')) {
      selectedCountry = 'Japan';
      } else if (document.getElementById('country4')) {
      selectedCountry = 'England';
      }

      //STEP SIX: now to update the properties of the car 
      if ( selectCar){
        selectCar.color = selectColor
      }
      if (selectCar){
        selectCar.year = selectedYear
      }
      if (selectCar){
        selectCar.brand = selectedBrand
      }
      if (selectCar){
        selectCar.scale = selectedScale
      }
      if (selectCar){
        selectCar.country = selectedCountry
      }

      displayInventory(selectCar);
})

//STEP SEVEN: targeting the reset button to clear everything
//notes: put in function
function resetEverything(){
  
  //target each radio 
  document.getElementById('color-red').checked = false;
    document.getElementById('color-blue').checked = false;
    document.getElementById('color-green').checked = false;
    document.getElementById('color-yellow').checked = false;
    document.getElementById('color-purple').checked = false;

    document.getElementById('brand-toyota').checked = false;
    document.getElementById('brand-porsche').checked = false;
    document.getElementById('brand-bmw').checked = false;

    document.getElementById('year-2002').checked = false;
    document.getElementById('year-1990').checked = false;
    document.getElementById('year-2008').checked = false;

    document.getElementById('country-germany').checked = false;
    document.getElementById('country-usa').checked = false;
    document.getElementById('country-canada').checked = false;
    document.getElementById('country-japan').checked = false;

    document.getElementById('scale-18').checked = false;
    document.getElementById('scale-24').checked = false;
    document.getElementById('scale-32').checked = false;
    document.getElementById('scale-43').checked = false;
    document.getElementById('scale-64').checked = false;

//now for the deatils as well 
const inventoryDisplay = document. getElementById('result-view');
while (inventoryDisplay.firstChild){
  inventoryDisplay.removeChild(inventoryDisplay.firstChild); // used the firstchild to remove all elements shown/used
}

}

//STEP EIGHT: adding the event listener to the reset button
document.getElementById('reset-button').addEventListener('click', resetEverything);






