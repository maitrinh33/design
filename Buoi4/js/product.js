var product = [
    {
        id: "SP1",
        name: "Áo dài thêu họa tiết vtc",
        img: "s11.jpg",
        price: 122000,
        description: "A traditional Vietnamese dress with intricate embroidery."
    },
    {
        id: "SP2",
        name: "Áo dài truyền thống",
        img: "s12.jpg",
        price: 400000,
        description: "A traditional Vietnamese dress with intricate embroidery."
    },
    {
        id: "SP3",
        name: "Áo dài",
        img: "s13.jpg",
        price: 350000,
        description: "A traditional Vietnamese dress."
    },
    {
        id: "SP4",
        name: "Áo dài hiện đại",
        img: "s14.jpg",
        price: 564000,
        description: "A modern take on the traditional dress."
    },
    {
        id: "SP5",
        name: "Váy baggy",
        img: "s21.jpg",
        price: 654000,
        description: "Stylish baggy dress."
    },
    {
        id: "SP6",
        name: "Váy chấm bi trắng",
        img: "s22.jpg",
        price: 123000,
        description: "White polka dot dress."
    },
    {
        id: "SP7",
        name: "Váy xanh",
        img: "s23.jpg",
        price: 345000,
        description: "A beautiful blue dress."
    },
    {
        id: "SP8",
        name: "Váy màu cam",
        img: "s24.jpg",
        price: 258000,
        description: "Bright orange dress."
    },
];

// Save the product array to local storage
function Save() {
    localStorage.setItem('listProduct', JSON.stringify(product));
}

// Load products from local storage
function load() {
    var storedProduct = JSON.parse(localStorage.getItem('listProduct'));
    if (storedProduct) {
        product = storedProduct;
    }
}

// Load products from local storage if available
if (localStorage.getItem("listProduct") != null) {
    load();
} else {
    Save();
}

// Display products in HTML
var listLocal = function() {
    var listproduct = [];
    for (var i in product) {
        var data = product[i]; // No need to JSON parse here
        listproduct.push('<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">');
        listproduct.push('<div class="card product p-2" style="width:auto">');
        listproduct.push('<img class="card-img-top" src="img/' + data.img + '" alt="...">');
        listproduct.push('<div class="card-title product-title text-center h5">' + data.name + '</div>');
        listproduct.push('<div class="price text-center h6">' + data.price + '₫</div>');
        listproduct.push('<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks()">');
        listproduct.push('<i class="fas fa-cart-plus"></i>');
        listproduct.push('</span>');
        listproduct.push('</div>');
        listproduct.push('</div>');
    }
    document.getElementById("banchay").innerHTML = listproduct.join(''); // Update the innerHTML in one go
    Save(); // Save once at the end
};

listLocal();
