document.addEventListener("DOMContentLoaded", function() {
    var products = Array.from(document.getElementsByClassName("product__link"));

    document.getElementById('btn__tim').addEventListener('click',function(){
        // Lấy giá trị từ trường nhập
        var searchQuery = document.getElementById("header__search__input").value.trim().toLowerCase();

        // Duyệt qua danh sách các sản phẩm và ẩn hoặc hiển thị sản phẩm dựa trên từ khóa tìm kiếm
        products.forEach(function(product) {
            var productName = product.querySelector(".product__des").innerText.trim().toLowerCase();

            // Kiểm tra xem tên sản phẩm có chứa từ khóa tìm kiếm không
            if (productName.includes(searchQuery)) {
                product.style.display = "block"; // Hiển thị sản phẩm nếu tên sản phẩm chứa từ khóa tìm kiếm
            } else {
                product.style.display = "none"; // Ẩn sản phẩm nếu tên sản phẩm không chứa từ khóa tìm kiếm
            }
        });
    });
});
