class House {
    constructor (address = 'nowhere') {
        this.address = address;
    }
}
class Mansion extends House {
    constructor (address, floors) {
        super(address);
        this.floors = floors;
    }
}

let mansion1 = new Mansion("Hollywood", 6, "Amanda");
console.log(mansion1.floors);
