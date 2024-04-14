
window.onload = function() {
    const products = [
        // 0 
        {
            name: "Nho nhập khẩu từ Hàn Quốc",
            image: "../img/nho.jpg",
            sell:"đã bán 60",
            price: 20.000,
            kilogram:"1 kg",
            thuongHieu:"TanFruits"
        },
        // 1
        {
            name: "Lê nhập khẩu từ Nhật Bản",
            image: "../img/le.jpg",
            sell:"đã bán 333",
            price: 50.000,
            kilogram:"1 kg",
            thuongHieu:"TanFruits"
        },
        // 2
        {
            name: "Lê Việt Nam",
            image: "../img/le.jpg",
            sell:"đã bán 432",
            price: 20.000,
            kilogram:"1 kg",
            thuongHieu:"TanFruits"
        },
        // 3
        {
            name: "Khóm xuất khẩu trong nước",
            image: "../img/thom-dua.jpg",
            sell:"đã bán 123",
            price: 10.000,
            kilogram:"1 kg",
            thuongHieu:"TanFruits"
        },
        // 4
        {
            name: "Trái Lê",
            image: "../img/le.jpg",
            sell:"đã bán 600",
            price: 250.000,
            kilogram:"1 kg",
            thuongHieu:"TanFruits"
        },
        // 5
        {
            name: "Mận mà Việt Nam",
            image: "../img/man.jpg",
            sell:"đã bán 6900",
            price: 75.000,
            kilogram:"2 kg",
            thuongHieu:"TanFruits"
        },
        // 6
        {
            name: "Kiwi Trung Quốc",
            image: "../img/kiwi.jpg",
            sell:"đã bán 300",
            price: 90.000,
            kilogram:"1 kg",
            thuongHieu:"TanFruits"
        },
        // 7
        {
            name: "Dâu tằm Đà Lạt",
            image: "../img/dau.jpg",
            sell:"đã bán 600",
            price: 150.000,
            kilogram:"1 kg",
            thuongHieu:"TanFruits"
        },
        // 8
        {
            name: "Dưa Hấu nông thôn",
            image: "../img/duahau.jpg",
            sell:"đã bán 120",
            price: 40.000,
            kilogram:"1 kg",
            thuongHieu:"TanFruits"
        },
        
        
    ];
    
    // Lấy tham số sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('product')) || 0;
    
    // Hiển thị thông tin sản phẩm tương ứng
    document.addEventListener('DOMContentLoaded', function() {
        // Gọi hàm displayProduct tại đây
             displayProduct(products[productId]);
        });
    
    // Hàm hiển thị thông tin sản phẩm
    function displayProduct(product) {
        document.getElementById('details__name').innerText = product.name;
        document.getElementById('details__des').innerText = product.name;
       
        document.getElementById('details__total__price').innerText = `${product.price.toFixed(3)}đ`;
        document.getElementById('details__img').src = product.image;
        document.getElementById('details__price').innerText = `Giá: ${product.price.toFixed(3)}`;
        document.getElementById('product__sell').innerText = product.sell;
        document.getElementById('thuonghieu').innerText = product.thuongHieu;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        // Lấy các phần tử cần thiết từ DOM
        const decreaseBtn = document.querySelector('.btn__pre');
        const increaseBtn = document.querySelector('.btn__next');
        const quantityElement = document.querySelector('.details__number');
        const priceElement = document.getElementById('details__total__price');
    
        // Lấy giá tiền từ nội dung của phần tử và loại bỏ dấu phẩy
        const giaTienText = priceElement.textContent.replace('.', '');
        const giaTien = parseFloat(giaTienText);
    
        // Đặt sự kiện cho nút giảm
        decreaseBtn.addEventListener('click', function() {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updatePrice(quantity, giaTien);
            }
        });
    
        // Đặt sự kiện cho nút tăng
        increaseBtn.addEventListener('click', function() {
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
    
};