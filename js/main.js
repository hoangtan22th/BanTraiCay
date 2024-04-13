const products = [
    // 0 đồ bộ bé trai
    {
        name: "Trái Nho",
        image: "../img/nho.jpg",
        sell:"đã bán 60",
        price: 250.000,
        kilogram:"1 kg",
        thuongHieu:"TanFruits"
    },
    // 1
    {
        name: "Trái Lê",
        image: "../img/le.jpg",
        sell:"đã bán 600",
        price: 250.000,
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