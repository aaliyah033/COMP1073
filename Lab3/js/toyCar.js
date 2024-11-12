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
  new Car("Ford Bronco","yellow","Ford","Canada","1:24","travel car","plastic","31530OR","4","2021","31530OR-MAI-ORANGE","4","Yes","2"),
  new Car("super Beetle Convertable","blue","Volkswagen","1:18","classic car","copper","680334688657","4","Germny","1957","JLSP107A-JL-BLUE","2","NO","2"),
  new Car("Audi RS","White","Audi","USA","1:18","sports car","plastic","680334691930","4","USA","2020","GT302-GT-WHITE","4","Yes","4")
];
