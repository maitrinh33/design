var product = [ 
    {
        id: "SP1",
        name: "Deluxe Room",
        img: "room1.jpg",
        price: 122000,
        description: "A spacious room with a king-size bed and a beautiful city view."
    },
    {
        id: "SP2",
        name: "Executive Suite",
        img: "room2.jpg",
        price: 400000,
        description: "A luxurious suite with a private balcony and lounge area."
    },
    {
        id: "SP3",
        name: "Standard Room",
        img: "room3.jpg",
        price: 350000,
        description: "A cozy room with modern amenities and a comfortable double bed."
    },
    {
        id: "SP4",
        name: "Presidential Suite",
        img: "room4.jpg",
        price: 564000,
        description: "An exclusive suite with a grand living space and a stunning sea view."
    },
    {
        id: "SP5",
        name: "Single Room",
        img: "room5.jpg",
        price: 654000,
        description: "Perfect for solo travelers, with a comfortable bed and work desk."
    },
    {
        id: "SP6",
        name: "Family Suite",
        img: "room6.jpg",
        price: 123000,
        description: "Spacious suite ideal for families, featuring two bedrooms and a kitchenette."
    },
    {
        id: "SP7",
        name: "Honeymoon Suite",
        img: "room7.jpg",
        price: 345000,
        description: "A romantic suite with a jacuzzi and breathtaking mountain views."
    },
    {
        id: "SP8",
        name: "Junior Suite",
        img: "room8.jpg",
        price: 258000,
        description: "A stylish suite with a comfortable sitting area and large windows."
    }
];

// Save the product array to local storage
function Save(){
    localStorage.setItem('listProduct', JSON.stringify(product));
}

// Load products from local storage
function load(){
    product = JSON.parse(localStorage.getItem('listProduct')) || [];
}

// If products exist in local storage, load them
if (localStorage.getItem("listProduct") != null) {
    load();
}

// Save the products initially
Save();

// Display the products dynamically in HTML
var listLocal = function() {
    var listproduct = "";
    for (var i in product) {
        var data = product[i]; // No need to use JSON.stringify here
        listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" style="width:auto">';
        listproduct += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + '₫</div>';
        listproduct += '<p class="description text-center">' + data.description + '</p>'; // Add description here
        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks()">';
        listproduct += '<a>';
        listproduct += '<i class="fas fa-cart-plus"></i>';
        listproduct += '</a>';
        listproduct += '</span>';
        listproduct += '</div>';
        listproduct += '</div>';

        document.getElementById("banchay").innerHTML += listproduct;
    }
    Save();
}

listLocal();
