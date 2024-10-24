//Ham A co mot tham so callback
function A(callback){
    const kq = 5+6;
    callback(kq);

}

function B(kq) {
    //code
    console.log('Hello kq: ' + kq);
}

//Goi ham B va truyen tham so la ham A
A(B);
