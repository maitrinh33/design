function getUser() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Không thể lấy dữ liệu từ API'); 
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

getUsers()
    .then(data => {
        //for (let index = 0; index < users.length; index++) {
        // const element = users[index];
        
        //}
        //console.log('Danh sách người dùng:', users[1].username);

        console.log('Danh ch người dùng:',);
        console.log('Tổng số người dùng:', data.length);
    })
    .catch(error => {
        console.error('Đã xảy ra lỗi: ', error);
    })