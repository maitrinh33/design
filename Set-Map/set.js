// Khởi tạo một Set
const uniqueNumbers = new Set();

// Thêm các phần tử vào Set
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(1); // Thêm trùng lặp, nhưng Set sẽ không thêm phần tử này

console.log(uniqueNumbers); 

// Kiểm tra sự tồn tại của phần tử
console.log(uniqueNumbers.has(2)); 
console.log(uniqueNumbers.has(4));

// Xóa phần tử
uniqueNumbers.delete(2);
console.log(uniqueNumbers); 
