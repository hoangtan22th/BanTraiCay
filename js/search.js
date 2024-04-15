document.addEventListener("DOMContentLoaded", function() {
    var products = Array.from(document.getElementsByClassName("product__link"));

    document.getElementById('btn__tim').addEventListener('click',function(){

        var searchQuery = document.getElementById("header__search__input").value.trim().toLowerCase();
        products.forEach(function(product) {
            var productName = product.querySelector(".product__des").innerText.trim().toLowerCase();
            if (productName.includes(searchQuery)) {
                product.style.display = "block"; 
            } else {
                product.style.display = "none"; 
            }
        });
    });
});
