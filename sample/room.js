// room.js

const fs = require('fs');
const path = require('path');

const reservationsPath = path.join(__dirname, 'reservations.json');

// Room pricing data
const roomPricing = {
    101: { type: 'Single', pricePerNight: 100 },
    102: { type: 'Double', pricePerNight: 150 },
    103: { type: 'Suite', pricePerNight: 250 }
};

// Load reservations from JSON file
const loadReservations = () => {
    try {
        const dataBuffer = fs.readFileSync(reservationsPath);
        return JSON.parse(dataBuffer.toString());
    } catch (error) {
        return []; // If file doesn't exist or is empty
    }
};

// Save reservations to JSON file
const saveReservations = (reservations) => {
    const dataJSON = JSON.stringify(reservations, null, 2);
    fs.writeFileSync(reservationsPath, dataJSON);
};

// Calculate total price for the reservation
const calculatePrice = (roomNumber, nights) => {
    const room = roomPricing[roomNumber];
    if (room) {
        return room.pricePerNight * nights;
    } else {
        console.log(`Room ${roomNumber} not found.`);
        return 0;
    }
};

// Reserve a room
const reserveRoom = (name, roomNumber, date, nights) => {
    const reservations = loadReservations();
    const duplicate = reservations.find((r) => r.roomNumber === roomNumber && r.date === date);

    if (!duplicate) {
        const totalPrice = calculatePrice(roomNumber, nights);
        if (totalPrice > 0) {
            reservations.push({ name, roomNumber, date, nights, totalPrice });
            saveReservations(reservations);
            console.log(`Room ${roomNumber} (${roomPricing[roomNumber].type}) reserved for ${name} on ${date} for ${nights} night(s). Total price: $${totalPrice}`);
        }
    } else {
        console.log(`Room ${roomNumber} is already reserved on ${date}.`);
    }
};

// Cancel a reservation
const cancelReservation = (roomNumber, date) => {
    const reservations = loadReservations();
    const updatedReservations = reservations.filter((r) => !(r.roomNumber === roomNumber && r.date === date));

    if (updatedReservations.length === reservations.length) {
        console.log(`No reservation found for Room ${roomNumber} on ${date}.`);
    } else {
        saveReservations(updatedReservations);
        console.log(`Reservation for Room ${roomNumber} on ${date} has been canceled.`);
    }
};

// Exporting functions
module.exports = {
    reserveRoom,
    cancelReservation,
    loadReservations
};
