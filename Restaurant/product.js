const apiUrl = 'https://671a0badacf9aa94f6a8e190.mockapi.io/Restaurant';

// Function to fetch (READ) and display data 
function fetchDataFromAPI(callback) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}

// Function to create a restaurant (POST) 
function createRestaurant(restaurantData, callback) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurantData),
    })
        .then(response => response.json())
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}

// Function to delete a restaurant (DELETE) 
function deleteRestaurant(id, callback) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}

// Function to update a restaurant (PUT) 
function updateRestaurant(id, updatedRestaurant, callback) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRestaurant),
    })
        .then(response => response.json())
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}
