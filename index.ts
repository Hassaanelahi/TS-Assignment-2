abstract class Vehicle {
  private make: string;
  private model: string;
  private year: number;
  private rented: boolean;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }

  // Accessor methods
  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  isRented(): boolean {
    return this.rented;
  }

  // Mutator method
  setRented(rented: boolean): void {
    this.rented = rented;
  }

  // Abstract method
  abstract rentalRate(): number;

  // Methods
  rent(): void {
    if (this.isRented()) {
      console.log("Sorry, this vehicle is already rented.");
    } else {
      console.log("You have rented this vehicle.");
      this.setRented(true);
    }
  }

  returnVehicle(): void {
    if (this.isRented()) {
      console.log("Thank you for returning this vehicle.");
      this.setRented(false);
    } else {
      console.log("This vehicle is not rented.");
    }
  }
}

class Car extends Vehicle {
  private numSeats: number;

  constructor(make: string, model: string, year: number, numSeats: number) {
    super(make, model, year);
    this.numSeats = numSeats;
  }

  // Additional method
  getNumSeats(): number {
    return this.numSeats;
  }

  // Override abstract method
  rentalRate(): number {
    return 500;
  }
}

class Truck extends Vehicle {
  private cargoCapacity: number;

  constructor(make: string, model: string, year: number, cargoCapacity: number) {
    super(make, model, year);
    this.cargoCapacity = cargoCapacity;
  }

  // Additional method
  getCargoCapacity(): number {
    return this.cargoCapacity;
  }

  // Override abstract method
  rentalRate(): number {
    return 1000;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(make: string, model: string, year: number, engineSize: number) {
    super(make, model, year);
    this.engineSize = engineSize;
  }

  // Additional method
  getEngineSize(): number {
    return this.engineSize;
  }

  // Override abstract method
  rentalRate(): number {
    return 100;
  }
}

// Test classes
const car = new Car("Honda", "Civic", 2023, 5);
const truck = new Truck("Ford", "F200", 2023, 1000000);
const motorcycle = new Motorcycle("Yamaha", "YBR125", 2022, 1500);

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
