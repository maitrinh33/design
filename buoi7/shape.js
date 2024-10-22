class Shape {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    displayInfo(shapeNumber) {
        console.log(`Shape ${shapeNumber}: Length: ${this.a}, Width: ${this.b}`); 
    }
}

const shape1 = new Shape(40, 20);
const shape2 = new Shape(20, 40);

shape1.displayInfo(1);  // Display shape number 1
shape2.displayInfo(2);  // Display shape number 2
