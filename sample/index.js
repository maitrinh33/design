// index.js

const { reserveRoom, cancelReservation, loadReservations } = require('./room');

// Reserve a room (Usage Example)
reserveRoom('Alice', 101, '2024-10-20', 3); // Reserve Room 101 for 3 nights
reserveRoom('Bob', 102, '2024-10-21', 2);  // Reserve Room 102 for 2 nights
reserveRoom('Charlie', 103, '2024-10-22', 1); // Reserve Room 103 for 1 night

// Cancel a reservation (Usage Example)
cancelReservation(101, '2024-10-20');

// Export reservations
const reservations = loadReservations();
console.log('Current Reservations:', reservations);
