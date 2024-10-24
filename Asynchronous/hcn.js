function dthcn(a, b, callback){
    const dt = a * b;
    callback(dt);
}

function display(dt) {
    console.log("Ket qua la: " + dt);

}

dthcn(5, 6, display)