function addProduct(newProduct) {
    return new Promise((resolve, reject) => {
        fetch('https://656d3ffbbcc5618d3c22ee91.mockapi.io/product', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not add product');
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
        });
    });
}
