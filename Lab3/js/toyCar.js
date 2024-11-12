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



