class House {
    constructor()
    {
        this.address = "Dong Da";  // Default value
        this.floors = 2;         // Default value
        this.garage = false;         // Default value

    }
}
    let myHouse1 = new House();
        let add = myHouse1.address;
        let fl = myHouse1.floor;
        let gar = myHouse1.garage;

            add = "Dien Bien Phu";
            console.log(add);

let myHouse2 = new House('1100 Fake St., San francisco CA, USA', 2, false)
console.log(myHouse2);