

window.addEventListener('load', function () {
    var isLogin = JSON.parse(localStorage.getItem("Login"));
    var user = JSON.parse(localStorage.getItem("user"));
    if (isLogin == true) {
        document.getElementById('userId').innerHTML = user.username;
        var iconLogin = document.getElementById("iconLogin");
        var userId = document.getElementById("userId");
        var btnLogout = document.getElementById("btn__logout");
        var header__login = document.querySelector('.header__login');
        iconLogin.style.display = "block";
        userId.style.display = "block";
        btnLogout.style.display = "block";
        header__login.style.display = "none";
    }
    document.getElementById('btn__logout').addEventListener('click', function () {
        localStorage.setItem("Login", false);
        location.reload();
    });

    console.log('Toàn bộ trang đã được tải xong!');
    // Lấy tham số sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('product')) || 0;

    // Gọi hàm hiển thị thông tin sản phẩm
    displayProduct(products[productId]);





    // Lấy các phần tử cần thiết từ DOM
    const decreaseBtn = document.querySelector('#btn__pre');
    const increaseBtn = document.querySelector('#btn__next');
    const quantityElement = document.querySelector('.details__number');
    const priceElement = document.getElementById('details__total__price');

    // Lấy giá tiền từ nội dung của phần tử và loại bỏ dấu phẩy
    const giaTienText = priceElement.textContent.replace('.', '');

    const giaTien = parseFloat(giaTienText);
    console.log(giaTien);
    // Đặt sự kiện cho nút giảm
    decreaseBtn.addEventListener('click', function () {
        console.log("da click");

        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updatePrice(quantity, giaTien);
        }
    });

    // Đặt sự kiện cho nút tăng
    increaseBtn.addEventListener('click', function () {
        console.log("da click");

        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updatePrice(quantity, giaTien);
    });

    // Hàm cập nhật giá tiền dựa trên số lượng và giá tiền
    function updatePrice(quantity, giaTien) {
        const totalPrice = quantity * giaTien; // Tính tổng giá tiền
        priceElement.textContent = totalPrice.toLocaleString() + 'đ'; // Cập nhật tổng giá tiền
    }


});

// Mảng chứa thông tin sản phẩm
const products = [
    // 0 
    {
        name: "Nho nhập khẩu từ Hàn Quốc",
        image: "../img/nho.jpg",
        sell: "đã bán 60",
        price: 20.000,
        kilogram: "1 kg",
        thuongHieu: "TanFruits"
    },
    // 1
    {
        name: "Lê nhập khẩu từ Nhật Bản",
        image: "../img/le.jpg",
        sell: "đã bán 333",
        price: 50.000,
        kilogram: "1 kg",
        thuongHieu: "TanFruits"
    },
    // 2
    {
        name: "Táo đỏ ít hột",
        image: "../img/tao.jpg",
        sell: "đã bán 432",
        price: 20.000,
        kilogram: "1 kg",
        thuongHieu: "TanFruits"
    },
    // 3
    {
        name: "Khóm xuất khẩu trong nước",
        image: "../img/thom-dua.jpg",
        sell: "đã bán 123",
        price: 10.000,
        kilogram: "1 kg",
        thuongHieu: "TanFruits"
    },

    // 4
    {
        name: "Bưởi 5 roi Việt Nam",
        image: "../img/buoi.jpg",
        sell: "đã bán 1223",
        price: 70.000,
        kilogram: "1 kg",
        thuongHieu: "TanFruits"
    },
    // 5
    {
        name: "Mận mà Việt Nam",
        image: "../img/man.jpg",
        sell: "đã bán 6900",
        price: 75.000,
        kilogram: "2 kg",
        thuongHieu: "TanFruits"
    },
    // 6
    {
        name: "Kiwi Trung Quốc",
        image: "../img/kiwi.jpg",
        sell: "đã bán 300",
        price: 90.000,
        kilogram: "1 kg",
        thuongHieu: "TanFruits"
    },
    // 7
    {
        name: "Dâu tằm Đà Lạt",
        image: "../img/dau.jpg",
        sell: "đã bán 600",
        price: 150.000,
        kilogram: "1 kg",
        thuongHieu: "TanFruits"
    },
    // 8
    {
        name: "Dưa Hấu nông thôn",
        image: "../img/duahau.jpg",
        sell: "đã bán 120",
        price: 40.000,
        kilogram: "1 kg",
        thuongHieu: "TanFruits"
    },


];

// Hàm hiển thị thông tin sản phẩm
function displayProduct(product) {
    console.log("Hàm này đã được gọi");
    document.getElementById('details__name').innerText = product.name;
    document.getElementById('details__des').innerText = product.name;
    document.getElementById('details__total__price').innerText = `${product.price.toFixed(3)}đ`;
    document.getElementById('details__img').src = product.image;
    document.getElementById('details__price').innerText = `Giá: ${product.price.toFixed(3)}`;
    document.getElementById('product__sell').innerText = product.sell;
    document.getElementById('thuonghieu').innerText = product.thuongHieu;
}

