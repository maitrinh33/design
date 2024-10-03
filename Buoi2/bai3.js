let autoIncrement = 1;
let dataStorage = []; // Array to store customer product data

// Function to save data to array
function saveData() {
    const fullname = document.getElementById('fullname').value;
    const id_pro = document.getElementById('id_pro').value;
    const name_pro = document.getElementById('name_pro').value;
    const quantity_pro = parseFloat(document.getElementById('quantity_pro').value);
    const price_pro = parseFloat(document.getElementById('price_pro').value);

    // Prevent saving if invalid values are entered
    if (isNaN(quantity_pro) || isNaN(price_pro) || quantity_pro < 0 || price_pro < 0) {
        alert('Please enter valid quantity and price values.');
        return;
    }

    // Calculate discount, amount, and total
    const amount = quantity_pro * price_pro;
    const discount = amount * 0.1;
    const total = amount - discount;

    // Store data in the array
    const newData = {
        autoIncrement: autoIncrement++,
        fullname,
        id_pro,
        name_pro,
        quantity_pro,
        price_pro,
        discount: discount.toFixed(2),
        amount: amount.toFixed(2),
        total: total.toFixed(2)
    };

    dataStorage.push(newData); // Add data to the array

    resetForm(); // Reset form after saving
}

// Function to display data from array
function showData() {
    const tableBody = document.getElementById('data_table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear the table before displaying

    // Iterate over the array and display each item
    dataStorage.forEach(item => {
        const newRow = tableBody.insertRow();

        newRow.innerHTML = `
            <td>${item.autoIncrement}</td>
            <td>${item.fullname}</td>
            <td>${item.id_pro}</td>
            <td>${item.name_pro}</td>
            <td>${item.quantity_pro}</td>
            <td>${item.price_pro}</td>
            <td>${item.discount}</td>
            <td>${item.amount}</td>
            <td>${item.total}</td>
        `;
    });
}

// Function to reset the form inputs
function resetForm() {
    document.getElementById('fullname').value = '';
    document.getElementById('id_pro').value = '';
    document.getElementById('name_pro').value = '';
    document.getElementById('quantity_pro').value = '';
    document.getElementById('price_pro').value = '';
}