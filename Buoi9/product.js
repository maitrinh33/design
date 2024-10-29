const newProduct = {
    name: 'Example Product',
    price: 99.99,
    description: 'This is a sample product description',
    image: 'https://example.com/product-image.jpg'
};

addProduct(newProduct)
    .then(data => {
        console.log('Product added:', data);
        displayProducts(); // Call to fetch and display the products after adding
    })
    .catch(error => {
        console.error('Error adding product:', error);
    });
