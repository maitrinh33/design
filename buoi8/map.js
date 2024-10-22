// Khởi tạo một Map
const students = new Map();

// Thêm các cặp khóa-giá trị vào Map
students.set('John', { age: 20, grade: 'A' });
students.set('Mary', { age: 22, grade: 'B' });
students.set('Alex', { age: 21, grade: 'A+' });

// Truy cập giá trị bằng khóa
console.log(students.get('John')); 
console.log(students.get('Mary').grade); 

// Kiểm tra sự tồn tại của khóa
console.log(students.has('Alex')); 
console.log(students.has('David')); 

// Xóa phần tử bằng khóa
students.delete('Mary');
console.log(students); 

// Duyệt qua các phần tử
for (let [name, details] of students) {
  console.log(`${name}: Age = ${details.age}, Grade = ${details.grade}`);
}
