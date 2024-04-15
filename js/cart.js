window.addEventListener('DOMContentLoaded', function(){
    var cartTable = document.getElementById('table__cart');

    var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham'));

    if (danhSachSanPham && cartTable) {
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
            cartTable.appendChild(newRow);
        });
    }

    var btn__buy = document.getElementById('btn__buy');
    btn__buy.addEventListener('click',function(){
        alert("Bị dụ rồi mua được nịt");
    })
});
