function KarlBenz (model,brand,year,max_speed,engine) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.max_speed = max_speed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.newMaxSpeed = function (newSpeed) {
        this.max_speed = this.max_speed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
};
let CarCreator = new KarlBenz('Marcedes-Benz', 'Germany', 2007, 150, 2.5);
console.log(CarCreator);
CarCreator.drive();
CarCreator.info();
CarCreator.newMaxSpeed(150);
CarCreator.drive();
CarCreator.changeYear(2019)
CarCreator.info();
CarCreator.addDriver('Marko');
console.log(CarCreator);
