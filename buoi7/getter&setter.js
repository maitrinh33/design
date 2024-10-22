class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if(newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.log("Bán kính phải là một số dương.");
        }
    }

    calculateArea() {
        return Math.PI * this._radius * this._radius;
    }
}

let circle = new Circle(5);
console.log("Bán kính ban đầu: " + circle.radius);

circle.radius = 10;
console.log("Bán kính mới: " + circle.radius);

circle.radius = -3;
