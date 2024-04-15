window.addEventListener('DOMContentLoaded', function () {
    var productBtnDetails = document.getElementById('product__btn__details');
    var productBtnBuy = document.getElementById('buy__btn');

    productBtnBuy.addEventListener('click',()=>{
        var isLogin = JSON.parse(localStorage.getItem("Login"));

        if (isLogin == false) {
            alert("Hãy đăng kí tài khoản để thực hiện")
            window.location.href = "../html/login.html"
        }
        else{
            alert("Bị dụ rồi mua được nịt");
        }
    })
    
    productBtnDetails.addEventListener('click', function () {
        var isLogin = JSON.parse(localStorage.getItem("Login"));

        if (isLogin == false) {
            alert("Hãy đăng kí tài khoản để thực hiện")
            window.location.href = "../html/login.html"
        }
        else {
            var detailsDes = document.getElementById('details__des').textContent;
            var detailsPrice = document.getElementById('details__price').textContent;
            var detailsImg = document.getElementById('details__img').src;
            var detailsNumber = document.getElementById('details__number').textContent;
            var detailsTotalPrice = document.getElementById('details__total__price').textContent;

            // Tạo một đối tượng sản phẩm
            var sanPham = {
                tenSP: detailsDes,
                giaSP: detailsPrice,
                hinhSP: detailsImg,
                soLuong: detailsNumber,
                tongGiaSP: detailsTotalPrice
            };

            // Lấy danh sách sản phẩm từ localStorage
            var danhSachSanPham = JSON.parse(localStorage.getItem('danhSachSanPham')) || [];

            // Thêm sản phẩm vào danh sách
            danhSachSanPham.push(sanPham);

            // Lưu danh sách sản phẩm mới vào localStorage
            localStorage.setItem('danhSachSanPham', JSON.stringify(danhSachSanPham));

            // Chuyển hướng người dùng đến trang cart.html
            window.location.href = 'cart.html';
        }
    });
});
