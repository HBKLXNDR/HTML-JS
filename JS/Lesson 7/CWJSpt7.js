function KarlBenz (model,brand,year,max_speed,engine) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.max_speed = max_speed;
    this.engine = engine;

    this.drive = function () {
        console.log(`We drive with current speed ${this.max_speed} per hour`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.newMaxSpeeder = function (newSpeed) {
        this.max_speed = this.max_speed + newSpeed;
    };
    this.yearChanger = function (newValue) {
        this.year = newValue;
    };
    this.engineChanger = function (changeEngine){
        this.engine = changeEngine;
    }
};
let CarCreator = new KarlBenz('Marcedes-Benz', 'Germany', 2007, 150, 2.0);
console.log(CarCreator);
CarCreator.drive();
CarCreator.info();
CarCreator.newMaxSpeeder(150);
CarCreator.drive();
CarCreator.yearChanger(2019);
CarCreator.engineChanger(2.5);
CarCreator.info();
console.log(CarCreator);
