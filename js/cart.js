window.addEventListener('DOMContentLoaded', function(){
    // Lấy tham chiếu đến bảng
    var cartTable = document.getElementById('table__cart');

    // Lấy thông tin các sản phẩm từ localStorage
    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));

    // Hiển thị thông tin các sản phẩm trên trang cart
    if (danhSachSanPham && cartTable) {
        // Duyệt qua từng sản phẩm trong danh sách
        danhSachSanPham.forEach(function(sanPham, index) {
            var newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${index + 1}</td>
                <td><img src="${sanPham.hinhSP}" alt="Product Image" width="50%" height="200px"></td>
                <td>${sanPham.tenSP}</td>
                <td>${sanPham.giaSP}</td>
                <td>${sanPham.soLuong}</td>
                <td>${sanPham.tongGiaSP}</td>
            `;
            // Thêm hàng mới vào bảng
            cartTable.appendChild(newRow);
        });
    }
});
