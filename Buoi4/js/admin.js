var productAdmin = function() {
    var listproduct1 = ""; // declare listproduct1 once
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        listproduct1 += '<tr>';
        listproduct1 += '<td>' + data.id + '</td>';
        listproduct1 += '<td>' + data.name + '</td>';
        listproduct1 += '<td><img src="../img/' + data.img + '" alt="" style="width: 50px;"></td>';
        listproduct1 += '<td>' + data.price + '</td>';
        listproduct1 += '<td>' + data.description + '</td>'; // Show description
        listproduct1 += '<td><button onclick="updateProduct(' + i + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
        listproduct1 += '<button onclick="deleteProduct(' + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listproduct1 += '</tr>';
    }
    document.getElementById("product-admin").innerHTML = listproduct1; // update the HTML content once
};

var addProduct = function() {
    var Product = {
        id: "SP" + parseInt(product.length + 1),
        name: document.getElementById("name").value,
        img: document.getElementById("img").value,
        price: document.getElementById("price").value,
        description: document.getElementById("des").value // Use correct description input
    };
    product.push(Product);
    localStorage.setItem('listProduct', JSON.stringify(product));
    productAdmin(); // Re-render the product table instead of reloading
};

var deleteProduct = function(i) {
    product.splice(i, 1);
    localStorage.setItem('listProduct', JSON.stringify(product));
    productAdmin(); // Re-render the product table instead of reloading
};

var updateProduct = function(i) {
    var k = product[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("priced").value = k.price;
    document.getElementById("description").value = k.description; // Populate description
    document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + i + ')"> Đồng ý</button>';
};

var submitUpdate = function(i) {
    var k = product[i];
    k.id = document.getElementById("idd").value;
    k.name = document.getElementById("named").value;
    k.img = document.getElementById("imgd").value;
    k.price = document.getElementById("priced").value;
    k.description = document.getElementById("description").value; // Update description
    localStorage.setItem('listProduct', JSON.stringify(product));
    productAdmin(); // Re-render the product table instead of reloading
};

var userAdmin = function() {
    var listproduct = "";
    for (var i in user) {
        var data = JSON.parse(JSON.stringify(user[i]));
        listproduct += '<tr>';
        listproduct += '<td>' + data.id + '</td>';
        listproduct += '<td>' + data.username + '</td>';
        listproduct += '<td>' + data.email + '</td>';
        listproduct += '<td><button onclick="updateProduct(' + i + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
        listproduct += '<button onclick="deleteProduct(' + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listproduct += '</tr>';
    }
    document.getElementById("user-admin").innerHTML = listproduct;
};

productAdmin();
userAdmin();
