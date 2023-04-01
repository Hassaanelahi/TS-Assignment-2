var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    // Accessor methods
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    // Mutator method
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    // Methods
    Vehicle.prototype.rent = function () {
        if (this.isRented()) {
            console.log("Sorry, this vehicle is already rented.");
        }
        else {
            console.log("You have rented this vehicle.");
            this.setRented(true);
        }
    };
    Vehicle.prototype.returnVehicle = function () {
        if (this.isRented()) {
            console.log("Thank you for returning this vehicle.");
            this.setRented(false);
        }
        else {
            console.log("This vehicle is not rented.");
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, numSeats) {
        var _this = _super.call(this, make, model, year) || this;
        _this.numSeats = numSeats;
        return _this;
    }
    // Additional method
    Car.prototype.getNumSeats = function () {
        return this.numSeats;
    };
    // Override abstract method
    Car.prototype.rentalRate = function () {
        return 500;
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, cargoCapacity) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cargoCapacity = cargoCapacity;
        return _this;
    }
    // Additional method
    Truck.prototype.getCargoCapacity = function () {
        return this.cargoCapacity;
    };
    // Override abstract method
    Truck.prototype.rentalRate = function () {
        return 1000;
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, engineSize) {
        var _this = _super.call(this, make, model, year) || this;
        _this.engineSize = engineSize;
        return _this;
    }
    // Additional method
    Motorcycle.prototype.getEngineSize = function () {
        return this.engineSize;
    };
    // Override abstract method
    Motorcycle.prototype.rentalRate = function () {
        return 100;
    };
    return Motorcycle;
}(Vehicle));
// Test classes
var car = new Car("Honda", "Civic", 2023, 5);
var truck = new Truck("Ford", "F200", 2023, 1000000);
var motorcycle = new Motorcycle("Yamaha", "YBR125", 2022, 1500);
console.log(car.getMake());
console.log(car.getModel());
console.log(car.getYear());
console.log(truck.getMake());
console.log(truck.getModel());
console.log(truck.getYear());
console.log(motorcycle.getMake());
console.log(motorcycle.getModel());
console.log(motorcycle.getYear());
car.rent();
car.rent();
truck.returnVehicle();
console.log(car.rentalRate());
console.log(truck.rentalRate());
console.log(motorcycle.rentalRate());
